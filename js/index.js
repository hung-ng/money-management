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

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("user", user);
      model.currentUser = {
        email: user.email,
        displayName: user.displayName
      }
      view.setActiveScreen("homeScreen");

    } else {

      view.setActiveScreen("loginScreen")
    }
  });
}

window.onload = init;






