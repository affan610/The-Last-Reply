// Lesson - 1# Variables
// let var1 = 3;
// console.log(var1)
// const cal = 2 + 2;
// console.log(cal)
// console.log(cal + 2)
// const res = cal + 2
// console.log(res)
// const mes = "hello";
// console.log(mes);
// console.log("hello")
// var1 = 5
// console.log(var1)
// var1 = var1 + 1
// console.log(var1)
// const man = 2
// var boy = 6
// console.log(typeof mes)
// #Variables Project


// #Variables Exercises
// const name1 = "tafi"
// console.log("My name is - " + name1)
// let cost = 5 + (2 * 3) + 9
// console.log("The cost of food without tax is $" + cost)
// const tax = 20 * 0.1
// console.log("The tax that will be charged will be $" + tax)
// const totalcost = cost + tax
// console.log("The cost of food with tax is $" + totalcost)
// Lesson -2 #Booleans and #If-statements

// console.log(3 > 5 - 5)
// console.log(typeof true)
// console.log(5 === "5.00")
// if (false) {
//     console.log("hello")

// } else {
//     console.log("else")
// }
// const age = 15;
// if (age >= 16) {
//     console.log("Your can drive")
//     console.log("congrats")
// } else if (age >= 14) {
//     console.log("You are almost old enough to drive")
// } else {
//     console.log("You cannot drive")
// }
// console.log(true && false)
// console.log(0.2 >= 0 && 0.2 <= 1 / 3)
// console.log(true || false)
// console.log(!false)

// if (0) {
//     console.log("mam")
// }
// const cartq = 5
// if (cartq) {
//     console.log("The cart has product")
// }
// console.log(!0)
// console.log('text' / 5)
// let var1
// console.log(var1)
// const var2 = undefined
// console.log(var2)
// true ? "truly" : "false"
// const result = true ? 'truly' : 'falsy';
// console.log(result)
// false && console.log("hello")
// const man = 5 && "huha"
// console.log(man)
// const women = undefined || 'USD'
// console.log(women)
// Lesson -2 #Booleans and #If-statements Project

// Rock Pappers Sissors
// let random = Math.random()
// Lesson -2 #Booleans and #If-statements Exercises
// const hour = 12
// const myname = "Tafi"
// if (hour >= 6 && hour <= 12) {
//     console.log("Good Morning " + myname)
// } else if (hour >= 13 && hour <= 17) {
//     console.log("Good afternoon " + myname)
// } else {
//     console.log("good night " + myname)
// }
// const age = 65
// const isholiday = true
// if (age <= 6 && isholiday || age >= 65 && isholiday) {
//     console.log("Discount")
// } else {
//     console.log('No discount for you, haha')

// }
// rd = Math.random()
// const guess = "heads"
// let result = ''
// rd < 0.5 ? result = "heads" : result = "tails"
// result === guess ? console.log("You win") : console.log("You lose")
// Lesson - 7 #Functions
// function function1() {
//     console.log('hello')
//     console.log(2 + 2)
// }
// function1()
// function1()
// function1()
// #Parameters (Inside the #functions lesson)
// function calculatetax(cost, tax = 0.1) {

//     console.log(cost * tax)
// }
// calculatetax(2000, 0.2)
// calculatetax(5000)
// Rebuilding the rock paper sissors game agin by using function as told in the tutorial.



// function pickComputerMove() {
//     const random = Math.random();
//     let compmove = '';
//     if (random >= 0 && random < 1 / 3) {
//         compmove = 'rock'
//     } else if (random >= 1 / 3 && random < 1 / 2) {
//         compmove = 'scissors'
//     } else {
//         compmove = 'paper'
//     }
//     return compmove
// }

// function thegame(yourmove) {

//     const compmove = pickComputerMove()
//     let result = '';
//     if (yourmove === "scissors") {
//         if (compmove === 'rock') {
//             result = 'You lose'
//         } else if (compmove === 'paper') {
//             result = 'You win'
//         } else {
//             result = 'Its a tie'
//         }


//     }
//     if (yourmove === "rock") {

//         if (compmove === 'rock') {
//             result = 'Its a tie'
//         } else if (compmove === 'paper') {
//             result = 'You lose'
//         } else {
//             result = 'You win'
//         }
//     } else if (yourmove === "rock") {

//         if (compmove === 'rock') {
//             result = 'Its a tie'
//         } else if (compmove === 'paper') {
//             result = 'You lose'
//         } else {
//             result = 'You win'
//         }
//     }
//     elseif(yourmove === "paper") {
//         if (compmove === 'rock') {
//             result = 'You win'
//         } else if (compmove === 'paper') {
//             result = 'Its a tie'
//         } else {
//             result = 'You lose'
//         }

