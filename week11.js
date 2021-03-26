var findMissing = function (list) {
  let progression = 0

  list.reduce( (acc, number) => {
    progression = number - acc[acc.length]
    (progression !== 0) ? acc.push(progression) : console.log(progression)

    acc.forEach( (progNum) => {
      (progression < progNum) ? console.log(progression) : progression = progNum
    })

  } [list[0]] )


  return progression
}

console.log(findMissing([1, 3, 4]));

/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

function problem(x){
  //your code here
  return isNaN(x) ? 'Error' : x === '' ? 'Error' : x * 50 +6
}


/*
This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
*/

const solve = (x, y) => x / y

/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/
function hasUniqueChars(str){
  // ...
  let ret = true //initial return value

  str.split('').reduce( (acc, string) => {
    if(ret){ ret = (acc.includes(string)) ? false : true} //check if value exists
    acc.push(string) //add new value to arr
    return acc //return accumilator
  }, [])

  return ret
}

console.log(hasUniqueChars("  nAa")); //should be false

/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
 -456 -> -654
 1000 ->    1
*/

function reverseNumber(n) {
  // ...
  if(Math.sign(n) === -1){ //check if negative
    n = n.toString().split('').reverse() //to string array and reverse
    n.pop()//remove last n which is negative
    return Number(n.join('')) * -1 //return negative reversed n
  }else{
    return Number(n.toString().split('').reverse().join('')) //convert to str array, reverse then convert back
  }

}

console.log(reverseNumber(-123)); //should return -321
