const Balance = async () => { //tạo và update field số dư của mỗi user
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).set({ "Balance": "" })
}

const sumPassiveIncome = async () => {
    let sumPassive = 0;
    const res = await firebase.firestore().collection("Users").doc("Hung")
        .collection("PassiveIncome").where("Type", "==", 1).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                oneRow = Passive1(data.Amount, data.InterestRate, data.StartDate)
                sumPassive = sumPassive + oneRow
            });
            console.log('run return sumPassive', sumPassive);
            return sumPassive;  //den day done
        })
        .catch(err => {
            console.log(`Error: ${err}`); //khong he co loi
        });

        

}


//------------------------------------------------------------------------
const A = async (data) => { // tạo doc chứa quỹ tiết kiệm mới trong Savings
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("Savings").add({
        "Name": data.name,
        "Amount": data.amount,
        "Date": data.date,
        "Status": 0
    })
    location.reload()
}

const AA = async (id) => { // xóa doc chứa quỹ tiết kiệm đã tạo trong Savings
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("Savings").doc(id).update({
        "Status": 1
    });
    location.reload()
}

const B1 = async () => { // tạo doc chứa nguồn thu tăng theo % mới trong PassiveIncome
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("PassiveIncome").add({
        "Name": "",
        "Amount": "",
        "InterestRate": "",
        "StartDate": "",
        "Type": 1,
        "Status": 0
    })
}

const B2 = async () => { // tạo doc chứa nguồn thu tăng đều mới trong PassiveIncome
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("PassiveIncome").add({
        "Name": "",
        "Amount": "",
        "StartDate": "",
        "Type": 2,
        "Status": 0
    })
}

const BB = async (id) => { // xóa doc chứa nguồn thu đã tạo trong PassiveIncome
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("PassiveIncome").doc(id).update({
        "Status": 1
    });
    location.reload()
}

const C1 = async () => { // tạo doc chứa chi tiêu mới trong ActiveExchanges
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("ActiveExchanges").add({
        "Name": "",
        "Amount": "",
        "Date": "",
        "Type": 3,
        "Status": 0
    })
}

const C2 = async () => { // tạo doc chứa thu nhập mới trong ActiveExchanges
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("ActiveExchanges").add({
        "Name": "",
        "Amount": "",
        "Date": "",
        "Type": 4,
        "Status": 0
    })
}

const CC = async (id) => { // xóa doc chứa thu/chi đã tạo trong ActiveExchanges
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("ActiveExchanges").doc(id).update({
        "Status": 1
    });
    location.reload()
}

//-------------------------------------------------------------------------------------------------------------------------------------

const FetchDataA = async () => { //display bảng Savings
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("Savings").where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${data.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.Date}</td>
                            <td onclick="AA('${doc.id}')"><img src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('myTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataB1 = async () => { //display bảng nguồn thu tăng theo % PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("PassiveIncome").where("Type", "==", 1).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${doc.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.InterestRate}</td>
                            <td>${data.StartDate}</td>
                            <td>${Passive1(data.Amount, data.InterestRate, data.StartDate)}</td>
                            <td onclick="BB('${doc.id}')"><img src="../img/deleteIcon.png"></td>
                           </tr>`;
                let table = document.getElementById('myTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataB2 = async () => { //display bảng nguồn thu tăng đều PassiveIncome
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("PassiveIncome").where("Type", "==", 2).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                doc.update({
                    "Total": Passive2(data.Amount, data.StartDate)
                });
                let row = `<tr>
                            <td>${doc.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.StartDate}</td>
                            <td>${Passive2(data.Amount, data.StartDate)}</td>
                            <td onclick="BB('${doc.id}')"><img src="../img/deleteIcon.png"></td>
                           </tr>`;
                let table = document.getElementById('myTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataC1 = async () => { //display bảng chi tiêu ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("ActiveExchanges").where("Type", "==", 3).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${doc.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.Date}</td>
                            <td onclick="CC('${doc.id}')"><img src="../img/deleteIcon.png" height="50px" width="50px"></td>
                           </tr>`;
                let table = document.getElementById('myTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}

const FetchDataC2 = async () => { //display bảng thu nhập ActiveExchanges
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("PassiveIncome").where("Type", "==", 4).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${doc.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.Date}</td>
                            <td onclick="CC('${doc.id}')"><img src="../img/deleteIcon.png"></td>
                           </tr>`;
                let table = document.getElementById('myTable')
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

function Passive1(amount, rate, startdate) { //tính số tiền tổng của từng mức thu nhập bị động tăng theo %
    var monthdiff = monthDiff(startdate)
    return Math.round(amount * (((rate + 100) / 100) ** monthdiff)) // tra ve la 1 number
}

function Passive2(amount, startdate) { //tính số tiền tổng của từng mức thu nhập bị động tăng cố định
    var monthdiff = monthDiff(startdate)
    return amount * (monthdiff + 1)
}

// const testNhe = document.getElementById("testNhe");
// testNhe.addEventListener('click', FetchDataA);