
let a : number = 51;
let b : number = 62;

function addingcount()
{
    let t : number = 0 ;
    for(let d : number = 1 ; d <= 12124365685 ; d++)
    {
        t += d;
    }
    console.log("The Sum of all numbers : "+t)
}

setTimeout((): void =>{    //making the function to call later part
addingcount();
})

console.log("The Sum of A and B is : " +(a+b))
