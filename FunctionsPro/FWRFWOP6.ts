
function adding() : number 
{
    let a : number = 73;
    let b : number = 94;
    let c : string = "Cup of Coffee";
   console.log("The Sum of A and B is : " +(a+b))
   return a-b ;
   //return b;  //Unreachable code detected
}

console.log("The Difference of A and B is " +adding());  //First --> we are calling the function, Second --> Function returns value