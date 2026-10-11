interface empinfo      //empinfo ---> rough data
{
    empid : number,
    empname : string,
    empsalary : number,
    empdesignation : string,
    isActive : boolean,
    empaddress :     //subobject
            {
                empstreet : string,
                emparea : string,
                empcity : string,
                empstate : string,
                emppin : number
            }
}

let empdata : empinfo =      //pure concrete object data
{
    empid : 1234,
    empname : "Radha",
    empsalary : 1300000,
    empdesignation : "QA Manager",
    isActive : true,
    empaddress : 
            {
                empstreet : "Road No : 1",
                emparea : "Medical Colony",
                empcity : "Khammam",
                empstate : "Telangana",
                emppin : 505112
            }
}

console.log(empdata.empdesignation) //fetching the empdesignation