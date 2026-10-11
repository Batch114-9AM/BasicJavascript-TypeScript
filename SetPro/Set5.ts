
let cityNames : Set<string>  = new Set();

cityNames.add("Delhi")
cityNames.add("Mumbai")
cityNames.add("banglore")
cityNames.add("Chennai")
cityNames.add("Bhuneswar")
cityNames.add("Patna")
cityNames.add("Pune")

console.log(cityNames)
console.log(cityNames.has("Chennai"))
cityNames.delete("Chennai")
console.log(cityNames.has("Chennai"))

console.log(cityNames)

console.log("The Number of Elements in the Set is : " +cityNames.size)