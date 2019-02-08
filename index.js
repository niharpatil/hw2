
var hidden = require('./hidden')
var getUser = hidden.getUser

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Ignore code above this line                                                 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Homework Problems: These homework problems are going to be focussed on callbacks

// Remember that a 'callback' is a function that is called internally by another function. 

// Here's an example of a callback

var logNumber2 = function(){
  console.log('2')
}

var someOtherFunction = function(cb) {
  console.log('1')
  cb()
}

// Notice that in someOtherFunction, cb is actually a function that is passed in as a parameter
// So, when we execute the following line of code, the function logNumber2 is passed to someOtherFunction
// someOtherFunction first prints '1' and then executes "cb", which in this case refers to logNumber2

someOtherFunction(logNumber2) //prints '1' and then '2'

// Anyway, below are a bunch of problems on callbacks. They're not actually that hard but I REALLY want you
// to get a solid hold on callbacks before we continue moving faster.

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Problem 1                                                                   *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//1. Write a forEach function that takes an array as the first parameter and calls function f (the second parameter) on each element in the array
function forEach(arr, f) {
 // STUB
  for(let i = 0; i < arr.length; i++){
    f(arr[i])
  }
 // ENDSTUB
}

// EXAMPLE 1 of using forEach
var add1 = function(element) {
  console.log(element + 1)
}
forEach([1,2,3,4], add1) // should output 2,3,4,5

// EXAMPLE 2 of using forEach
var separateByComma = function(element){
  console.log(element.split(',')) //remember the split function?
}
forEach(["a,b",'c,d'], separateByComma) // should output [a,b] [c,d]

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Problem 2                                                                   *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//Complete the function inplaceMap. It should replace every item in the array arr with the return value of mapperF (a function). mapperF is a callback
function inplaceMap(arr, mapperF){
  //STUB
  for (let i = 0; i < arr.length; i++) {
    arr[i] = mapperF(arr[i])
  }
  return arr
  //ENDSTUB
}

// EXAMPLE 1 of using inplaceMap
var replaceWithBrocolli = function(element) {
  if (element === 'HAM') {
    return 'BROCOLLI'
  } else {
    return element
  }
}
var foodArray = ['JAM','PAM','PEPPER','HAM','TOMATO', 'HAM']
inplaceMap(foodArray, replaceWithBrocolli)
// console.log(foodArray) // should output ['JAM','PAM','PEPPER','BROCOLLI','TOMATO', 'BROCOLLI']

// EXAMPLE 2 of using inplaceMap
var add2 = function(element) {
  return element + 2
}
var numbers = [1,2,3,4]
inplaceMap(numbers, add2)
// console.log(numbers) // should output [3,4,5,6]


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Problem 3                                                                   *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

//Complete returnMap that does the same thing as the last one BUT it returns a new array except of modifying an existing one

function returnMap(arr, mapperF){
  //STUB
  var returnArray = []
  for (let i = 0; i < arr.length; i++) {
    returnArray.push(mapperF(arr[i]))
  }
  return arr
  //ENDSTUB
}

// EXAMPLE 1 of using returnMap
var replaceWithBrocolli = function(element) {
  if (element === 'HAM') {
    return 'BROCOLLI'
  } else {
    return element
  }
}
var foodArray = ['JAM','PAM','PEPPER','HAM','TOMATO', 'HAM']
var mappedFoodArray = returnMap(foodArray, replaceWithBrocolli)
// you can uncomment the following the following two log statements by removing the // infront of them
// console.log(foodArray) // should output ['JAM','PAM','PEPPER','HAM','TOMATO', 'HAM']
// console.log(mappedFoodArray) // should output ['JAM','PAM','PEPPER','BROCOLLI','TOMATO', 'BROCOLLI']


// EXAMPLE 2 of using returnMap
var add2 = function(element) {
  return element + 2
}
var numbers = [1,2,3,4]
var numbersMapped = returnMap(numbers, add2)
// console.log(numbers) // should output [1,2,3,4]
// console.log(numbersMapped) // should output [3,4,5,6]


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Problem 4                                                                   *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// I've written a function getUser that gets a user. It then passes that user to a callback function that it must be provided.
// Your job is to write a callback function that changes the user's lastname to "Smith". This one's a bit tricky...

var yourCallback = undefined // you need to change this line of code. yourCallback needs to a function and not "undefined"

//STUB
var yourCallback = function(user) {
  user.lastname = "Smith"
}
//ENDSTUB

getUser(yourCallback)


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Problem 5                                                                   *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// This is a challenge problem for this assignment.
// Your job is to use callbacks to write the function bodies of mathify, add1P5 
// and multiply2P5. YOu can only use mathematical expressions or operators (+ and *)
// in add1P5 and multiply2P5. You can't use any operator in the function body of
// mathify. Note that mathify takes in a number num. Using the
// idea of callbacks, you need to eventually print the value (num+1) * 2 to the console
// in mathify without using the + and * operators and instead only using the functions
// add1P5 and multiply2P5.

function add1P5(num, cb){
  // STUB
  cb(num+1)
  // ENDSTUB
}

function multiply2P5(num, cb){
  // STUB
  cb(num*2)
  // ENDSTUB
}

function mathify(number){
  // STUB
  add1P5(number, function(e){
    multiply2P5(e, function(v){
      console.log(v)
    })
  })
  // ENDSTUB
}

mathify(4) // should output 10 since 10 = (4+1)*2
mathify(6) // should output 14 since 14 = (6+1)*2

// EXAMPLE 1 problem 5
