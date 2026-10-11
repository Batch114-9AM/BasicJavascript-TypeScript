function ageValidate()
{
    return new Promise((resolve, reject)=>
    {
        let age : number = 15;

        if(age < 18)
        {
            resolve("Person is a Teenager")
        }

        else
        {
            reject("Person is Adult")
        }
    })
}

async function ageCheck() 
{
    const eli : any = await ageValidate();   //we are calling promised based function
    console.log(eli)
}

ageCheck();    //we are calling async function



//DOB  ---> Datenumber+MonthNumber+YearNumber --> 23111999

let DOB = 23111999   //number
console.log(DOB)

DOB = "18Dec2001"   //string
console.log(DOB)