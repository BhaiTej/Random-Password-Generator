const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
// other way
// function copyPassword() {
//     const passwordBox = document.getElementById("password");
    
//     // Select the password text inside the input
//     passwordBox.select();
//     passwordBox.setSelectionRange(0, 99999);  // For mobile compatibility
    
//     // Copy the selected text to clipboard
//     navigator.clipboard.writeText(passwordBox.value)
//         .then(() => {
//             alert("Password copied to clipboard!"); // Optional: Show a confirmation message
//         })
//         .catch(err => {
//             console.error("Failed to copy password: ", err);
//         });
// }
