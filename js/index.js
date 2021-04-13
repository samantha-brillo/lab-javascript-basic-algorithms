//Primera Itereación 
// número 1 y 2
let hacker1 = "Samamtha";
console.log(`"The driver's name is ${hacker1}"`)
// número 3 y 4
let hacker2 = "Armandoo";
console.log(`"The navigator's name is ${hacker2}"`)
console.log("___________________")

//____
// Segunda Iteración 
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
console.log("____________________")
//____
// Tercera Iteración 
let newName =[]
let algo = hacker1.toUpperCase()

for(let i=0; i<algo.length; i++){
  console.log(`otra: ${algo[i].toUpperCase()}`)
  newName.push(algo[i])
}

let quitar = newName.toString().replace(",", " ")
console.log(`esta es quitar ->${quitar}`)
let quitar2 =quitar.replace(","," ")
//console.log(" este es " + newName.toString())
console.log(`esta es quitar2 ->${quitar2}`)




for(let i=0; i<hacker1.length; i++){
  console.log(hacker1[i].toUpperCase())
}

for(let i=algo.length; i>-1; i--){
  //console.log(algo[i]);
  }

const hacker20 = hacker1.toUpperCase().split(" ").reverse();

console.log(`"${hacker20}""`)
console.log(newName)