//     }
//     alert('You picked.' + yourmove + 'Computer picked ' + compmove + '. ' + result)
// }
// console.log(pickComputerMove())
// Lesson - 7 #Functions Exercises
// function greet(name) {
//     if (name === undefined) {
//         console.log("Hi there")
//     } else {
//         console.log("hello " + name)
//     }

// }
// greet("taif")

// function convertToFarenheit(celsius) {
//     fahrenheit = (celsius * 9 / 5) + 32
//     return fahrenheit
// }
// console.log(convertToFarenheit(25))

// function convertToCelsius(fahrenheit) {
//     celsius = (fahrenheit - 32) * 5 / 9
//     return celsius
// }
// console.log(convertToCelsius(86))


// function convertToTemperature(degree, unit) {
//     let toUnit = ""
//     let toDegree = ""
//     if (unit === "fahrenheit") {
//         toDegree = (degree - 32) * 5 / 9 + "C"
//         degree = degree + "F"
//         toUnit = "celcius"

//     } else if (unit === "celcius") {

//         toDegree = (degree * 9 / 5) + 32 + "F"
//         degree = degree + "C"
//         toUnit = "fahrenheit"
//     }
//     temp = "U have successfully converted " + unit + ": " + degree + " to " + toUnit + ": " + toDegree
//     return temp
// }
// console.log(convertToTemperature(25, "celcius"))

// function convertToLength(length, from, to) {
//     let value = ""
//     let lastvalue = ""
//     let invvalue = false
//     if (from === "km" && to === "km") {
//         value = length
//         console.log(value)
//     } else if (from === "km" && to === "miles") {
//         value = length / 1.6
//     } else if (from === "miles" && to === "km") {
//         value = length * 1.6
//     } else if (from === "feet" && to === "feet") {
//         value = length
//     } else if (from === "feet" && to === "km") {
//         value = length / 3281
//     } else if (from === "km" && to === "feet") {
//         value = length * 3281
//     } else if (from === "miles" && to === "feet") {
//         value = length * 5280
//     } else if (from === "feet" && to === "miles") {
//         value = length / 5280
//     } else(
//         invvalue = true


//     )


//     if (invvalue == true) {
//         lastvalue = "Invalid value: " + to
//     } else {
//         lastvalue = from + ": " + length + " to " + to + ": " + value

//     }
//     return lastvalue
// }
// console.log(convertToLength(26400, "feet", "lsgf"))


// let cartquantity =JSON.parse(localStorage.getItem("Cart_Quantity"))
// let result =  document.querySelector(".result")
// result.innerHTML =  `Cart Quantity ` + cartquantity
// function updateQuantity(value, plusOrMinues) {

// let otherThings = document.querySelector(".js_otherThings_p")
// if (value === "reset"){
//     cartquantity*=0
//     otherThings.innerHTML = "The cart was reseted"
// }
//   else  if(plusOrMinues === "add"){
// if (cartquantity >= 10) {
//     result.innerHTML = `Cart Quantity ` + cartquantity
//     otherThings.innerHTML = "The cart quantity is full, please don't try to update the cart anymore"
//     return
// }
// else {
//         if (value === "one") {
//                 cartquantity++
//                 otherThings.innerHTML = ""

//         } else if (value === "two"){
//             cartquantity+=2
//             otherThings.innerHTML = ""

//         }else if (value === "three"){
//             cartquantity+=3
//            otherThings.innerHTML = ""
//         } else if (value === "four"){
//             cartquantity+=4
//            otherThings.innerHTML = ""
//         } else if (value === "five"){
//             cartquantity+=5
//            otherThings.innerHTML = ""
//         }  else if (value === "show_quantity"){
//         result.innerHTML = `Cart Quantity ` + cartquantity
//            otherThings.innerHTML = ""
//         return

//         }
//     }
// } else if (plusOrMinues === "minus"){
//     if(cartquantity <= 0){
//         otherThings.innerHTML = "Invalid Quantity, please put item"  
//     } else {
//         if(value === "minus_one"){
//             cartquantity--
//             otherThings.innerHTML = ""
//         }else         if(value === "minus_two"){
//             cartquantity-=2
//             otherThings.innerHTML = ""
//         }else         if(value === "minus_three"){
//             cartquantity-=3
//             otherThings.innerHTML = ""
//         }
//     }
// }
// localStorage.setItem("Cart_Quantity", JSON.stringify(cartquantity) )
//     result.innerHTML = `Cart Quantity ` + cartquantity
// }
// Making a calculator
// let InvalidCode = "Invalid"
// let zeroOrInvalidStringHaveToChange = JSON.parse(localStorage.getItem("DoesZeroHaveToChange"))

