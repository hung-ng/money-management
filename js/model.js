const model = {};
model.currentUser = undefined;
model.register = async (data) => {
    try {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);




        firebase.auth().currentUser.updateProfile({
            displayName: data.lastName + " " + data.firstName
        });



        firebase.auth().currentUser.sendEmailVerification();


        alert('Your email has been registered, please check your email');
        const res = await firebase.firestore().collection("Users").doc(data.email).set({
            "Balance": 0,
            "AETotal": 0,
            "SavingsTotal": 0,
            "PITotal": 0,
        })
        const res1 = await firebase.firestore().collection("Users").doc(data.email).collection("PassiveIncome").doc("Total").set({
            "Total1": 0,
            "Total2": 0
        })
        const res2 = await firebase.firestore().collection("Users").doc(data.email).collection("ActiveExchanges").doc("Total").set({
            "Total1": 0,
            "Total2": 0
        })
        view.setActiveScreen('loginScreen');

    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
}

model.login = async (dataLogin) => {
    try {
        const response = await firebase
            .auth()
            .signInWithEmailAndPassword(dataLogin.email, dataLogin.password);
        if (response.user.emailVerified === false) {
            alert("Your email is not verified")
        }
    }
    catch (err) {
        console.log("err", err);
        if (err.code == 'auth/user-not-found'
            || err.code == "auth/invalid-email"
        ) {
            document.getElementById('email-error').innerText = "User not found";
        }

        else if (err.code == 'auth/wrong-password') {
            console.log("err:", err);
            document.getElementById('password-error').innerText = "Password is incorrect";
        }
    }
}

model.savingsForm = async (dataSavings) => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("Savings").add({
        "Name": dataSavings.name,
        "Amount": dataSavings.amount,
        "Status": 0
    })
    view.setActiveScreen("savings")
}

model.passiveIncomeForm1 = async (dataPI1) => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").add({
        "Name": dataPI1.name,
        "Amount": dataPI1.amount,
        "InterestRate": dataPI1.rate,
        "StartDate": dataPI1.date,
        "Type": 1,
        "Status": 0
    })
    view.setActiveScreen("passiveIncome1")
}

model.passiveIncomeForm2 = async (dataPI2) => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("PassiveIncome").add({
        "Name": dataPI2.name,
        "Amount": dataPI2.amount,
        "StartDate": dataPI2.date,
        "Type": 2,
        "Status": 0
    })
    view.setActiveScreen("passiveIncome2")
}

model.AEForm = async (dataAE) => {
    const res = await firebase.firestore().collection("Users").doc(model.currentUser.email).collection("ActiveExchanges").add({
        "Name": dataAE.name,
        "Amount": dataAE.amount,
        "Date": dataAE.date,
        "Type": dataAE.type,
        "Status": 0
    })
    view.setActiveScreen("activeExchanges")
}
