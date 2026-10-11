
let myInfo = new Date();

console.log(myInfo)

console.log(myInfo.getFullYear())
console.log(myInfo.getMonth())
console.log(myInfo.getDate())
console.log(myInfo.getDay())  //index
console.log(myInfo.getHours())
console.log(myInfo.getMinutes())
console.log(myInfo.getSeconds())
console.log(myInfo.getMilliseconds()*5674)

let currentdate = myInfo.toISOString().split('T')[0]

console.log(currentdate)


