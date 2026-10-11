

let myinfo : string  = "My Car Name is : I20 , my car Engine no : 32%@783@42";

let removeAlpha : string = myinfo.replace(/[A-Za-z]/g, "");
console.log(removeAlpha)