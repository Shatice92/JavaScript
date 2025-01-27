
function validatePassword(password) {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[@#$%^&*(),.?":{}|<>]/;
    const spaceRegex = /\s/;

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!uppercaseRegex.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!lowercaseRegex.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!digitRegex.test(password)) {
        return "Password must contain at least one digit.";
    }
    if (!specialCharRegex.test(password)) {
        return "Password must contain at least one special character.";
    }
    if (spaceRegex.test(password)) {
        return "Password must not contain spaces.";
    }
    return "Password is valid!";
}


document.getElementById("validateBtn").addEventListener("click", () => {
    const password = document.getElementById("password").value;
    const message = validatePassword(password);

    const messageDiv = document.getElementById("message");
    if (message === "Password is valid!") {
        messageDiv.textContent = message;
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = message;
        messageDiv.className = "message";
    }
});
