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
