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

    } 
    catch (err) { 
        console.log("err", err);
        if (err.code == 'auth/user-not-found'  
            || err.code == "auth/invalid-email"   
        ) 
        {
            document.getElementById('email-error').innerText = "User not found";
        }

        else if (err.code == 'auth/wrong-password') {
            console.log("err:", err);
            document.getElementById('password-error').innerText = "Password is incorrect";
        }
    }
}
