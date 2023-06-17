function userNameLogin() {
    let userNameInput = document.getElementById("userName").value;
    let passwordInput = document.getElementById("password").value;
if (userNameInput === "yussuf" && passwordInput === "aboobaker") {
        alert("You are successfully logged in");
} else {
    alert("username or password incorrect")
}};
