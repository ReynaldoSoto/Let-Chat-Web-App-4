// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDknM0SCXWj1dphbC4cg8_Ipz8JDrfNWwI",
  authDomain: "let-chat-web-app-d7e66.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-d7e66-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-d7e66",
  storageBucket: "let-chat-web-app-d7e66.appspot.com",
  messagingSenderId: "78990185160",
  appId: "1:78990185160:web:86623d03abc56f782d4bfd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");
    roomname = localStorage.getItem("roomname");

    function send(){
        msg = document.getElementById("msg").value; 
        firebase.database().ref(roomname).push({
              name:username,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
    }



