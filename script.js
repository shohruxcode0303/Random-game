document.getElementById("button").addEventListener("click", function (event) {
    event.stopPropagation();
    
    // Tugma bosilganda xabar o‘chmasligi uchun

    let input = document.getElementById("click");
    let userNumber = parseInt(input.value);
    let randomNumber = Math.ceil(Math.random() * 10);
    let messageBox = document.getElementById("messageBox");

    console.log("Correct number was:", randomNumber);

    if (!isNaN(userNumber) && userNumber === randomNumber) {
        messageBox.textContent = "WIN ✔️";
    } else {
        messageBox.textContent = "TRY ❌\nThe correct number was: " + randomNumber + "";
    }
    
    messageBox.style.display = "block";

    // Xabarni 7 soniyadan keyin o‘chirish

    setTimeout(() => {
        messageBox.style.display = "none";
    }, 7000);
});

document.getElementById("messageBox").addEventListener("click", function () {
    this.style.display = "none";
});













































// var input = document.getElementById("click"),
//     button = document.getElementById("button"),
//     result;
// button.onclick = function () {
//     'use strict';
//     result = Math.ceil(Math.random() * 10);
//     if (result === parseInt(input.value, false)) {
//         window.alert("WIN ✔️");
//     } else {
//         alert("TRY ❌");
//     }
// };