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

