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