// let dummyresult = JSON.parse(localStorage.getItem("dummyresult"))
// let firstResult = JSON.parse(localStorage.getItem("dummyresult"))
// let other_things_p = document.querySelector(".js_other_things")
// let willEquals = false
// let PlusOrNot = false
// let MinusOrNot = false
// let MultiplyOrNot = false
// let DivideOrNot = false
// let secondResult = ""
// let js_result_p = document.querySelector(".js_result_p")
// js_result_p.innerHTML = dummyresult
// let plus = false

// function calc(num) {
//     if (num === "one") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "1"

//             firstResult = firstResult + "1"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "1"
//             firstResult = firstResult + "1"

//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "1"
//             secondResult = secondResult + "1"
//             willEquals = true
//         }


//     } else if (num === "two") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "2"
//             firstResult = firstResult + "2"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "2"
//             firstResult = firstResult + "2"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "2"
//             secondResult = secondResult + "2"

//             willEquals = true

//         }
//     } else if (num === "three") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "3"
//             firstResult = firstResult + "3"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "3"
//             firstResult = firstResult + "3"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "3"
//             secondResult = secondResult + "3"



//             willEquals = true

//         }

//     } else if (num === "four") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "4"
//             firstResult = firstResult + "4"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "4"
//             firstResult = firstResult + "4"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "4"
//             secondResult = secondResult + "4"



//             willEquals = true

//         }

//     } else if (num === "five") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "5"
//             firstResult = firstResult + "5"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "5"
//             firstResult = firstResult + "5"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "5"
//             secondResult = secondResult + "5"



//             willEquals = true

//         }

//     } else if (num === "six") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "6"
//             firstResult = firstResult + "6"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "6"
//             firstResult = firstResult + "6"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "6"
//             secondResult = secondResult + "6"



//             willEquals = true

//         }

//     } else if (num === "seven") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "7"
//             firstResult = firstResult + "7"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "7"
//             firstResult = firstResult + "7"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "7"
//             secondResult = secondResult + "7"



//             willEquals = true

//         }

//     } else if (num === "eight") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "8"
//             firstResult = firstResult + "8"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "8"
//             firstResult = firstResult + "8"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "8"
//             secondResult = secondResult + "8"



//             willEquals = true

//         }

//     } else if (num === "nine") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "9"
//             firstResult = firstResult + "9"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "9"
//             firstResult = firstResult + "9"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "9"
//             secondResult = secondResult + "9"



//             willEquals = true

//         }

//     } else if (num === "zero") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "0"
//             firstResult = firstResult + "0"
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "0"
//             firstResult = firstResult + "0"
//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "0"
//             secondResult = secondResult + "0"



//             willEquals = true

//         }

//     } else if (num === "dot") {
//         if (zeroOrInvalidStringHaveToChange === true) {
//             dummyresult = "."
//             firstResult = firstResult + "."
//             zeroOrInvalidStringHaveToChange = false
//         } else if (PlusOrNot === false && MinusOrNot === false && MultiplyOrNot === false && DivideOrNot === false) {
//             dummyresult = dummyresult + "."
//             firstResult = firstResult + "."

//         } else if (PlusOrNot == true || MinusOrNot == true || MultiplyOrNot === true || DivideOrNot === true) {
//             dummyresult = dummyresult + "."
//             secondResult = secondResult + "."
//             willEquals = true


//         }

//     } else if (num === "clear") {

//         dummyresult = "0"
//         zeroOrInvalidStringHaveToChange = true
//         secondResult = ""
//         firstResult = ""
//     } else if (num === "plus") {
//         dummyresult = dummyresult + " + "
//         PlusOrNot = true
//     } else if (num === "minus") {
//         dummyresult = dummyresult + " - "
//         MinusOrNot = true
//     } else if (num === "multiply") {
//         dummyresult = dummyresult + " * "
//         MultiplyOrNot = true
//     } else if (num === "divide") {
//         dummyresult = dummyresult + " / "
//         DivideOrNot = true
//     } else if (num === "equals") {
//         if (secondResult === "") {

//             zeroOrInvalidStringHaveToChange = true
//             localStorage.setItem("DoesZeroHaveToChange", zeroOrInvalidStringHaveToChange)
//             firstResult = ""
//             js_result_p.innerHTML = InvalidCode
//             localStorage.setItem("dummyresult", JSON.stringify(InvalidCode))
//             return
//         } else if (willEquals == false) {
//             dummyresult = Number(dummyresult)
//         } else if (willEquals == true && PlusOrNot === true) {
//             dummyresult = Number(firstResult) + Number(secondResult)
//             secondResult = ""
//             firstResult = dummyresult
//             PlusOrNot = false
//         } else if (willEquals == true && MinusOrNot === true) {
//             dummyresult = Number(firstResult) - Number(secondResult)
//             secondResult = ""
//             firstResult = dummyresult
//             MinusOrNot = false
//         } else if (willEquals == true && MultiplyOrNot === true) {
//             dummyresult = Number(firstResult) * Number(secondResult)
//             secondResult = ""
//             firstResult = dummyresult
//             MultiplyOrNot = false
//         } else if (willEquals == true && DivideOrNot === true) {
//             dummyresult = Number(firstResult) / Number(secondResult)
//             secondResult = ""
//             firstResult = dummyresult
//             DivideOrNot = false
//         }
//     }
//     console.log("Value fo first result" + firstResult)
//     console.log("Value fo dummyresult" + dummyresult)

