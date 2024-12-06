const logoutBtn = document.getElementById("logout-btn");
const logoutListBtn = document.getElementById("li-logout");
const logoutDividerLine = document.getElementById("divider-4");

function showLogoutOptions() {
    let pageWidth = window.innerWidth;

    logoutBtn.style.display = pageWidth > 720 ? "flex" : "none";
    logoutDividerLine.style.display = pageWidth > 720 ? "flex" : "none";
    logoutListBtn.style.display = "block";
}

function hideLogoutOptions() {
    logoutBtn.style.display = "none";
    logoutListBtn.style.display = "none";
    logoutDividerLine.style.display = "none";
}

if (!user) {
    hideLogoutOptions();
}

function logout() {
    localStorage.removeItem("user");
    user = null;
    hideLogoutOptions();
    showLoginOptions();
    showRegistrationOptions();
    window.location.href = "index.html";
}

logoutBtn.addEventListener("click", logout);
logoutListBtn.addEventListener("click", logout);
