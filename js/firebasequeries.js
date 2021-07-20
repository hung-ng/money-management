const Balance = async () => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .get()
    let data = res.data()
    result = data.PITotal + data.AETotal
    const res1 = await firebase.firestore().collection("Users").doc(model.currentUser.email).update({ "Balance": result });
    if (data.Balance < data.SavingsTotal) {
        alert("Your balance is below your total savings!!!")
    }

}

const Display = async () => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .get()
        .catch(err => {
            console.log(`Error: ${err}`)
        });
    let data = res.data()
    let row1 = `
    <p class="numberDisplay">${numberWithCommas(data.Balance)}</p>`
    let table1 = document.getElementById('balanceDisplay')
    table1.innerHTML += row1
    let row2 = `
    <p class="numberDisplay">${numberWithCommas(data.SavingsTotal)}</p>`
    let table2 = document.getElementById('savingsDisplay')
    table2.innerHTML += row2
}

//--------------------------------------------------------------

const sumPassiveIncome1 = async () => {
    let sumPassive = 0;
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("PassiveIncome").where("Type", "==", 1).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                oneRow = Passive1(data.Amount, data.InterestRate, data.StartDate)
                sumPassive = sumPassive + oneRow
            });
            return sumPassive;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    return res;
}

const sumPassiveIncome2 = async () => {
    let sumPassive = 0;
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("PassiveIncome").where("Type", "==", 2).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                oneRow = Passive2(data.Amount, data.StartDate)
                sumPassive = sumPassive + oneRow
            });
            return sumPassive;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    return res;
}
const sumPI1 = () => sumPassiveIncome1().then(async function (result) {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").doc("Total").update({
        "Total1": result
    })
})

const sumPI2 = () => sumPassiveIncome2().then(async function (result) {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").doc("Total").update({
        "Total2": result
    })
})

const PITotal = async () => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("PassiveIncome").doc("Total")
        .get()
    let data = res.data()
    result = data.Total1 + data.Total2
    const res1 = await firebase.firestore().collection("Users").doc(model.currentUser.email).update({ "PITotal": result });
}

//-------------------------------------------------------------------------

const sumSavings = async () => {
    let sum = 0;
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("Savings").where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                oneRow = data.Amount
                sum = sum + oneRow
            });
            return sum;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    return res;
}

const sumTotalSavings = () => sumSavings().then(async function (result) {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).update({ "SavingsTotal": result });
})

//------------------------------------------------------------------------

const sumExchanges1 = async () => {
    let sum = 0;
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("ActiveExchanges").where("Type", "==", 3).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                oneRow = data.Amount
                sum = sum + oneRow
            });
            return sum;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    return res;
}

const sumAE1 = () => sumExchanges1().then(async function (result) {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").doc("Total").update({
        "Total1": result
    })
})

const sumExchanges2 = async () => {
    let sum = 0;
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("ActiveExchanges").where("Type", "==", 4).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                oneRow = data.Amount
                sum = sum + oneRow
            });
            return sum;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    return res;
}

const sumAE2 = () => sumExchanges2().then(async function (result) {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").doc("Total").update({
        "Total2": result
    })
})

const AETotal = async () => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email)
        .collection("ActiveExchanges").doc("Total")
        .get()
    let data = res.data()
    result = data.Total1 - data.Total2
    const res1 = await firebase.firestore().collection("Users").doc(model.currentUser.email).update({ "AETotal": result });
}

//------------------------------------------------------------------------
const A = async (data) => { // tạo doc chứa quỹ tiết kiệm mới trong Savings
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("Savings").add({
        "Name": data.name,
        "Amount": data.amount,
        "Status": 0
    })
}

const AA = async (id) => { // xóa doc chứa quỹ tiết kiệm đã tạo trong Savings
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("Savings").doc(id).update({
        "Status": 1
    });
    view.setActiveScreen("savings")
}

const B1 = async () => { // tạo doc chứa nguồn thu tăng theo % mới trong PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").add({
        "Name": "",
        "Amount": "",
        "InterestRate": "",
        "StartDate": "",
        "Type": 1,
        "Status": 0
    })
}

const B2 = async () => { // tạo doc chứa nguồn thu tăng đều mới trong PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").add({
        "Name": "",
        "Amount": "",
        "StartDate": "",
        "Type": 2,
        "Status": 0
    })
}

const BB1 = async (id) => { // xóa doc chứa nguồn thu đã tạo trong PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").doc(id).update({
        "Status": 1
    });
    view.setActiveScreen("passiveIncome1")
}

const BB2 = async (id) => { // xóa doc chứa nguồn thu đã tạo trong PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").doc(id).update({
        "Status": 1
    });
    view.setActiveScreen("passiveIncome2")
}

const C1 = async () => { // tạo doc chứa chi tiêu mới trong ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").add({
        "Name": "",
        "Amount": "",
        "Date": "",
        "Type": 3,
        "Status": 0
    })
}

const C2 = async () => { // tạo doc chứa thu nhập mới trong ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").add({
        "Name": "",
        "Amount": "",
        "Date": "",
        "Type": 4,
        "Status": 0
    })
}

const CC = async (id) => { // xóa doc chứa thu/chi đã tạo trong ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").doc(id).update({
        "Status": 1
    });
    view.setActiveScreen("activeExchanges")
}

const CC1 = async (id) => { // xóa doc chứa thu/chi đã tạo trong ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").doc(id).update({
        "Status": 1
    });
    FetchDataC1()
}

