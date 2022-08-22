const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let passwordElOne = document.getElementById("passwordOne")
let passwordElTwo = document.getElementById("passwordTwo")
let copyEl = document.getElementById("passwordCopy")



const slider = document.querySelector("#slider");
const sliderNum =  document.querySelector("#sliderNumber");
sliderNum.innerHTML = slider.value;
let passLength = slider.value;


slider.oninput = function() {
    sliderNum.innerHTML = slider.value;
    passLength = slider.value;
}


    
    function generatePassword() {
        passwordElOne.textContent = 0
        passwordElTwo.textContent = 0
            for(let i=0; i < passLength - 1; i++){ 
                let randomPasswordOne = Math.floor( Math.random() * characters.length )
                let randomPasswordTwo = Math.floor( Math.random() * characters.length )
                    passwordElOne.textContent += characters [randomPasswordOne]
                    passwordElTwo.textContent += characters [randomPasswordTwo]
            }
    }

