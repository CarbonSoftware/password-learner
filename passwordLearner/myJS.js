//global variables
var firstLogDiv = document.getElementById("userForm");
var mainC = document.getElementById("linkB");
var userPassword = document.getElementById("userPassword");
var loginBtn = document.getElementById("myButton");
var registerBtn = document.getElementById("myRegister");
var loginAttempts = 0;

//Event Listners
loginBtn.addEventListener("click", login, false);
registerBtn.addEventListener("click", register, false);

localStorage.setItem("password", "dipon");

//login function
function login() {

    var password = userPassword.value;

    if(loginAttempts < 3) {

        if(password === localStorage.password) {

            console.log("correct password!");
            mainC.style.display = "block";

        } else {
            loginAttempts++;
            document.getElementById("attempts").innerHTML = "Attempts remaining " + (3 - loginAttempts);
            console.log("amount of attemps remaining " + (3 - loginAttempts));
        }

//        if the number of attempts are exceeded then do something
    } else {
        document.getElementById("mainC").style.display = "none";
        document.getElementById("blocked").style.display = "block";
    }
}

function register() {
    firstLogDiv.style.display = "block";
    var username = document.getElementById("userName");
    var password = document.getElementById("passWord");
    var submitBtn = document.getElementById("mySubmit");
    var cancelBtn = document.getElementById("myCancel");


    submitBtn.addEventListener("click", function() {
        console.log("submit");
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    }, false);

}

//hide register page
firstLogDiv.style.display = "none";
mainC.style.display = "none";

