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
                console.log(data);
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
        //-------------------------------------------------------------------------------

        case "homeScreen":
            document.getElementById('main').innerHTML = component.homeScreen;
            Balance();
            BalanceDisplay();
            const signOutButton = document.getElementById("sign-out");
            signOutButton.addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            }
            );
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })

            break;

        //-------------------------------------------------------------------------

        case "savings":
            document.getElementById('main').innerHTML = component.savings;
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
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
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
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

        case "passiveIncome":
            document.getElementById('main').innerHTML = component.passiveIncome;
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
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
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('redirect-to-PI1').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
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

        case "activeExchanges":
            document.getElementById('main').innerHTML = component.activeExchanges;
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            document.getElementById('c1').addEventListener('click', () => {
                view.setActiveScreen('c1');
            })
            document.getElementById('c2').addEventListener('click', () => {
                view.setActiveScreen('c2');
            })

            break;

        case "c1":
            document.getElementById('main').innerHTML = component.c1;
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            break;
        case "c2":
            document.getElementById('main').innerHTML = component.c2;
            document.getElementById("home").addEventListener('click', () => {
                view.setActiveScreen("homeScreen")
            })
            document.getElementById('savings').addEventListener('click', () => {
                view.setActiveScreen('savings');
            })
            document.getElementById('passiveincome').addEventListener('click', () => {
                view.setActiveScreen('passiveIncome');
            })
            document.getElementById('activeexchanges').addEventListener('click', () => {
                view.setActiveScreen('activeExchanges');
            })
            break;
    }
}
