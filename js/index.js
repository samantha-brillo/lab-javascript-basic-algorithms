//Primera Itereación
// número 1 y 2
let hacker1 = "Samamtha"
console.log(`"The driver's name is ${hacker1}"`)
// número 3 y 4
let hacker2 = "Armandoo"
console.log(`"The navigator's name is ${hacker2}"`)
console.log("___________________")

//____
// Segunda Iteración
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  )
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}
console.log("____________________")
//____
// Tercera Iteración

//Primera opcion para este
function toMayus(hacker) {
  let newHacker = " "
  for (let i = 0; i < hacker.length; i++) {
    newHacker += hacker[i].toUpperCase() + " "
  }
  return newHacker
}

console.log(toMayus(hacker2))
console.log(toMayus("jose"))
// Segunda opcion
//let mayus = hacker1.toUpperCase()

//let newHacker = "";
//for(let i=0; i<mayus.length; i++){
//  newHacker += mayus[i]+ " ";
//}

//console.log(newHacker)
//----------------------------------------

// Se le resta 1 porque son del metodo .length 8 elementos pero el for itera en los indicesy comienzan siempre en 0 por lo que tenemos que restar una posicion samantha -> 0 a 7 pero tiene 8 elementos
let newHacker = ""
for (let i = hacker1.length - 1; i >= 0; i--) {
  //console.log(hacker1.length)
  newHacker += hacker1[i]
}

console.log(newHacker)

//3.3------------

hacker1 = hacker1.toLowerCase()
hacker2 = hacker2.toLowerCase()

//  localeCompare()  devuelve un número negativo si la cadena de referencia ocurre antes de la cadena de comparación; positivo si la cadena de referencia ocurre después de la cadena de comparación; 0 si son equivalentes.
//este metodo compara el string al que le estas aplicando el metodo con el valor que esta como argumento
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1.
const lorems =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget suscipit dui, vitae venenatis tellus. Maecenas sit amet fringilla dui. Proin ultrices tellus at tortor porta egestas id egestas arcu. Phasellus venenatis risus vel erat consectetur, sit amet vehicula lacus pharetra. Praesent ut aliquet magna. Nullam in tortor id augue porta molestie. Nam ornare semper quam, a consectetur nibh lacinia vitae. Phasellus tempus augue vel efficitur lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non est aliquet, auctor dolor blandit, efficitur lectus. Vivamus viverra vehicula nibh a mollis. Suspendisse at ipsum ac metus pulvinar bibendum quis pharetra orci. Nam ac justo sed dolor tempor tincidunt. Donec dui leo, mollis et finibus ac, blandit ut odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id odio magna. Ut scelerisque turpis diam, quis bibendum nisl ullamcorper sit amet. Phasellus convallis quis ex sit amet sagittis. Nunc laoreet porttitor eleifend. Proin maximus semper malesuada. Fusce id congue nibh. Praesent imperdiet finibus dolor, sit amet fermentum dui gravida quis. Aenean vitae volutpat orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sapien massa, placerat molestie nisl quis, egestas porttitor nulla. Phasellus et pellentesque odio. Etiam pretium lorem a sagittis hendrerit."

let words = 0
let etCount = 0

// convertimos el párrafo en un array de palabras
let splittedLorems = lorems.split(" ")

// recorremos el nuevo array creado a partir del split y si el array contiene el o et. se suma a nuestra variable de etcount y cada vez que recorre el array se suma en nuestra variable words (+1)
for (let i = 0; i < splittedLorems.length; i++) {
  if (splittedLorems[i] === "et" || splittedLorems[i] === "et.") {
    etCount++
  }
  words++
}

console.log(splittedLorems)
console.log("words -->", words)
console.log("et count  -->", etCount)

//Bonus 2---------

// esta variable es la que vamos a comprobar
let stringToCheck = "ra.c e, C?AR!!"
// le aplicamos el metodo replace para quitar los caracteres especiales y los espacios ademas aplicamos el metodo .toLowerCase para hacer todos loe elentos minusculas
// -> /[ ,!.]/ <- se conoce como expresion regular( patron) y la g indica que la busqueda sea de manera global
stringToCheck = stringToCheck.replace(/[ ,!.?]/g, "").toLowerCase()
//-> "ra.c e, C?AR!!" -> racecar.    este seria así -> [r,a,c,e,c,a,r]
let reversedString = stringToCheck.split("").reverse().join("")

if (stringToCheck === reversedString) {
  console.log("String is a palindrome")
} else {
  console.log("Not a palindrome")
}
