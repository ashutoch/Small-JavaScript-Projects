const input = document.getElementById("input");

function revString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const reversed = revString(value);

    if (value === reversed) {
        alert("The string is a palindrome.");
    } else {
        alert("Not Today!");
    }
    
    input.value = "";
}