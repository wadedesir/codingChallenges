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
