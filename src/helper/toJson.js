import { decrypt, encrypt } from "./Vingenere";

export const toJson=(data,delimitator,key)=>{

    let clients = [];


    data.forEach(element => {
        let arr = element.split(delimitator);
        let creditCardnumber = arr[3];
  
        let creditcardString = "";

        for (var i = 0; i < creditCardnumber.length; i++) {
            let a = intToChar(Number(creditCardnumber.charAt(i)))
            creditcardString+=(a);
        }

        let encrypted = encrypt(creditcardString,key)

        let desencrypted = decrypt(encrypted,key);
        let creditcardNumber2 = "";
        for (var j = 0; j < desencrypted.length; j++) {
            let b = charToInt(desencrypted.charAt(j))
            creditcardNumber2+=(b);
        }


        clients.push(new Clientes(arr[0], arr[1],arr[2],encrypted,arr[4],arr[5],));

    });
    return clients;

}

export const jsonToText=(json,key,delimitador)=>{
    let text ="";
    json.forEach(element => {
        let creditCardText = decrypt(element.creditCard,key);
        let creditcardNumber2 = "";
        for (var k = 0; k < creditCardText.length; k++) {
            let c = charToInt(creditCardText.charAt(k))
            creditcardNumber2+=(c);
        }
        // console.log(creditcardNumber2);
        let client = `${element.document}${delimitador}${element.firstName}${delimitador}${element.lastName}${delimitador}${creditcardNumber2}${delimitador}${element.type}${delimitador}${element.telefono} `;
        text += client;
        // console.log(text)
    });

    return text.replace(/['"]+/g, '').slice(0, -1);
}

export const xmlToText=(xml,key,delimitador)=>{
    let objArr = xml.children[0].children
    let text ="";
    // console.log(key)
    objArr.forEach(element =>{
        let client ="";

        let dasd = element.children

        
        for(let i = 0;i<dasd.length;i++){
            if(i==3){
                let test = String(dasd[i].value)

                let creditCardText = decrypt(test,key);

                let creditcardNumber2 = "";
                for (var k = 0; k < creditCardText.length; k++) {
                    let c = charToInt(creditCardText.charAt(k))
                    creditcardNumber2+=(c);
                }

                let obj = `${creditcardNumber2}${delimitador}`;
                client += obj;
            }else{
                let obj = `${dasd[i].value}${delimitador}`;
                client += obj;
            }
        }


        // element.children.forEach(element2 =>{



        //     let obj = `${element2.value}${delimitador}`;
        //     client += obj;


        // })
        text += `${client.slice(0,-1)}  `.slice(0,-1);
    })

    return text.replace(/['"]+/g, '').slice(0, -1);
}

function intToChar(int) {
    const code = 'a'.charCodeAt(0);
    return String.fromCharCode(code + int);
}
  

function charToInt(char) {
    const code = 'a'.charCodeAt(0);
    return char.charCodeAt(0) - code;
}

function Clientes(document, firstName, lastName, creditCard ,type,telefone) {
    this.document = document;
    this.firstName = firstName;
    this.lastName = lastName;
    this.creditCard = creditCard;
    this.type = type;
    this.telefono = telefone;
}


  