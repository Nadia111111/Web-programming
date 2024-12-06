const registrationBtn = document.getElementById("register-btn");
const registerListBtn = document.getElementById("li-register");
const registrationDividerLine = document.getElementById("divider-2");
const registerModal = document.getElementById("registrationModal");

function showRegistrationOptions() {
    let pageWidth = window.innerWidth;

    registrationBtn.style.display = pageWidth > 720 ? "flex" : "none";
    registrationDividerLine.style.display = pageWidth > 720 ? "flex" : "none";
    registerListBtn.style.display = "block";
}

function hideRegistrationOptions() {
    registrationBtn.style.display = "none";
    registerListBtn.style.display = "none";
    registrationDividerLine.style.display = "none";
}

if (user) {
    hideRegistrationOptions();
}

registrationBtn.addEventListener("click", () => {
    registerModal.style.display = "block";
});
registerListBtn.addEventListener("click", () => {
    registerModal.style.display = "block";
});

function clearForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastName").value = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("patronymic").value = "";
    document.getElementById("patronymicError").textContent = "";
    document.getElementById("phone").value = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("birthDate").value = "";
    document.getElementById("birthDateError").textContent = "";
    document.getElementById("registration-email").value = "";
    document.getElementById("registration-emailError").textContent = "";
    document.getElementById("registration-password").value = "";
    document.getElementById("registration-passwordError").textContent = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("confirmPasswordError").value = "";
    document.getElementById("role-customer").checked = false;
    document.getElementById("role-seller").checked = false;
    document.getElementById("roleError").textContent = "";
    document.getElementById("terms").checked = false;
}

function closeRegistrationModal() {
    registerModal.style.display = "none";
    clearForm();
}

function calculateAge(date) {
    var ageDifMs = Date.now() - date;
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.getElementById("registrationForm").addEventListener("input", () => {
    let namePattern = /^[a-zA-Zа-яА-Я]{3,30}$/;
    let phoneNumberPattern = /^[+]{1}375\d{9}$/;
    let emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let passwordPattern = /^.{8,20}$/;

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let patronymic = document.getElementById("patronymic").value;
    let phone = document.getElementById("phone").value;
    let birthDate = document.getElementById("birthDate").value;
    let registrationEmail = document.getElementById("registration-email").value;
    let registrationPassword = document.getElementById("registration-password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    let isCustomer = document.getElementById("role-customer").checked;
    let isSeller = document.getElementById("role-seller").checked;

    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let patronymicError = document.getElementById("patronymicError");
    let phoneError = document.getElementById("phoneError");
    let birthDateError = document.getElementById("birthDateError");
    let registrationEmailError = document.getElementById("registration-emailError");
    let registrationPasswordError = document.getElementById("registration-passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let roleError = document.getElementById("roleError");

    let submitButton = document.getElementById("registration-submitButton");

    let isValid = true;

    if (firstName) {
        if (!namePattern.test(firstName)) {
            firstNameError.textContent = "Shold have from 3 to 30 letters";
            isValid = false;
        } else {
            firstNameError.textContent = "";
        }
    } else {
        firstNameError.textContent = "";
        isValid = false;
    }

    if (lastName) {
        if (!namePattern.test(lastName)) {
            lastNameError.textContent = "Shold have from 3 to 30 letters";
            isValid = false;
        } else {
            lastNameError.textContent = "";
        }
    } else {
        lastNameError.textContent = "";
        isValid = false;
    }

    if (patronymic) {
        if (!namePattern.test(patronymic)) {
            patronymicError.textContent = "Shold have from 3 to 30 letters";
            isValid = false;
        } else {
            patronymicError.textContent = "";
        }
    } else {
        patronymicError.textContent = "";
    }

    if (registrationEmail) {
        if (!emailPattern.test(registrationEmail)) {
            registrationEmailError.textContent = "Email is invalid";
            isValid = false;
        } else {
            registrationEmailError.textContent = "";
        }
    } else {
        registrationEmailError.textContent = "";
        isValid = false;
    }

    if (phone) {
        if (!phoneNumberPattern.test(phone)) {
            phoneError.textContent = "Shold be +375 followed by 9 digits";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }
    } else {
        phoneError.textContent = "";
        isValid = false;
    }

    if (birthDate) {
        let years = calculateAge(new Date(birthDate));

        if (years < 16) {
            birthDateError.textContent = "Shold be at least 16 y.o.";
            isValid = false;
        } else {
            birthDateError.textContent = "";
        }
    } else {
        birthDateError.textContent = "";
        isValid = false;
    }

    if (registrationPassword) {
        if (!passwordPattern.test(registrationPassword)) {
            registrationPasswordError.textContent = "Min length: 8. Max: 20";
            isValid = false;
        } else {
            registrationPasswordError.textContent = "";
        }
    } else {
        registrationPasswordError.textContent = "";
        isValid = false;
    }

    if (confirmPassword) {
        if (confirmPassword !== registrationPassword) {
            confirmPasswordError.textContent = "Passwords don't match";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }
    } else {
        confirmPasswordError.textContent = "";
        isValid = false;
    }

    if (!isSeller && !isCustomer) {
        roleError = "Choose the role";
        isValid = false;
    }

    if (!terms) {
        isValid = false;
    }

    submitButton.disabled = !isValid;
});

function isCredentialsUnique(users, phone, email) {
    if (users.some((user) => user.email === email)) {
        document.getElementById("registration-emailError").textContent = "Email is taken";

        return false;
    }

    if (users.some((user) => user.phone === phone)) {
        document.getElementById("phoneError").textContent = "Phone number is taken";

        return false;
    }

    return true;
}

document.getElementById("registration-submitButton").addEventListener("click", (e) => {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let patronymic = document.getElementById("patronymic").value;
    let phone = document.getElementById("phone").value;
    let birthDate = document.getElementById("birthDate").value;
    let registrationEmail = document.getElementById("registration-email").value;
    let registrationPassword = document.getElementById("registration-password").value;
    let role = document.getElementById("role-customer").checked ? document.getElementById("role-customer").value : document.getElementById("role-seller").value;

    let users = JSON.parse(localStorage.getItem("userList")) ?? [];

    if (!isCredentialsUnique(users, phone, registrationEmail)) {
        return;
    }

    let newUser = {
        firstName,
        lastName,
        patronymic,
        phone,
        birthDate,
        email: registrationEmail,
        password: registrationPassword,
        role: role,
    };

    users.push(newUser);

    localStorage.setItem("userList", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));

    closeRegistrationModal();
    alert("Registration successful!");

    hideRegistrationOptions();
    hideLoginOptions();
    showProfileOptions();
    showLogoutOptions();
});
