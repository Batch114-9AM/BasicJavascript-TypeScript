
let a : number = 57
let b : number = 81
let c : number = 63

if( a < c)  //if1
{
    console.log("Tiger runs faster than Human")   //1  --> if1
    if(b > c)  //if2
    {
        console.log("Lion Roars")   //2   --> if2
        if(a > b)  //if3
        {
            console.log("Donkey has Four legs") //-->if3
        }
        console.log("Cat says Meow")  //3  -->  if2
    }
    console.log("Dog Barks")  //4  --> if1
}