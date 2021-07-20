google.charts.load('current', { 'packages': ['corechart'] });
// google.charts.setOnLoadCallback(drawChart);

const getIncome = async (range) => {
    let sum2 = 0;
    const res2 = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("ActiveExchanges").where("Type", "==", 3).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                date = data.Date;
                oneRow = data.Amount;
                if (DatesDiff(range, date) == true) {
                    sum2 = sum2 + oneRow
                }
            });
            return sum2;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    return res2;
}

const sumIn = async (range) => getIncome(range).then(async function (result) {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PieChart").doc(range).update({
        "Income": result
    })
})

const getExpense = async (range) => {
    let sum1 = 0;
    const res1 = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("ActiveExchanges").where("Type", "==", 4).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                date = data.Date;
                oneRow = data.Amount;
                if (DatesDiff(range, date) == true) {
                    sum1 = sum1 + oneRow
                }
            });
            return sum1;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    return res1;
}

const sumEx = async (range) => getExpense(range).then(async function (result) {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PieChart").doc(range).update({
        "Expense": result
    })
})

const drawChart = async (range) => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PieChart").doc(range)
        .get()
        .catch(err => {
            console.log(`Error: ${err}`)
        });
    let chartSection = document.getElementById("chartSection")
    if (range == "7days") {
        chartSection.innerHTML = `
    <div style="margin-right: 100px; text-align: center;">Active Exchanges Contribution in last 7 days</div>
    <div class="btn-group">
      <div data-bs-toggle="dropdown" aria-expanded="false">
        <div style="margin-bottom: 2px;" class="cursor-pointer">
          Time range
          <img src="../img/dropdown-icon.png" height="20px" width="20px" />
        </div>
      </div>
      <ul class="dropdown-menu">
        <li><a id="7days" class="dropdown-item cursor-pointer">7 days</a></li>
        <li><a id="amonth" class="dropdown-item cursor-pointer">1 month</a></li>
        <li><a id="6months" class="dropdown-item cursor-pointer">6 months</a></li>
        <li><a id="ayear" class="dropdown-item cursor-pointer">1 year</a></li>
      </ul>
    </div>
    <div id="piechart" style="width: 700px; height: 500px;"></div>
    `
    }
    if (range == "aMonth") {
        chartSection.innerHTML = `
        <div style="margin-right: 100px; text-align: center;">Active Exchanges Contribution in last month</div>
        <div class="btn-group">
          <div data-bs-toggle="dropdown" aria-expanded="false">
            <div style="margin-bottom: 2px;" class="cursor-pointer">
              Time range
              <img src="../img/dropdown-icon.png" height="20px" width="20px" />
            </div>
          </div>
          <ul class="dropdown-menu">
            <li><a id="7days" class="dropdown-item cursor-pointer">7 days</a></li>
            <li><a id="amonth" class="dropdown-item cursor-pointer">1 month</a></li>
            <li><a id="6months" class="dropdown-item cursor-pointer">6 months</a></li>
            <li><a id="ayear" class="dropdown-item cursor-pointer">1 year</a></li>
          </ul>
        </div>
        <div id="piechart" style="width: 700px; height: 500px;"></div>
        `
    }
    if (range == "6Months") {
        chartSection.innerHTML = `
        <div style="margin-right: 100px; text-align: center;">Active Exchanges Contribution in last 6 months</div>
        <div class="btn-group">
          <div data-bs-toggle="dropdown" aria-expanded="false">
            <div style="margin-bottom: 2px;" class="cursor-pointer">
              Time range
              <img src="../img/dropdown-icon.png" height="20px" width="20px" />
            </div>
          </div>
          <ul class="dropdown-menu">
            <li><a id="7days" class="dropdown-item cursor-pointer">7 days</a></li>
            <li><a id="amonth" class="dropdown-item cursor-pointer">1 month</a></li>
            <li><a id="6months" class="dropdown-item cursor-pointer">6 months</a></li>
            <li><a id="ayear" class="dropdown-item cursor-pointer">1 year</a></li>
          </ul>
        </div>
        <div id="piechart" style="width: 700px; height: 500px;"></div>
        `
    }
    if (range == "aYear") {
        chartSection.innerHTML = `
        <div style="margin-right: 100px; text-align: center;">Active Exchanges Contribution in last year</div>
        <div class="btn-group">
          <div data-bs-toggle="dropdown" aria-expanded="false">
            <div style="margin-bottom: 2px;" class="cursor-pointer">
              Time range
              <img src="../img/dropdown-icon.png" height="20px" width="20px" />
            </div>
          </div>
          <ul class="dropdown-menu">
            <li><a id="7days" class="dropdown-item cursor-pointer">7 days</a></li>
            <li><a id="amonth" class="dropdown-item cursor-pointer">1 month</a></li>
            <li><a id="6months" class="dropdown-item cursor-pointer">6 months</a></li>
            <li><a id="ayear" class="dropdown-item cursor-pointer">1 year</a></li>
          </ul>
        </div>
        <div id="piechart" style="width: 700px; height: 500px;"></div>
        `
    }
    let data1 = res.data();
    var data = google.visualization.arrayToDataTable([
        ['Type', 'Number'],
        ['Active Incomes', data1.Income],
        ['Active Expenses', data1.Expense]
    ]);

    var options = {
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    if (data1.Income == 0 && data1.Expense == 0) {
      document.getElementById("piechart").innerHTML = "No record available"
    } else {
      chart.draw(data, options);
    }
}