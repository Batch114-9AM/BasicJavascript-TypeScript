function ageValidate()
{
    return new Promise((resolve, reject)=>
    {
        let age : number = 27;

        if(age < 18)
        {
            resolve("Person is a Teenager")
        }

        else
        {
            reject(new Error("Person is Adult"))
        }
    })
}

async function ageCheck() 
{
    const eli : any = await ageValidate();   //we are calling promised based function
    console.log(eli)
}

ageCheck();    //we are calling async function