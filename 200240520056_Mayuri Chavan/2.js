function validate() {
    var email = document.querySelector("#emailID").value;
    var user = document.querySelector("#uname").value;
    var password = document.querySelector("#pswrd").value;

    if (email.trim() == "") {
        alert("Blank email");
        return false;
    } else if (user.trim() == "") {
        alert("Blank username");
        return false;
    } else if (password.trim() == "") {
        alert("Blank password");
        return false;
    } else {
        return true;
        email = "";
        user = "";
        password = "";
    }

}

function details() {
    let emailbox = document.querySelector("#id1");

    let emailD = emailbox.cloneNode(true);

    const readEmail = document.querySelector("#emailID").value;

    emailD.children[1].innerHTML = readEmail;
    emailbox.appendChild(emailD);

    let userBox = document.querySelector("#id2");

    let userN = userBox.cloneNode(true);
    const readUsername = document.querySelector("#uname").value;
    userN.children[1].innerHTML = readUsername;
    userBox.appendChild(userN);
}