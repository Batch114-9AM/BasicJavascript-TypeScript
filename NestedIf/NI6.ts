
let a : number = 57
let b : number = 81
let c : number = 63

if( a < c)  //if1
{
    console.log("Tiger runs faster than Human")   // --> if1
    if(b > c)  //if2
    {
        console.log("Lion Roars")   //   --> if2
        if(a > b)  //if3
        {
            console.log("Donkey has Four legs") //-->if3
        }
        else   //if3
        {
            console.log("Fish Swims")
        }
        console.log("Cat says Meow")  // -->  if2
    }    
    console.log("Dog Barks")  //  --> if1
}