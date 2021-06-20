const First = async () => { //tạo và update filed số dư của mỗi user
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).set({ "Balance": "" })
}

const A = async () => { // tạo doc chứa quỹ tiết kiệm mới trong Savings
    console.log("clicked");
    var date = new Date()
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("Savings").add({
        "Name": "",
        "Amount": "",
        "Date": date,
        "Status": 0
    })
}

const AA = async () => { // xóa doc chứa quỹ tiết kiệm đã tạo trong Savings
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("Savings").doc("").update({
        "Status": 1
    })
}

const B1 = async () => { // tạo doc chứa nguồn thu tăng theo % mới trong PassiveIncome
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("PassiveIncome").add({
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

const BB = async () => { // xóa doc chứa nguồn thu đã tạo trong PassiveIncome
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("PassiveIncome").doc("").update({
        "Status": 1
    })
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

const CC = async () => { // xóa doc chứa thu/chi đã tạo trong ActiveExchanges
    console.log("clicked");
    const res = await firebase.firestore().collection("Users").doc(currentUser.email).collection("ActiveExchanges").doc("").update({
        "Status": 1
    })
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
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("PassiveIncome").where("Type", "==", 1).where("Status", "==", 0)
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
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("PassiveIncome").where("Type", "==", 2).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${doc.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.StartDate}</td>
                            <td>${Passive2(data.Amount, data.StartDate)}</td>
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
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("ActiveExchanges").where("Type", "==", 3).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${doc.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.Date}</td>
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
    const res = await firebase.firestore().collection("Users").doc("Hung").collection("PassiveIncome").where("Type", "==", 4).where("Status", "==", 0)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                let data = doc.data();
                let row = `<tr>
                            <td>${doc.Name}</td>
                            <td>${data.Amount}</td>
                            <td>${data.Date}</td>
                           </tr>`;
                let table = document.getElementById('myTable')
                table.innerHTML += row
            })
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        });
}


// const testNhe = document.getElementById("testNhe");
// testNhe.addEventListener('click', ABC);