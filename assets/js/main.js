//1.1
let nachName = "Michael"
let vorName = "Jackson"

console.log(nachName.length)

let name= nachName + vorName
console.log(name.length)

//1.2
let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"))
console.log(txt.indexOf("Earth"))
console.log(txt.indexOf("Moon")) //-1 > not in text

//1.3
let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"))
console.log(txt2.search("green"))
console.log(txt2.search("blue")) //-1 > not in text

//1.4
let A = 'Sam is going to '
let B = 'coding school.'

//Sam
let sam= A.slice(0,3)

console.log(sam)
document.write(sam+"<br>")

//is
let is= A.slice(3,6)

console.log(is)
document.write(is+"<br>")

// am is going to school
let first= A.slice(0,23)
let second = B.slice(7,13)

console.log(first+second)
document.write(first+second+"<br>")

//is going to school
let third = A.slice(4,23)

console.log(third+second)
document.write(third+second+"<br>")

//school
let school=B.slice(-8, -1)

document.write(school+"<br>")


//Sam is school
console.log(sam +is + school)
document.write(sam +is + school+"<br>")

//1.5
let text1 = 'Sam is back from coding school'
let t1 = text1.substring(0,3)
document.write(t1+"<br>")

let t2 = text1.substring(3,6)
document.write(t2+"<br>")

let t3 = text1.substring(23,31)
document.write(t3+"<br>")

document.write(t1+t2+t3+ "<br>")

//1.6
let codingSchool = 'Sam is working at coding school'
let cS1 = codingSchool.substr(0,4)
document.write(cS1 +"<br>")

let cS2 = codingSchool.substr(4,7)
let cS = codingSchool.replace("Sam is working at coding school", "works")

// Sam works at school
let cS3 = codingSchool.substr(14,32)
let cS4 = cS3.replace("coding", "")
document.write(cS1+cS+cS4+"<br>")


//1.7
let text = 'Sam is good at coding school'

//Sam is bad at school
let textA = (text.replace("coding",""))
let result = textA.replace("good","bad")
document.write(result +"<br>")

// Tom is good at school
let result1 = textA.replace("Sam","Tom")
document.write(result1 +"<br>")

// Sam is good at tennis
let result2 = textA.replace("school","tennis")
document.write(result2 +"<br>")

//1.8
let sentence = 'Sam is going to coding school'

//SAM IS GOING TO SCHOOL
let sent1 = sentence.toUpperCase()
document.write(sent1+"<br>")

//sam is going at school 
let sent2= sentence.toLowerCase()
document.write(sent2+"<br>")

// SAM is going to SCHOOL
let SAM =sam.toUpperCase()
let SAM1 = sentence.slice(3, 32)
document.write(SAM+SAM1+"<br>")

//sam IS GOING TO school
let sentence1 = sentence.slice(3,15) 
console.log(sentence1.toUpperCase())
let SAM2 =sam.toLowerCase()
document.write(SAM2+sentence1.toUpperCase()+school+"<br>")

//Sam Is Going To School
const last = sentence.split(" ");

for (var i = 0; i < last.length; i++) {
    last[i] = last[i].charAt(0).toUpperCase() + last[i].slice(1);
}

let str2 = last.join(" ");
document.write(str2 +"<br>")


let textV = "Sam is going to school"
let textW = "Tom"
let textY = "programming bike"
let textZ = "and"

// Sam is going to school and to the movie theater
let contact1 = textV.concat(" and to movie theater" +"<br>")
document.write(contact1)
// Sam is going to movie theater
// document.write(contact1.replace("to school and", " "))


// Tom and Sam are going to school
let contact3 = contact1.concat(textW," ",textZ," ",textV,)
document.write(contact3.replace("is", "are"))

// Tom and Sam are going to gym and to the movie theater
// Tom is going to school and to the movie theater






