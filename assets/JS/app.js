/*get the number of characters*/
let charLength;
function characterlen() {
    charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', characterlen);

// create a uppercase password length 20
// document.getElementById("btn").onclick = function () {
//     let chars = "ABCDHOIWJEJDKNFHJKSDHFULFHDJKFHSDKJFHIUEHJKFNDFUIERUEWKJTADNFMESJKFGBEWJ";
//     let passwordleng = 20;
//     let password = "";
//     for (let i = 0; i < passwordleng.length; i++) {
//         let randomchar = Math.floor(Math.random() * chars.length);
//         password += chars.substring(randomchar, randomchar + 1);
//         console.log(password);
//     };
//     //    document.getElementById("uppercase").value = password;

// };

const clicktbtn = document.getElementById("btn");

clicktbtn.addEventListener("click", e => {





    let ok=  document.getElementById("password__result")
    // let result = document.getElementById("password__result");
    const upperCasebtn = document.getElementById("uppercase").checked;
    const lowerCasebtn = document.getElementById("lowercase").checked;
    const numbersCasebtn = document.getElementById("numbers").checked;
    const symbolCasebtn = document.getElementById("symbols").checked;

console.log(upperCasebtn);
    let passwordLength = charLength;

    let password = "";

    if (upperCasebtn == true) {
        password+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    }
    if (lowerCasebtn == true) {
        password+="abcdefghijklmnopqrstuvwxyz";

    }
    if (numbersCasebtn == true) {
        password+="1234567890";

    }
    if (symbolCasebtn == true) {
        password+="!@#$%^&*()";

    }

    let output = "";


    for (let i = 0; i < passwordLength; i++) {
        const pass_generator = Math.floor(Math.random() * password.length);
        output += password[pass_generator];
      ok.value = output;
    }



    console.log(output);
});