const CC2 = async (id) => { // xóa doc chứa thu/chi đã tạo trong ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").doc(id).update({
        "Status": 1
    });
    FetchDataC2()
}

//-------------------------------------------------------------------------------------------------------------------------------------

const FetchDataA = async () => { //display bảng Savings
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("Savings").where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${data.Name}</td>
                            <td>${numberWithCommas(data.Amount)}</td>
                            <td onclick="AA('${doc.id}')"><img class="cursor-pointer" src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('savingsTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataB1 = async () => { //display bảng nguồn thu tăng theo % PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").where("Type", "==", 1).where("Status", "==", 0).orderBy("StartDate", "desc")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${data.Name}</td>
                            <td>${numberWithCommas(data.Amount)}</td>
                            <td>${data.InterestRate}</td>
                            <td>${data.StartDate}</td>
                            <td>${numberWithCommas(Passive1(data.Amount, data.InterestRate, data.StartDate))}</td>
                            <td onclick="BB1('${doc.id}')"><img class="cursor-pointer" src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('passiveincomeTable1')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataB2 = async () => { //display bảng nguồn thu tăng đều PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").where("Type", "==", 2).where("Status", "==", 0).orderBy("StartDate", "desc")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${data.Name}</td>
                            <td>${numberWithCommas(data.Amount)}</td>
                            <td>${data.StartDate}</td>
                            <td>${numberWithCommas(Passive2(data.Amount, data.StartDate))}</td>
                            <td onclick="BB2('${doc.id}')"><img class="cursor-pointer" src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('passiveincomeTable2')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataC = async () => { //display bảng chi tiêu ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").where("Status", "==", 0).orderBy("Date", "desc")
        .get()
        .then(querySnapshot => {
            document.getElementById('activeExchangesTable').innerHTML = ``
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${data.Name}</td>
                            <td>${numberWithCommas(data.Amount)}</td>
                            <td>${data.Date}</td>
                            <td>${Type(data.Type)}</td>
                            <td onclick="CC('${doc.id}')"><img class="cursor-pointer" src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('activeExchangesTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataC1 = async () => { //display bảng chi tiêu ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").where("Type", "==", 3).where("Status", "==", 0).orderBy("Date", "desc")
        .get()
        .then(querySnapshot => {
            document.getElementById('activeExchangesTable').innerHTML = ``
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${data.Name}</td>
                            <td>${numberWithCommas(data.Amount)}</td>
                            <td>${data.Date}</td>
                            <td>${Type(data.Type)}</td>
                            <td onclick="CC1('${doc.id}')"><img class="cursor-pointer" src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('activeExchangesTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataC2 = async () => { //display bảng chi tiêu ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").where("Type", "==", 4).where("Status", "==", 0).orderBy("Date", "desc")
        .get()
        .then(querySnapshot => {
            document.getElementById('activeExchangesTable').innerHTML = ``
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${data.Name}</td>
                            <td>${numberWithCommas(data.Amount)}</td>
                            <td>${data.Date}</td>
                            <td>${Type(data.Type)}</td>
                            <td onclick="CC2('${doc.id}')"><img class="cursor-pointer" src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('activeExchangesTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

function monthDiff(d1) { // tính số tháng chênh lệch để tính tiền của các mức thu nhập bị động
    var monthdiff;
    d1 = new Date(d1)
    var d2 = new Date()
    monthdiff = (d2.getFullYear() - d1.getFullYear()) * 12;
    monthdiff -= d1.getMonth();
    monthdiff += d2.getMonth();
    if (d1.getDate() > d2.getDate()) {
        monthdiff -= 1
    }
    if (monthdiff <= 0) {
        return 0
    } else {
        return monthdiff
    }
}

function DatesDiff(range, d1) {
    d1 = new Date(d1);
    var d2 = new Date();
    if (range == "7days") {
        if (((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)) > 7) {
            return false
        } else {
            return true
        }
    }
    if (range == "aMonth") {
        if (d2.getFullYear() - d1.getFullYear() == 1) {
            if (d2.getMonth() == 1 && d1.getMonth() == 12) {
                return true
            } else {
                return false
            }
        } else if (d2.getFullYear() - d1.getFullYear() == 0) {
            if (d2.getMonth() - d1.getMonth() == 1) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    if (range == "6Months") {
        if (d2.getFullYear() - d1.getFullYear() == 1) {
            if (d2.getMonth() < 7 && d2.getMonth() + 12 - d1.getMonth() < 7) {
                return true
            } else {
                return false
            }
        } else if (d2.getFullYear() - d1.getFullYear() == 1) {
            if (d2.getMonth() - 6 > d1.getMonth()) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }

    if (range == "aYear") {
        if (d2.getFullYear() - d1.getFullYear() == 1) {
            return true
        } else {
            return false
        }
    }

}

function Passive1(amount, rate, startdate) { //tính số tiền tổng của từng mức thu nhập bị động tăng theo %
    var monthdiff = monthDiff(startdate)
    return Math.round(amount * (((rate + 100) / 100) ** monthdiff)) // tra ve la 1 number
}

function Passive2(amount, startdate) { //tính số tiền tổng của từng mức thu nhập bị động tăng cố định
    var monthdiff = monthDiff(startdate)
    return amount * (monthdiff + 1)
}

function Type(aetype) {
    if (aetype === 3) {
        return "Income"
    }
    else {
        return "Expense"
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}