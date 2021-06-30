const controller = {};
controller.register = (data) => {
    if (data.firstName === "") {
        document.getElementById('first-name-error').innerText = "First Name must be filled"
    }
    else {
        document.getElementById("first-name-error").innerText = ""
    }

    if (data.lastName === "") {
        document.getElementById('last-name-error').innerText = "Last Name must be filled"
    }
    else {
        document.getElementById('last-name-error').innerText = ""
    }

    if (data.email === "") {
        document.getElementById('email-error').innerText = "Email must be filled"
    }
    else {
        document.getElementById('email-error').innerText = ""
    }

    if (data.password === "") {
        document.getElementById('password-error').innerText = "Password is needed"
    }
    else {
        document.getElementById('password-error').innerText = ""
    }

    if (data.confirmPassword === "") {
        document.getElementById('confirm-password-error').innerText = "Please confirm your password"
    }
    else if (data.confirmPassword.trim() !== data.password.trim()) {
        document.getElementById('confirm-password-error').innerText = "Password does not match"
    }
    else {
        document.getElementById('confirm-password-error').innerText = ""
    }



    if (data.firstName !== "" &&
        data.lastName !== "" &&
        data.email !== "" &&
        data.password !== "" &&
        data.confirmPassword !== "" &&
        data.password === data.confirmPassword
    ) {
        model.register(data);
    }
}


controller.login = (dataLogin) => {
    if (dataLogin.email.trim() === "") {
        document.getElementById('email-error').innerText = "Email is missing"
    }
    else {
        document.getElementById('email-error').innerText = ""
    }

    if (dataLogin.password.trim() === "") {
        document.getElementById('password-error').innerText = "Password is missing"
    }
    else {
        document.getElementById('password-error').innerText = ""
    }


    if (dataLogin.email !== "" && dataLogin.password !== "") {
        model.login(dataLogin);
    }

}


controller.savingsForm = (dataSavings) => {
    if (dataSavings.name.trim() === "") {
        document.getElementById("name-error").innerText = "Name is missing"
    }
    else {
        document.getElementById("name-error").innerText = ""
    }
    if (dataSavings.amount === "") {
        document.getElementById("amount-error").innerText = "Amount is missing"
    }
    else {
        document.getElementById("amount-error").innerText = ""
    }
    if (dataSavings.name.trim() !== "" && dataSavings.amount !== "") {
        dataSavings = {
            name: dataSavings.name,
            amount: Number(dataSavings.amount)
        }
        model.savingsForm(dataSavings)
    }
}

controller.passiveIncomeForm1 = (dataPI1) => {
    if (dataPI1.name.trim() === "") {
        document.getElementById("name-error").innerText = "Name is missing"
    }
    else {
        document.getElementById("name-error").innerText = ""
    }
    if (dataPI1.amount === "") {
        document.getElementById("amount-error").innerText = "Amount is missing"
    }
    else {
        document.getElementById("amount-error").innerText = ""
    }
    if (dataPI1.rate === "") {
        document.getElementById("rate-error").innerText = "Rate is missing"
    }
    else {
        document.getElementById("rate-error").innerText = ""
    }
    if (Date.parse(dataPI1.date) > Date.parse(new Date())) {
        document.getElementById("date-error").innerText = "Date is not suitable"
    }
    else {
        document.getElementById("date-error").innerText = ""
    }
    if (dataPI1.name.trim() !== "" && Date.parse(dataPI1.date) <= Date.parse(new Date()) && dataPI1.rate !== "" && dataPI1.amount !== "") {
        dataPI1 = {
            name: dataPI1.name,
            amount: Number(dataPI1.amount),
            rate: Number(dataPI1.rate),
            date: dataPI1.date
        }
        model.passiveIncomeForm1(dataPI1)
    }
}

controller.passiveIncomeForm2 = (dataPI2) => {
    if (dataPI2.name.trim() === "") {
        document.getElementById("name-error").innerText = "Name is missing"
    }
    else {
        document.getElementById("name-error").innerText = ""
    }
    if (dataPI2.amount === "") {
        document.getElementById("amount-error").innerText = "Amount is missing"
    }
    else {
        document.getElementById("amount-error").innerText = ""
    }
    if (Date.parse(dataPI2.date) > Date.parse(new Date())) {
        document.getElementById("date-error").innerText = "Date is not suitable"
    }
    else {
        document.getElementById("date-error").innerText = ""
    }
    if (dataPI2.name.trim() !== "" && Date.parse(dataPI2.date) <= Date.parse(new Date()) && dataPI2.amount !== "") {
        dataPI2 = {
            name: dataPI2.name,
            amount: Number(dataPI2.amount),
            date: dataPI2.date
        }
        model.passiveIncomeForm2(dataPI2)
    }
}

controller.AEForm = (dataAE) => {
    if (dataAE.name.trim() === "") {
        document.getElementById("name-error").innerText = "Name is missing"
    }
    else {
        document.getElementById("name-error").innerText = ""
    }
    if (dataAE.amount === "") {
        document.getElementById("amount-error").innerText = "Amount is missing"
    }
    else {
        document.getElementById("amount-error").innerText = ""
    }
    if (Date.parse(dataAE.date) > Date.parse(new Date())) {
        document.getElementById("date-error").innerText = "Date is not suitable"
    }
    else {
        document.getElementById("date-error").innerText = ""
    }
    if (dataAE.name.trim() !== "" && Date.parse(dataAE.date) <= Date.parse(new Date()) && dataAE.amount !== "") {
        dataAE = {
            name: dataAE.name,
            amount: Number(dataAE.amount),
            date: dataAE.date,
            type: Number(dataAE.type)
        }
        model.AEForm(dataAE)
    }
}