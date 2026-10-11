
let a : number = 57
let b : number = 81
let c : number = 63

if( a > c)
{
    console.log("A is Less Than C")
    if(b > c)
    {
        console.log("C is Less Than B")
        if(a < b)
        {
            console.log("B is More Than A")
        }
    }
}