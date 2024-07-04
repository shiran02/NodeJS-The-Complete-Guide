const name = "Shiran Kumarasingha";
var age = 29;
const hasHobbits = true;


function summerizeUser(userName , userAge , userHasHobby){
    return('Name is '+ userName + ', Age Is '+ userAge + ' And Habbit Has User '+userHasHobby);
}


const summerizeUser2 = function(userName , userAge , userHasHobby){
    return('Name is '+ userName + ', Age Is '+ userAge + ' And Habbit Has User '+userHasHobby);
} 

const summerizeUser3 =  (userName , userAge , userHasHobby)=>{
    return('Name is '+ userName + ', Age Is '+ userAge + ' And Habbit Has User '+userHasHobby);
}

const add = (a,b)=>{
    return a+b;
}

const mul = (a,b)=> a*b;



console.log(summerizeUser3(name,age,hasHobbits));
console.log(add(2,1));
console.log(mul(2,1));