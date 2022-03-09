
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD_OhCuQTejOC3XrlzChYFrCzuUwxHq5kE",
      authDomain: "kwitter-1eb7d.firebaseapp.com",
      projectId: "kwitter-1eb7d",
      storageBucket: "kwitter-1eb7d.appspot.com",
      messagingSenderId: "867151647162",
      appId: "1:867151647162:web:6408dbfde251c66d398d83"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
