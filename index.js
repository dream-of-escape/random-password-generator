const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPasswordEl = document.getElementById("firstPassword")
let secondPasswordEl = document.getElementById("secondPassword")

// create a random password generator. it should create 2 passwords 15 characters long

function newPasswords() {
    firstPasswordEl.textContent = generatePassword()
    secondPasswordEl.textContent = generatePassword()
}

function generatePassword() {
    let password = ""
    for(let i = 0; i <= 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password    
}

window.increment = increment
window.save = save
window.reset = reset