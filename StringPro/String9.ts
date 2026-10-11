

let myinfo : string  = "My Car Name is : I20 , my car Engine no : 32%@783@42";

let mySpecial : string = myinfo.replace(/[A-Za-z0-9]/g, "");

let removeSpecial : string = myinfo.replace(/[^A-Za-z0-9]/g, "");

console.log(mySpecial)
console.log(removeSpecial)
