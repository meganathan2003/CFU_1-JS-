/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

// create a uppercase password 
document.getElementById("btn").onclick = function () {
    let chars = "ABCDHOIWJEJDKNFHJKSDHFULFHDJKFHSDKJFHIUEHJKFNDFUIERUEWKJTADNFMESJKFGBEWJ";
    let passwordleng = 20;
    let password = "";
    for (let i = 0; i < passwordleng.length; i++) {
        let randomchar = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomchar, randomchar + 1);
        console.log(password);
    };
    //    document.getElementById("uppercase").value = password;

};

// Generate a random password of length 20

// function generatePassword(length) {
//     let password = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
  
//     for (let i = 0; i < length; i++) {
//       password += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
  
//     return password;

//   }
  
//   console.log(generatePassword(8));
  