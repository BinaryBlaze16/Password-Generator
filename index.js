const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");
document.getElementById("generate-btn").addEventListener("click", () => {
  passwordOne.textContent = generatePassword();
  passwordTwo.textContent = generatePassword();
});
function generatePassword() {
  let p = "";
  for (let i = 0; i < 15; i++) {
    p += characters[Math.floor(Math.random() * characters.length)];
  }
  return p;
}
function copyPassword(text) {
  if (!text) return;
  navigator.clipboard.writeText(text);
  alert("Password Copied!");
}
passwordOne.addEventListener("click", () =>
  copyPassword(passwordOne.textContent),
);
passwordTwo.addEventListener("click", () =>
  copyPassword(passwordTwo.textContent),
);