//     console.log("Value fo second result" + secondResult)
//     localStorage.setItem("DoesZeroHaveToChange", zeroOrInvalidStringHaveToChange)
//     localStorage.setItem("dummyresult", JSON.stringify(dummyresult))

//     js_result_p.innerHTML = dummyresult
// }
// Lesson - 7 #Objects
// (Separated file) Making a new copy/updated of the rock paper scisoors project.




// More details about #Object
// const product = {
//     name: "shirt",
//     'socks-shirt': "1 day",
//     rating: {
//         stars: 4.5,
//         count: 87
//     },
//     fun: function funcky() {
//         console.log("people")
//     }

// }
// console.log(product.rating.stars)
// console.log(product.name)
// console.log(product["name"])
// // console.log(product.shirt-socks)
// console.log(product["socks-shirt"])
// product.fun()
// console.log(typeof console.log)
// const json = JSON.stringify(product)
// console.log(JSON.parse(json))
// console.log(JSON.stringify(product))
// function people (number = "poele"){
//     console.log(number)

// }
// people(null)
// console.log("hello".length)
// console.log("hello".toUpperCase())
// console.log(25.7.toString())
// const obj = {
//     message: "onepoeple"
// }
// const obj2 = obj
// const obj3 = {
//     message: "two people"
// }
// console.log(obj.message = "two people")
// console.log(obj2)
// console.log(obj === obj3)
// console.log(obj2 === obj

// )
// const obj4 = {
//     cula: "mibi",
//     price: 799
// }
// // const cula = obj4.cula
// const { cula, price } = obj4
// console.log(cula)
// console.log(price)
// const anothermessage = obj4.cula
// const obj5 = {
// cula,
// //afunc: function bfunc() {
//  //   console.log("hello")
// //}
// afunc(){
//     console.log("hello")
// }
// }
// console.log(obj5)
// obj5.afunc()
// Lesson - 8 #Object Exercises
// const product = {
//     name: "basketball",
//     price: 2095,
//     ["delivery-time"]: "1 hour"
// }
// console.log(product)
// console.log(product.price  + 500)
// console.log(product["delivery-time"])
// const product1 = {
//     name: "Basketball",
//     price: 2095
// }
// const product2 = {
//     name: "Tennis Ball",
//     price: 3025
// }
// let result = ""
// function compareProduct(p1, p2){
//    if(p1.price > p2.price){
//      result = `The less expensive product is ${p1.name} and thee price of thee product is ${p1.price} cents.`
//    } else  if(p2.price > p1.price){
//     result  = `The less expensive product is ${p2.name} and thee price of thee product is ${p2.price} cents.`
//    }
//    return result
// }
// console.log(compareProduct(product1, product2))

// const product3 = {
//     name: "Tennis Ball",
//     price: 3025
// }
// const product4 = {
//     name: "Tennis Ball",
//     price: 3025
// }
// result = ""
// function isSameProduct (p1, p2) {
// if (p1.name === p2.name && p1.price === p2.price){
//     result = "Yes the products are the same "
// } else (
// result = "Product are not the same"
// )
// return result
// }
// console.log(isSameProduct(product3, product4))
// console.log("POPLE".toLowerCase())
// console.log("man ".repeat(3))

// let result = ""

// let compMove = ""

// let score = JSON.parse(localStorage.getItem("score"))
// let yourMove = document.querySelector(".js_your_move")
// let scoreInP = document.querySelector(".js_p")
// scoreInP.innerHTML =  `${result}

// Score: wins: ${score.wins}, loses: ${score.loses}` 
// function computerMove() {
//     let Random = Math.random()
//     if (Random <= 0.5){
// compMove ="heads"
//     } else if (Random > 0.5 && Random <= 1) {
// compMove = "tails"
//     }
//     return compMove

// }
// function playGame(yourmove){
//     compMove = computerMove()
//     if (yourmove === "reset"){
// score.wins*= 0
// score.loses*=0
//     } 
//    else  if (yourmove === compMove){
//         result = "Your guess is right."
//         score.wins++
//     } else {
//         result = "Your guess is wrong"
//         score.loses++
//     }
//     localStorage.setItem("score", JSON.stringify(score))
//     yourMove.innerHTML = `You chose ${yourmove}`

