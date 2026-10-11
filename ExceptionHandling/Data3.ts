let a : number = 41;
let b : number = 82;

try
{
let C : string[] = new Array(-5);
console.log("The Number of elements stored in Array C is : " +C.length)
}
catch(myerrmsg)
{
   console.log("Array length should be POSITIVE INTEGERS") 
}


console.log("The Sum of A and B is : " +(a+b))
