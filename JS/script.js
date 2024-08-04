var input = document.getElementById("click"),
    button = document.getElementById("button"),
    result;
button.onclick = function () {
    'use strict';
    result = Math.ceil(Math.random() * 10);
    if (result === parseInt(input.value, false)) {
        window.alert("WIN");
    } else {
        window.alert("T R Y  A G A I N 🔁");
    }
};