//     scoreInP.innerHTML =  `${result}
//     Score: wins: ${score.wins}, loses: ${score.loses}` 
// }
// Lesson - 9 #DOM
// document.body.innerHTML = "hello"
// // document.title = "DOm"
// console.log(document.title)
// document.title = "changed"
// console.log(document.title)
// console.log(document.body)
// console.log(typeof document.body)

// console.log(document.body.innerHTML)
// document.body.innerHTML  = "<button>Helo</button>"
// document.querySelector("p").innerHTML = "changed"
// console.log(document.querySelector("p").innerHTML)
// const hu = document.querySelector(".man")
// console.log(hu)
// #DOM Projects
// function subscribe() {
//     let b = document.querySelector('.js_b')

//             if (b.innerText === 'Subscribe'){
//                 b.innerHTML = 'Subscribed'
//                 b.classList.add("is_subscribed")
//             } else {
//                 b.innerHTML = 'Subscribe'
//                 b.classList.remove("is_subscribed")
//             }
// }
// //Amazon shipping Calculator
// function shippingCharges() {
//     const result = document.querySelector(".js_cost")
//     const inputValue = document.querySelector(".i")
//     let iValue = inputValue.value
//     iValue *= 100

//     let cost = ""
//     if (iValue < 4000) {
//         cost = `$ ${(Number(iValue) + 1000)/100} `
//     } else if (iValue >= 4000) {
//         cost = `$ ${iValue/100}`

//     } else {
//         result.style.color = "red"
//         result.innerHTML = "Invalid value"
//         return
//     }
//     result.innerHTML = cost
// }

// function isEnterKey(event) {
//     if (event.key === 'Enter') {
//         shippingCharges()
//     }
// }
// console.log(typeof String(22))
// console.log("25" - 5)
// window.console.log("jdvcjs")
// window.alert("jbksjd")
// #DOM Exercises
// document.querySelector(".abutton").innerHTML = "Button Done"
// function displayName () {
//      document.querySelector(".i").value = "Taif"

// }
// function Enter (event) {
//     if (event.key === "Enter") {
//    document.querySelector(".i").value = "Taif"
//     }
// }
// let  vent =""
// function onKeyUp() {
//    vent = vent + event.key
//     if(event.key){
//         document.querySelector(".js_p").innerHTML = vent
//     }
// }
// Lesson - 10 #HTML, CSS, and Javascript Together exercises
// console.log(document.querySelector(".js_button").classList.contains("js_button"))
// let toggle_button1 = document.querySelector(".js_button1")
// let toggle_button2 = document.querySelector(".js_button2")
// let toggle_button3 = document.querySelector(".js_button3")

// function toggle1(){

//     if(toggle_button1.classList.contains("is_toggled1")){
//         toggle_button1.classList.remove("is_toggled1")
//     } else {
//         toggle_button3.classList.remove("is_toggled3")
//         toggle_button2.classList.remove("is_toggled2")

//         toggle_button1.classList.add("is_toggled1")
//     }
// }

// function toggle2(){

//         if(toggle_button2.classList.contains("is_toggled2")){
//             toggle_button2.classList.remove("is_toggled2")
//         } else {
//         toggle_button1.classList.remove("is_toggled1")

//             toggle_button2.classList.add("is_toggled2")
//             toggle_button3.classList.remove("is_toggled3")

//         }
//     }
//     function toggle3(){

//             if(toggle_button3.classList.contains("is_toggled3")){
//                 toggle_button3.classList.remove("is_toggled3")
//             } else {
//             toggle_button2.classList.remove("is_toggled2")
//             toggle_button1.classList.remove("is_toggled1")

//                 toggle_button3.classList.add("is_toggled3")
//             }
// }
//  Lesson 11 #Arrays and Loops
// let i = 1
// while(i < 5){
//   console.log("I is still running")
//   i++
// }
// for(let i = 1; i < 5; i++){
// console.log(i)
// }
// let random = 0
// while(random < 0.5){
//   random = Math.random()
// }
// console.log(random)
// let todoList = [
//   "make dinner", 
//   "make a website", 
//   "do css"
// ]
// for(i = 0; i < todoList.length; i++){
//   let value = todoList[i]
//   console.log(value)
// }
// let num = [2, 5, 3]
// let value = 0
// let total = []
// for(let i =0; i < num.length;i++){
//   total.push(num[i] * 2)
// }
// console.log(total)
// const myarray = [12, 13,14]
// console.log(myarray)
// console.log(myarray[1])
// myarray[0] = 99
// console.log(myarray)
// let anotherArray = [0, "hello", true, {name:"socks"}, [0, 12]]
// console.log(anotherArray)
// console.log(typeof [2, 1])
// console.log(Array.isArray([2, 3]))
// console.log(anotherArray.length)
// myarray.push("hello")
// console.log(myarray)
// myarray.splice(0, 2)
// console.log(myarray)
// Lesson 11 #Arrays
// Making Todo 1
// let todoElement = document.querySelector(".todo_1")
// let todoName = ""
// let todo_name_array = []
// function onEnterAddTodo (event){

