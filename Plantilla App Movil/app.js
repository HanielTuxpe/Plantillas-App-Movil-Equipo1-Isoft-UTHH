document.addEventListener("DOMContentLoaded", function () {
    var editBtn = document.getElementById("edit-info-btn");
    var personalInfo = document.getElementById("personal-info");
    var editInfoSection = document.getElementById("edit-info");

    editBtn.addEventListener("click", function () {
        personalInfo.style.display = "none";
        editInfoSection.style.display = "block";
    });
    var cancelBtn = document.getElementById("cancel-edit-btn");
    cancelBtn.addEventListener("click", function () {
        personalInfo.style.display = "block";
        editInfoSection.style.display = "none";
    });
});
