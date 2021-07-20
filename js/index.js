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

  firebase.auth().onAuthStateChanged(function (user) {
    if (user && user.emailVerified === true) {
      model.currentUser = {
        email: user.email,
        displayName: user.displayName
      }
      view.setActiveScreen("homeScreen");

    } else {

      view.setActiveScreen("loginScreen")
    }
  });

  // document.getElementById('date').valueAsDate = new Date();
  // FetchDataA()
  // const testForm = document.getElementById('test-form');
  // })
}

window.onload = init;


    //hiện tại thì biến result đang là biên mình cần sử dụng. Để lưu nó có 2 cách.
/**
 * C1: lưu nó thông qua việc luân chuyển các hàm. VD: em muốn dùng cái 115 này để + thêm 1
 * ta làm như sau
 */
    // cong(result, 1);
    // console.log(cong(result, 1));
    // return result;

    //C2: ta lưu nó ra localStorage (không khuyến khích), 
    // or lưu ra 1 file rồi sử dụng tiếp từ file đó
    // or lưu thẳng trên database sẽ là an toàn nhất. Nếu như sợ viết dài em có thể gán biến cách viết
    // VD: const UserHung_PassiveIncome = firebase.firestore().collection("Users").doc("Hung").collection("PassiveIncome")
    // => toàn bộ các phần kia đã được viết tắt lại => khá là gọn hơn nhiều