// if(event.key === "Enter"){
//  todoName = todoElement.value
//    todo_name_array.push(todoName)
//   console.log(todo_name_array)

//   todoElement.value = ""
// }
// }
// function addtodo(){
// todoName = todoElement.value
//   todo_name_array.push(todoName)
//  console.log(todo_name_array)
//  todoElement.value = ""
// }
// (Separated file) Making todo 2 and todo 3 which is a ubgraded version of it

// #Arrays Exercises
// const nums = [90, 20, 30, "weew"]
// nums[2] = 99
// console.log(nums)
// function lastValuesOfArrays() {
//     let theArray = nums
//     theLastValue = theArray[theArray.length - 1]
//     console.log(theLastValue)
// }
// lastValuesOfArrays()

// function lastValuesOfArrays() {
//     let theArray = nums
//     let storeFisrstValue = theArray[0]
//     theArray[0] = theArray[theArray.length - 1]
//     theArray[theArray.length - 1] = storeFisrstValue
//     theSwappedArray = theArray
//     console.log(theSwappedArray)
// }
// lastValuesOfArrays()
// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i += 2
// }
// i = 5
// while (i >= 0) {
//     console.log(i)
//     i--
// }
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i)
// }
// for (let i = 5; i >= 0; i--) {
//     console.log(i)
// }
// i = 0
// let theArray = [11, 21, -31, -22]

// let the2ndArray = [9, 9, 9]
// greaterThanZero(theArray)
// addOne(theArray, 2)


// function addOne(array, num = 1) {
//     let theNewArray = []
//     while (i < theArray.length) {

//         theNewArray.push(array[i] + num)
//         i++
//     }
//     console.log(theNewArray)
// }
// addOne(theArray, the2ndArray)


// function addOne(array1, array2) {
//     let theNewArray = []
//     while (i < theArray.length) {

//         theNewArray.push(array1[i] + array2[i])
//         i++
//     }
//     console.log(theNewArray)
// }
// function greaterThanZero(array) {
//     let greaterThanZeroValues = 0
//     while (i < array.length) {
//         if (array[i] > 0) {
//             greaterThanZeroValues++
//         }
//         i++
//     }
//     console.log(greaterThanZeroValues)
// }
// let i = 0
// let theArray = [-1, 9]

// function minMax(array) {

//     let values = {
//         min: array[i] || null,
//         max: array[i] || null
//     }

//     while (i < array.length) {
//         console.log("first ke pahle " + array[i])
//         if (array[i] <= 0) {
//             if (values.min >= array[i]) {
//                 values.min = array[i]
//             }
//             console.log("pahela if " + array[i])
//         } else if (array[i] > 0) {

//             if (values.min >= array[i]) {
//                 values.min = array[i]
//                 console.log("dusra if" + array[i])

//             }
//         }
//         i++
//     }
//     i = 0
//     while (i < array.length) {
//         console.log("second me " + array[i])
//         if (values.max <= array[i]) {
//             values.max = array[i]
//             console.log("tisra if" + array[i])
//         }
//         i++
//     }
//     console.log(values)
// }
// minMax(theArray)

// let theArray = ["hello", "hello", "hello",  "bye", "hello", "bye", "bye"]
// countStrings(theArray)

// function countStrings(array) {

//     let diffStringsArray = []
//     let firstStingRepeatNum = 0
//     let secondStringRepeatNum = 0
//     let i = 0


//     let obj = {
//         firstValue: array[i],
//         secondValue: array[i]
//     }
//     while (i < array.length) {
//         if (array[i] == obj.firstValue) {
//             firstString[i] = array[i]
//             obj.firstValue = array[i]
//         } else if (array[i] != obj.firstValue) {
//             firstString[i] = array[i]
//             obj.secondValue = array[i]

//         }
//         i++
//     }
//     i = 0
//     while (i < array.length) {
//         if (array[i] == obj.firstValue) {
//             firstStingRepeatNum++
//         } else if (array[i] == obj.secondValue) {
//             secondStringRepeatNum++
//         }
//         i++
//     }

// console.log(`${firstString} : ${firstStingRepeatNum} ${secondString} : ${secondStringRepeatNum}`)

