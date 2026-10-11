let myCityname : Map<number, string> = new Map();

myCityname.set(123, "true")
myCityname.set(3465124, "Train" )
myCityname.set(6251, "Ink")
myCityname.set(4623, "546522")
myCityname.set(6343512, "-3512")
myCityname.set(46232, "Day")


for(let R of myCityname.keys())
{
    console.log(R)
}
console.log("----------------------------------------------------")
for(let V of myCityname.values())
{
    console.log(V)
}