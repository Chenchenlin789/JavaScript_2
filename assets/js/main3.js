//string Methods

//length 

let myString = "superwoman"
let myName = "Chenyan"

console.log(myString.length)
console.log(myName.length)

let x
let y

x = myString.length
y = myName.length

console.log("superwoman: " +x)
console.log("chenyan: " +y)

//indexOf() 0-1-2-3-4... (suchfunktion)
let text= "Hallo Supercode, wir lernen heute String Methoden."

console.log(text.indexOf("supercode")); //-1, weil JS case sensitive ist. Content nicht identifizieren
console.log(text.indexOf("Supercode"))
console.log(text.indexOf("code"))

//search
console.log(text.search('wir'))
console.log(text.search('String'))


//slice 2 Parameter
let myTxt= "Steffen, Eric, Elaine"
// console.log(myTxt.slice(0,7))
// console.log(myTxt.slice(8,12))
console.log(myTxt.slice(-11,-7))
console.log(myTxt.slice(-15,-13))

//substring() 2 Parameter
//ähnlich wie slice(), kann aber keine negative Werte
let myTxt2 = "Heute ist Freitag"
let res1=myTxt2.substring(10,17)
console.log(res1)

//replace 2 Parameter
let res = myTxt.replace("Steffen", "Chen")
res = myTxt.replace("Eric", "Simon")
console.log(res)

console.log(myTxt2.replace("Freitag", myTxt))


//toUpperCase()
let res3=res.toUpperCase()
res3=myTxt2.toUpperCase()
console.log(res3)

//toLowerCase() a=a+b a+=b
res3=res3.toLowerCase()
// res3.toLowerCase() ???
res =res.toLowerCase() 
console.log(res)
console.log(res3)

let z=myTxt.slice(-8, -3)
console.log(z.toLowerCase())
console.log(myString.toUpperCase())

//concatenation 
//concat()

let myWord1 = "hello"
let myWord2 = "World"

console.log(myWord1+ "" +myWord2)
let contactText = myWord1.concat(" ", myWord2)
console.log(contactText)



