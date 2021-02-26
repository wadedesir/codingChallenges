// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0; //initial count value
  let vowels = ['a', 'e', 'i', 'o', 'u'] //Array of vowels for checkinig

  for (let i = 0; i < str.length; i++){ //Iterate Through String
    if (vowels.includes(str[i])) {
      vowelsCount += 1 //Update count if current string index is a vowel
    }
  }

  return vowelsCount; //return final count
}

console.log(getCount("abracadabra")) //test



// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  let min = arr[0] //sets to initial value of array. Setting to zero allows errors due to floats
  let max = (arr[0] - 1) //Setting max as well incase of negative numbers. -1 so it is reassigned

  arr.forEach( val => { //Go through each value of the array
    if (val < min){ //Determine if the current value is less than the minimum and sets if so
      min = val
    }
    else if (val > max){ //Determine if the current value is greater than the maximum and sets if so
      max = val
    }
  })
  return [min,max]; // returns min and max
}

r = Math.random();
console.log(minMax([1,r,r * 15,4,5]));
console.log(minMax([1,5]));
console.log(minMax([5, 2334454]));
console.log([r, r * 5, r, r * 10]);



Summation

var summation = function (num) {
  let answer=0
 for (let i=0;i<=num;i++ ){
   answer=answer +i
   }
  return answer
}

const quarterOf = (month) => {
  if (month>=1 && month<=3){
  return 1
  }else if (month>=4 && month<=6){
  return 2
  }else if(month>=7&&month<=9){
  return 3
  }else{
  return 4
  }
}

function warnTheSheep(queue) {
if (queue[queue.length -1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
    } else {
     let index = queue.findIndex( (x) => x == 'wolf' );
     return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
  }
