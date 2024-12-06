const loginBtn = document.getElementById("login-btn");
const loginListBtn = document.getElementById("li-login");
const loginDividerLine = document.getElementById("divider-1");
const modal = document.getElementById("loginModal");

let user = JSON.parse(localStorage.getItem("user"));

function showLoginOptions() {
    let pageWidth = window.innerWidth;

    loginBtn.style.display = pageWidth > 720 ? "flex" : "none";
    loginDividerLine.style.display = pageWidth > 720 ? "flex" : "none";
    loginListBtn.style.display = "block";
}

function hideLoginOptions() {
    loginBtn.style.display = "none";
    loginListBtn.style.display = "none";
    loginDividerLine.style.display = "none";
}

if (user) {
    hideLoginOptions();
}

loginBtn.addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "block";
});
loginListBtn.addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "block";
});

function closeLoginModal() {
    modal.style.display = "none";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
}

// Form validation
document.getElementById("loginForm").addEventListener("input", () => {
    let emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let passwordPattern = /^.{8,20}$/;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const submitButton = document.getElementById("submitButton");

    let isValid = false;

    if (email) {
        if (!emailPattern.test(email)) {
            emailError.textContent = "Email is invalid";
            isValid = false;
        } else {
            emailError.textContent = "";
            isValid = true;
        }
    } else {
        isValid = false;
    }

    if (password) {
        if (!passwordPattern.test(password)) {
            passwordError.textContent = "Min length: 8. Max: 20";
            isValid = false;
        } else {
            passwordError.textContent = "";
            isValid = true;
        }
    } else {
        isValid = false;
    }

    submitButton.disabled = !isValid;
});

document.getElementById("submitButton").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");

    let users = JSON.parse(localStorage.getItem("userList")) ?? [];

    let user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        closeLoginModal();
        alert("Login successful!");

        hideRegistrationOptions();
        hideLoginOptions();
        showProfileOptions();
        showLogoutOptions();
    } else {
        emailError.textContent = "User not found";
    }
});
