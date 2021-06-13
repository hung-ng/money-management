const init = () => {
    console.log("window loaded");

    
    var firebaseConfig = {
        apiKey: "AIzaSyCQbt2I7ex51RPl-I1Hy_111Zn14K-K0Bo",
        authDomain: "money-management-e055d.firebaseapp.com",
        projectId: "money-management-e055d",
        storageBucket: "money-management-e055d.appspot.com",
        messagingSenderId: "558336149066",
        appId: "1:558336149066:web:0feb24937c75699362c8b3",
        measurementId: "G-JWM1Y8K096"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    console.log(firebase.app().name);
      
};
window.onload=init;

click= async ()=>{
    console.log("clicked")
    const data = {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA'
      };
      
      // Add a new document in collection "cities" with ID 'LA'
      const res = await db.collection('users').doc('LA').set(data);
      
}