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
  let chartTitle = document.getElementById("chartTitle")
  if (range == "7days") {
    chartTitle.innerText = "Active Exchanges Contribution in last 7 days"
  }
  if (range == "aMonth") {
    chartTitle.innerHTML = "Active Exchanges Contribution in last month"
  }
  if (range == "6Months") {
    chartTitle.innerHTML = "Active Exchanges Contribution in last 6 months"
  }
  if (range == "aYear") {
    chartTitle.innerHTML = "Active Exchanges Contribution in last year"
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