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

/*
LEETCODE
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
  let retArr = []
  var twoSum = function(nums, target) {
      nums.forEach( (num, i1) => {
          nums.forEach( (num2, i2) =>{
              if (num + num2 === target && i1 != i2){
                  retArr[0] = i2
                  retArr[1] = i1
              }
          })
      })
      
      return retArr
  };

/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

  var reverse = function(x) {
    if (Math.abs(x) > (2**30)) { return 0}
      if(Math.sign(x) === -1){ //check if negative
    x = x.toString().split('').reverse() //to string array and reverse
    x.pop()//remove last n which is negative
    return Number(x.join('')) * -1 //return negative reversed n
  }else{
    return Number(x.toString().split('').reverse().join('')) //convert to str array, reverse then convert back
  }
};