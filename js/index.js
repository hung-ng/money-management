const init = () => {

  var firebaseConfig = {
    apiKey: "AIzaSyCQbt2I7ex51RPl-I1Hy_111Zn14K-K0Bo",
    authDomain: "money-management-e055d.firebaseapp.com",
    projectId: "money-management-e055d",
    storageBucket: "money-management-e055d.appspot.com",
    messagingSenderId: "558336149066",
    appId: "1:558336149066:web:0feb24937c75699362c8b3",
    measurementId: "G-JWM1Y8K096"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  console.log(firebase.app().name);

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user && user.emailVerified === true) {
  //     console.log("user", user);
  //     model.currentUser = {
  //       email: user.email,
  //       displayName: user.displayName
  //     }
  //     view.setActiveScreen("homeScreen");

  //   } else {

  //     view.setActiveScreen("loginScreen")
  //   }
  // });

  document.getElementById('date').valueAsDate = new Date();
  FetchDataA()
  sumPassiveIncome(); // kq phải la y hẹt 115 chu nhi
  console.log(sumPassiveIncome(), "this is function sumPassive");


  const testForm = document.getElementById('test-form');
  testForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: testForm.name.value.trim(),
      amount: testForm.amount.value.trim(),
      date: testForm.date.value.trim(),
    }
    console.log(data);
    A(data);  // để kiểm tra lỗi ở đây
  })

  // console.log(sumPassiveIncome())
}

window.onload = init;