// }
// Lesson - 9 #Arrays(Part 2)
// const array1 = [1, 2, 3]
// const array2 = array1.slice()
// array2.push(4)
// console.log(array2)
// console.log(array1)
// const [firstValue, secondValue] = [2, 3, 4]

// console.log(firstValue)
// console.log(secondValue)
// for (let i = 0; i <= 10; i++) {
//     if (i % 3 === 0) {
//         continue
//     }
//     console.log(i)
// }

// let i = 0
// while (i <= 10) {
//     if (i % 3 === 0) {
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// }
// function doubledNums(nums) {

//     const numsDoubled = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             return numsDoubled
//         }
//         const num = nums[i]
//         numsDoubled.push(num * 2)
//     }

//     return numsDoubled
// }

// console.log(doubledNums([2, 3, 3]))
// console.log(doubledNums([901223, 0, 3.3, 0]))
// #Arrays(part-2) Exercise


// const foodWithEgg = ["sandwich", "briyani", "panner makhani", "egg", "chocolate", "egg", "egg"]
// const foodWithoutEgg = []

// function removeFirstTwoEgg(foods) {
//     let isTwoEggsRemoved = 0
//     for (let i = 0; i < foods.length; i++) {
//         if (foods[i] != "egg") {
//             foodWithoutEgg.push(foods[i])
//         } else if (foods[i] === "egg" && isTwoEggsRemoved <= 1) {

//             isTwoEggsRemoved++
//             continue

//         } else {
//             foodWithoutEgg.push(foods[i])
//         }

//     }
//     return foodWithoutEgg
// }

// console.log(removeFirstTwoEgg(foodWithEgg))
// console.log(findIndex(["green", "blue", "red", "search"], "k"))
// const foodWithEgg = ["egg", "sandwich", "briyani", "panner makhani", "egg", "chocolate", "egg"]
// const foodWithoutEgg = []

// function removeFirstTwoEggReverse(foods) {

//     let isTwoEgglengthsRemoved = 0


//     for (let i = 0; i < foods.length; i++) {
//         if (foods[i] === "egg") {
//             isTwoEgglengthsRemoved++
//         } else {

//         }
//     }

//     for (let i = 0; i < foods.length; i++) {

//         if (foods[i] != "egg") {
//             foodWithoutEgg.push(foods[i])
//         } else if (foods[i] === "egg") {
//             if (isTwoEgglengthsRemoved > 2) {
//                 foodWithoutEgg.push(foods[i])

//                 isTwoEgglengthsRemoved--
//             } else if (isTwoEgglengthsRemoved <= 2) {
//                 continue
//             }
//         }

//     }
//     return foodWithoutEgg
// }

// console.log(removeFirstTwoEggReverse(foodWithEgg))
// function fizzBuzz() {
//     let initialArray = []

//     for (let i = 1; i <= 20; i++) {
//         initialArray.push(i)
//     }
//     for (let i = 1; i <= initialArray.length; i++) {
//         if (initialArray[i] % 5 === 0 && initialArray[i] % 3 === 0) {
//             initialArray[i] = "fizzbuzz"
//         } else if (initialArray[i] % 3 === 0) {
//             initialArray[i] = "fizz"
//         } else if (initialArray[i] % 5 === 0) {
//             initialArray[i] = "buzz"
//         }

//     }



//     return initialArray

