
const mycar = "Alto"  //declaring Alto to mycar
console.log(mycar)  //Alto

//mycar = "Kia"   //reassigining   //TypeError: Assignment to constant variable.

//const mycar = "Kia"  //redeclaring //SyntaxError: Identifier 'mycar' has already been declared

{
    console.log(mycar) //accessing outside data into inside of a block  //Alto
    const age = 32;
    console.log(age)  //inside into inside 32
}

console.log(age)  //inside of a block accessing outside of a blovk //ReferenceError: age is not defined
