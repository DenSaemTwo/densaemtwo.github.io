window.alert = function(message) {
    const modal = document.getElementById("customAlertModal");
    const msgElem = document.getElementById("customAlertMessage");
    if (modal && msgElem) {
        msgElem.textContent = message;
        modal.style.display = "flex";
    } else {
        console.warn("Предупреждение:", message);
    }
};

function closeCustomAlert() {
    const modal = document.getElementById("customAlertModal");
    if (modal) modal.style.display = "none";
}
