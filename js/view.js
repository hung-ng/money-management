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
                controller.register(data);  // để kiểm tra lỗi ở đây
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

        case "homeScreen":
            document.getElementById('main').innerHTML = component.homeScreen;
            const signOutButton = document.getElementById("sign-out");
            signOutButton.addEventListener('click', () => {
                firebase.auth().signOut();
                view.setActiveScreen("loginScreen");
            }
            );
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('giaodich').addEventListener('click', () => {
                view.setActiveScreen('giaodich');
            })
            break;

        case "quy":
            document.getElementById('main').innerHTML = component.quy;
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('redirectInfo').addEventListener('click', () => {
                view.setActiveScreen('b1');
           
            })
            break;
        case "thunhap":
            document.getElementById('main').innerHTML = component.thunhap;
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('giaodich').addEventListener('click', () => {
                view.setActiveScreen('giaodich');
            })
            document.getElementById('redirectInfo').addEventListener('click', () => {
                view.setActiveScreen('b1');})
            break;
        case "giaodich":
            document.getElementById('main').innerHTML = component.giaodich;
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('giaodich').addEventListener('click', () => {
                view.setActiveScreen('giaodich');
            })
            document.getElementById('c1').addEventListener('click', () => {
                view.setActiveScreen('c1');
            })
            document.getElementById('c2').addEventListener('click', () => {
                view.setActiveScreen('c2');
            })

            break;
        case "b1":
            document.getElementById('main').innerHTML = component.b1;
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('giaodich').addEventListener('click', () => {
                view.setActiveScreen('giaodich');
            })
            break;
        case "b2":
            document.getElementById('main').innerHTML = component.b2;
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('giaodich').addEventListener('click', () => {
                view.setActiveScreen('giaodich');
            })
            break;
        case "c1":
            document.getElementById('main').innerHTML = component.c1;
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('giaodich').addEventListener('click', () => {
                view.setActiveScreen('giaodich');
            })
            break;
        case "c2":
            document.getElementById('main').innerHTML = component.c2;
            document.getElementById('quy').addEventListener('click', () => {
                view.setActiveScreen('quy');
            })
            document.getElementById('thunhap').addEventListener('click', () => {
                view.setActiveScreen('thunhap');
            })
            document.getElementById('giaodich').addEventListener('click', () => {
                view.setActiveScreen('giaodich');
            })
            break;
    }
}