// }
// console.log(fizzBuzz())
// function findIndex(array, word) {

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] === word) {
//             return i

//         }

//     }
//     return -1
// }

// console.log(findIndex(["green", "blue", "red", "search"], "green"))
// let aArray = ["green", "white", "blue", "blue", "white"]


// function unique(array) {
//     let lastArray = []
//     let isItContinue = false
//     for (let i1 = 0; i1 < array.length; i1++) {
//         for (let i2 = 0; i2 < lastArray.length; i2++) {
//             if (array[i1] === lastArray[i2]) {
//                 isItContinue = true
//                 break
//             }

//             continue
//         }

//         if (isItContinue === true) {
//             isItContinue = false
//             continue
//         }
//         lastArray.push(aArray[i1])
//     }
//     return lastArray
// }
// console.log(unique(aArray))
// Lesson - 12 #Advanced Functions
// greeting()

// function greeting() {
//     console.log("hello")
// }
// console.log(greeting())
// function1()
// const function1 = function() {
//     console.log("hello2")
// }
// console.log(function1)
// console.log(typeof function1)
// function1()
// let obj1 = {
//     num: 5,
//     func: function() {
//         console.log("hello3")
//     }
// }
// obj1.func()

// function display(param) {
//     param()
// }
// display(function() {
//     console.log("hello4")
// })
// setTimeout(function() {
//     console.log("timeout")
//     console.log("timeout2")

// }, 3000)
// console.log("next line")
// setInterval(function() {
//     console.log("interval")
// }, 2000)
// console.log("next line 2")
// [
//     "aa",
//     "bb",
//     "cc"
// ].forEach((value, index) => {
//         if (value === "bb") {
//             return
//         }
//         console.log(index)
//         console.log(value)
//     })
// #Advanced Functions Exercises
// const add = function() {
//     console.log(2 + 3)
// }
// add()
// add()

// function runTwice(add) {
//     add()
// }
// runTwice(function() {
//     console.log(2 + 3)
//     console.log(2 + 3)
// })
// const theB = document.querySelector(".theB")
// theB.addEventListener("click", () => {
//     textChange()
// })

// function textChange() {
//     theB.innerHTML = "Loading..."
//     setTimeout(() => {
//         theB.innerHTML = "Finished!"
//     }, 1000)
// }
// const cartP = document.querySelector(".cartP")
// const cartPElement = document.querySelector(".addToCart")
// cartPElement.addEventListener("click", () => {
//     addToCart()
// })
// let cartTimeout;
// isSecondTme = false

// function addToCart() {
//     cartP.innerHTML = "Added"
//     if (!isSecondTme) {
//         cartTimeout = setTimeout(() => {
//             cartP.innerHTML = ""
//         }, 2000)
//         isSecondTme = true
//     } else {
//         clearTimeout(cartTimeout)
//         cartTimeout = setTimeout(function() {
//             cartP.innerHTML = ""
//         }, 2000)
//     }

// }
// let willChange = false
// let noOfMessages = 2
// let changeTitleTimer;
// document.title = "App"
// changeTitle()
// const addButton = document.querySelector(".add")
// addButton.addEventListener("click", () => {
//     addOrRemove('add')
// })
// const minusButton = document.querySelector(".minus")
// minusButton.addEventListener("click", () => {
//     addOrRemove('remove')
// })

// function changeTitle() {
//     changeTitleTimer = setInterval(() => {
//         if (willChange === false) {
//             document.title = `(${noOfMessages}) New messages`
//             willChange = true

//         } else {
//             document.title = `App`
//             willChange = false
//         }


//     }, 1000)
// }



// function addOrRemove(value) {

//     if (value === "add" && noOfMessages >= 0) {
//         noOfMessages++
//         clearInterval(changeTitleTimer)
//         changeTitle()
//     } else if (value === "remove" && noOfMessages === 0) {
//         document.title = "App"
//         clearInterval(changeTitleTimer)
//         return
//     } else if (value === "remove") {
//         noOfMessages--
//     }
// }
// const arrowFunc = () => {
//     console.log("hi")
// }
// arrowFunc()
// const add = param => {
//     console.log(param + 1)
// }
// add(2)
// const oneLine = () => 2 + 3
// console.log(oneLine())
// const obj2 = {
//     method() {
//         console.log("method")
//     }
// }
// obj2.method()
// const eventListener = () => {
//     console.log("string")
// }
// const theB = document.querySelector(".theB")
// theB.addEventListener("click", eventListener)
// theB.removeEventListener("click", eventListener)
// theB.addEventListener("click", () => {
//     console.log("string2")
// })
// const theArray = [2, -3, 4]
// const filter = theArray.filter((value, index) => {
// if (value < 0) {
//     return false
// } else if (value >= 0) {
//     return true
// }
//     return value >= 0
// })
// console.log(filter)
// const map = theArray.map((value, index) => {
//     return value * 2
// })
// console.log(map)
// const map2 = theArray.map(value => value * 2)
// console.log(map2)
// #Advanced Functions Exercises
// const multiplyTwoValues = (value1,
//     value2) => value1 * value2

// console.log(multiplyTwoValues(2, 5))

// function positiveNums(array) {
//     let onlyPositiveNumsArray = [];
//     array.forEach((value) => {
//         if (value >= 0) {
//             onlyPositiveNumsArray.push(value)
//         } else {
//             return
//         }
//     })
//     return onlyPositiveNumsArray
// }
// console.log(positiveNums([-2, 0, "notANum", 3, 4]))
// const theArray = [2, 3, 4, 5]

// function addNum(array, num) {
//     const addNumArray = array.map(value => value + num)

//     return addNumArray
// }
// console.log(addNum(theArray, 2))
// const foods = ["egg", "salad", "egg", "chicken", "egg", "briyani", "egg"]
// let eggsRemoved = 2

// function removeFirstTwoEgg(foods) {
//     const filterEgg = foods.filter((value) => {
//         if (value === "egg" && eggsRemoved > 0) {
//             eggsRemoved--
//             return false
//         } else {
//             return true
//         }
//     })
//     return filterEgg
// }
// console.log(removeFirstTwoEgg(foods))