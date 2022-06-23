import { decrypt, encrypt } from "./Vingenere";

export const toJson=(data,delimitator,key)=>{

    let jsonArr = [];


   


    data.forEach(element => {
        let arr = element.split(delimitator);
        let creditCardnumber = arr[3];
        console.log("Tarjeta que entra: ")
        console.log(creditCardnumber);
        console.log("");
        let creditcardString = "";

        for (var i = 0; i < creditCardnumber.length; i++) {
            let a = intToChar(Number(creditCardnumber.charAt(i)))
            creditcardString+=(a);
        }

        console.log("Tarjeta de numeros a letras: ")
        console.log(creditcardString);
        console.log("");

        let encrypted = encrypt(creditcardString,key)

        console.log("Tarjeta encryptada: ")
        console.log(encrypted);
        console.log("");

        let desencrypted = decrypt(encrypted,key);

        console.log("Tarjeta desencryptada: ")
        console.log(desencrypted);
        console.log("");

        let creditcardNumber2 = "";

        for (var i = 0; i < desencrypted.length; i++) {
            let b = charToInt(desencrypted.charAt(i))
            creditcardNumber2+=(b);
        }

        console.log("Tarjeta de nuevo de letras a numeros")
        console.log(creditcardNumber2);
        console.log("");


        let json = {
            "documento":arr[0],
            "primer-nombre":arr[1],
            "apellido":arr[2],
            "credit-card":encrypted,
            "tipo":arr[4],
            "telefono":arr[5],
        }
        jsonArr.push(json)

        console.log("-----------------")
    });

    return jsonArr;

}

function intToChar(int) {
    const code = 'a'.charCodeAt(0);
    return String.fromCharCode(code + int);
}
  

function charToInt(char) {
    const code = 'a'.charCodeAt(0);
    return char.charCodeAt(0) - code;
}
  