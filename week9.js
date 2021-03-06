// Return the output array, and ignore all non-op characters
function parse( data )
{
  let retNum = 0
  let retArr = []
  data.split('').forEach( letter => { //iterates through each letter
    (letter === 'i') ? retNum += 1 : (letter === 'd') ? retNum -= 1 : (letter === 's') ? retNum *= retNum : (letter === 'o') ? retArr.push(retNum) : console.log(letter)
  }) // ^ checks for each possible letter and does computation otherwise logs letter
  return retArr
}

console.log(parse("iiisdoso")) //test should be: [ 8, 64 ]

/*
Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
*/
function goodVsEvil(good, evil){
  good = good.split(' ')
  evil = evil.split(' ')

  let goodVals = {1 : 1, 2: 2, 3 : 3, 4 : 3, 5 : 4, 6 : 10}
  let evilVals = {1 : 1, 2: 2, 3 : 2, 4 : 2, 5 : 3, 6 : 5, 7 : 10}
  let goodScore = 0
  let evilScore = 0

  good.forEach( (raceCount, i) =>{
    i+=1
    for (let c = 0; c < raceCount; c++){
      goodScore += goodVals[i]
    }

  })
  evil.forEach( (raceCount, i) =>{
    i+=1 //offset
    for (let c = 0; c < raceCount; c++){ //How many warriors?
      evilScore += evilVals[i] //Adds warrior value
    }
  })

  return (goodScore > evilScore) ? "Battle Result: Good triumphs over Evil" : (goodScore < evilScore) ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field"
  //^ returns the winner based on the score of each sire
}

  console.log(goodVsEvil('1 1 1 1 2 2', '1 1 1 1 1 1 1')) //good should win

/*
Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/
  function greet (name, owner) {
    // Add code here
    return (name === owner) ? 'Hello boss' : 'Hello guest'
  }

console.log(greet('wade', 'wade'))

/*
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

Example
summy("1 2 3")  ==> 6
Good luck!
*/

function summy(stringOfInts){
    return stringOfInts.split(' ').reduce((acc, item) => Number(item) + acc, 0) //... sum of ints found in string
}

console.log(summy('1, 3, 5')); //should be 9

/*
Task
Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .
*/
function consecutiveDucks(num) {
  // your code here
  while(num > 2){
    if(num % 2 !== 0){
    return true;
  }
   num = num / 2
  }
    return false
}

console.log(consecutiveDucks(69)) //should be true


/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) {
  //Code here
  numbers.sort(function(a,b) { return a - b })
  return (numbers[0] + numbers[1]);

}
