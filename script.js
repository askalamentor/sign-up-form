const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

let inputPwd = "";
let inputConfirm = "";

password.addEventListener("input", () => {
    inputPwd = password.value;
})

confirmPassword.addEventListener("input", () => {

    inputConfirm = confirmPassword.value;

    let result = inputConfirm.localeCompare(inputPwd);

    if (result === 0) {     
        confirmPassword.style.border = "2px solid green";
        confirmPassword.setAttribute("title", "Password match.");
    } else {
        confirmPassword.style.border = "2px solid red";
        confirmPassword.setAttribute("title", "Password doesn't match.");
    }

})
