const profileBtn = document.getElementById("profile-btn");
const profileListBtn = document.getElementById("li-profile");
const profileDividerLine = document.getElementById("divider-3");

//let user = JSON.parse(localStorage.getItem("user"));

function showProfileOptions() {
    let pageWidth = window.innerWidth;

    profileBtn.style.display = pageWidth > 720 ? "flex" : "none";
    profileDividerLine.style.display = pageWidth > 720 ? "flex" : "none";
    profileListBtn.style.display = "block";
}

function hideProfileOptions() {
    profileBtn.style.display = "none";
    profileListBtn.style.display = "none";
    profileDividerLine.style.display = "none";
}

function navigateToProfilePage() {
    window.location.href = "profile.html";
}

profileBtn.addEventListener("click", () => {
    navigateToProfilePage();
});
profileListBtn.addEventListener("click", () => {
    navigateToProfilePage();
});

if (user) {
    showProfileOptions();
} else {
    hideProfileOptions();
}
