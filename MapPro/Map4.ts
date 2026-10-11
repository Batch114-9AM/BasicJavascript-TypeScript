let myCityname : Map<number, string> = new Map();

myCityname.set(123, "true")
myCityname.set(3465124, "Train" )
myCityname.set(6251, "Ink")
myCityname.set(4623, "546522")
myCityname.set(6343512, "-3512")
myCityname.set(46232, "Day")

console.log(myCityname.get(4623))
console.log(myCityname.has(46232))
myCityname.delete(123)
console.log(myCityname)
console.log("The Number of elements in the Map is : " +myCityname.size)
myCityname.clear();
console.log(myCityname)


