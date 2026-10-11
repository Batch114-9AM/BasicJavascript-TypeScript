

let myinfo : string  = "My Car Name is : I20 , my car Engine no : 32%@783@42";

let removeNums : string = myinfo.replace(/[0-9]/g, "");

console.log(removeNums)
