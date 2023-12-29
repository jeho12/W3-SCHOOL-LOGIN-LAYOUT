const showPasswordButton = document.querySelector(".show-password");
const passwordInput = document.querySelector("#password");

showPasswordButton.addEventListener("click"), () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Hide";
    }
}