//Template Literals
//Backsticks `` shift+`
// Before: String concatenation: "string text" + variable + "string text" 
// now: template literals: `string text${expression} string text``

let myString = '" We do not make mistakes. We just have happy accidents." -Bob Ross'

document.write(myString)


//shift+option+7 for \
let single ='"we don\'t make mistakes" - Bob Ross' 
document.write(single)

//template Literals ```
let tempLit = `"We do not make mistakes. We just have happy Accidents" - Bob Ross`

document.write(tempLit)

//Übung
let vorname = "Micky"
let name = "Mouse"
let alter = 100
let city = "Entenhausen"

console.log("Ich heiße " + vorname + " "+ name +" und lebe in " + city +".")

let hi = `Ich heiße ${vorname} ${name} und lebe in ${city}.`
console.log(hi)
//or
console.log(`Ich heiße ${vorname} ${name} und lebe in ${city}.`)

console.log(document.getElementById("result"))
document.getElementById("result").innerHTML=`Ich heiße ${vorname} ${name} und lebe in ${city}. Ich bin ${alter} Jahre alt.
<p>hey world <p><p>world peace<p>`

//function with parameter
function greeting(name, age, city) {
    console.log(`ich bin ${name} und bin ${age} Jahre alt. Ich komme aus ${city}.`)
}

greeting ("Klaus", "21" ,"Berlin")


//Ternary Operator, JS Comparison Vergleich Operator

//Syntaxt: variable name= (condition) ? value1: value2

// == equal to content, === equal to content + data-type

//!=not equal to content, !==not equal to content + data -type
// > größer als, < kleiner als
// >=größer als oder gleich, <=kleiner als oder gleich

let vergleich
let j= 5
let k="5"

// vergleich = (j==k) ? true:false;
vergleich = (j===k) ? true:false;
console.log(vergleich)

function checkAge() {
    let alter, volljaehrig;
    //let alter;
    //let volljaehrig
    alter= document.getElementById("alter").value;
    console.log(alter)
    volljaehrig = (alter >=18) ? "volljährig":"minderjährig"

    document.getElementById("demo").innerHTML=`Du bist ${volljaehrig}.`

}