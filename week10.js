/*
The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
*/

function partsSums(ls) {
  let len = ls.length - 1;
  let arr = [0];
  for (let i = len; i >= 0; i--){
    arr.push(ls[i] + arr[ len - i]);
  }
  return arr.reverse();
}

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)
*/

function solution(number){
  let arr = []
  for(let i = 0; i < number; i++){
    arr.push(i)
  }

  return arr.filter(x => x % 3 === 0 || x % 5 === 0).reduce((a,b) => a+ b, 0)

}

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

// complete the function
function solution(string) {
 return string.replace(/([a-z])([A-Z])/g, '$1 $2')
}

/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal,[] for Kotlin or "-1 -1 -1".

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
*/

function race(v1, v2, g) {
  if(v1 > v2) return null;
  let second = (g * 3600) /( v2 - v1);
  return [Math.trunc(second / 3600), Math.trunc((second % 3600) / 60), Math.trunc(second % 60)]
}

/*
Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).
*/

function fourSeven(n){
  // Your Code Here
  let four = 4;
  let seven = 7
  let answer = n + 7 - 4 === seven;
  let answer2 = n + 4 - 7 === four
  while(answer === true){
    return seven
  }
  while(answer2 === true){
    return four
  }

    return 0
}
