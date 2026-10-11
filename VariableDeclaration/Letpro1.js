
let mycar = 5612;   //declaring 5612 to mycar
console.log(mycar)   //5612
 
mycar = "I20"  //reassigning
console.log(mycar)    //I20

//let mycar = 1234   //redeclaring    //SyntaxError: Identifier 'mycar' has already been declared

{
    console.log(mycar)  //accesing outside data into the block  //I20
    let queen = 'Rani'
    console.log(queen)  //Rani
}

console.log(queen)  //accessing inside block data into outside of the block //ReferenceError: queen is not defined



