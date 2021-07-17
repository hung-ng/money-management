const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case "registerScreen":
            document.getElementById('main').innerHTML = component.registerScreen;
            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    firstName: registerForm.firstName.value.trim(),
                    lastName: registerForm.lastName.value.trim(),
                    email: registerForm.email.value.trim(),
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                controller.register(data);
            });

            document.getElementById('redirect-to-login').addEventListener('click', () => {
                view.setActiveScreen('loginScreen');
            });

            break;
        case "loginScreen":
            document.getElementById('main').innerHTML = component.loginScreen;

            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            });
            document.getElementById('forgotPassword').addEventListener('click', () => {
                view.setActiveScreen('forgotPassword');
            });

            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const dataLogin = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(dataLogin);
            })

            break;

            case "forgotPassword":
            document.getElementById('main').innerHTML = component.forgotPassword;
            document.getElementById('cancel').addEventListener('click', () => {
                view.setActiveScreen('loginScreen');
            });

            const forgotPasswordForm = document.getElementById('forgotPassword-form');
            forgotPasswordForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const dataForgotPassword = {
                    email: forgotPasswordForm.email.value,
                }
                controller.forgotPassword(dataForgotPassword);
            })

            break;
        //-------------------------------------------------------------------------------

        case "homeScreen":
            document.getElementById('main').innerHTML = component.homeScreen;
            document.getElementById('username').innerText = model.currentUser.displayName;
            Balance();
            BalanceDisplay();
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            break;

        //-------------------------------------------------------------------------

        case "savings":
            document.getElementById('main').innerHTML = component.savings;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirectToForm').addEventListener('click', () => {
                view.setActiveScreen('savingsForm');
            })
            FetchDataA()
            sumTotalSavings()
            break;

        case "savingsForm":
            document.getElementById('main').innerHTML = component.savingsForm;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirect-to-savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            });
            const savingsForm = document.getElementById('savings-form');
            savingsForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const dataSavings = {
                    name: savingsForm.name.value,
                    amount: savingsForm.amount.value,
                }
                controller.savingsForm(dataSavings);
            })

            break;

        //------------------------------------------------------------------------

        case "passiveIncome1":
            document.getElementById('main').innerHTML = component.passiveIncome1;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirectToPIForm1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncomeForm1');
            })
            FetchDataB1();
            sumPI1();
            PITotal();
            break;

        case "passiveIncomeForm1":
            document.getElementById('main').innerHTML = component.passiveIncomeForm1;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirect-to-PI1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            });
            document.getElementById('date').valueAsDate = new Date();
            const PIForm1 = document.getElementById('PIForm1');
            PIForm1.addEventListener('submit', (event) => {
                event.preventDefault();
                console.log("helo");
                const dataPI1 = {
                    name: PIForm1.name.value,
                    amount: PIForm1.amount.value,
                    rate: PIForm1.rate.value,
                    date: PIForm1.date.value
                }
                console.log("alo");
                controller.passiveIncomeForm1(dataPI1);
            })

            break;

        case "passiveIncome2":
            document.getElementById('main').innerHTML = component.passiveIncome2;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirectToPIForm2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncomeForm2');
            })
            FetchDataB2();
            sumPI2();
            PITotal();
            break;

        case "passiveIncomeForm2":
            document.getElementById('main').innerHTML = component.passiveIncomeForm2;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirect-to-PI2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            });
            document.getElementById('date').valueAsDate = new Date();
            const PIForm2 = document.getElementById('PIForm2');
            PIForm2.addEventListener('submit', (event) => {
                event.preventDefault();
                const dataPI2 = {
                    name: PIForm2.name.value,
                    amount: PIForm2.amount.value,
                    date: PIForm2.date.value
                }
                controller.passiveIncomeForm2(dataPI2);
            })

            break;

        //--------------------------------------------------------------------------------

        case "activeExchanges":
            document.getElementById('main').innerHTML = component.activeExchanges;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirectToAEForm').addEventListener('click', () => {
                view.setActiveScreen('AEForm');
            })
            document.getElementById('fetchall').addEventListener('click', FetchDataC )
            document.getElementById('fetchincome').addEventListener('click', FetchDataC1 )
            document.getElementById('fetchexpense').addEventListener('click', FetchDataC2 )
            FetchDataC()
            sumAE1()
            sumAE2()
            AETotal()

            break;

        case "AEForm":
            document.getElementById('main').innerHTML = component.AEForm;
            document.getElementById('username').innerText = model.currentUser.displayName;
            document.getElementById("sign-out").addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            })
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome1');
            })
            document.getElementById('passiveincome2').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome2');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirect-to-AE').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            });
            document.getElementById('date').valueAsDate = new Date();
            const AEForm = document.getElementById('AEForm');
            AEForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const dataAE = {
                    name: AEForm.name.value,
                    amount: AEForm.amount.value,
                    date: AEForm.date.value,
                    type: AEForm.type.value
                }
                controller.AEForm(dataAE);
            })
            break;
    }
}
