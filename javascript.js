const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('verstopt');
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('verstopt');
}