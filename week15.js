/*
Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
*/

function find(a, e) {
    return a.indexOf(e) === -1 ? "Not found" : a.indexOf(e)
}

/*
The code gives an error!

a = 123.toString
Fix it!
*/
let bb = 123
var a = bb.toString();

/*
Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
*/

function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    let sumA = a.reduce( (a, b) => (a) + (b**2), 0)
    let sumB = b.reduce( (a, b) => (a) + (b**3), 0)
  
    return sumA > sumB
  }