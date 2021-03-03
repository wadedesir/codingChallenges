/* To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. */

/* left blank for unlimited creativity :) */

function multiplyAll(arr){
  let newArr = arr
  let newFunc

  return newFunc = (multiplier) => {
    let finalArr = []
    newArr.forEach( (index) => {
      finalArr.push(index*multiplier)
    })

    return finalArr
  }
}

//tests
multiplyAll([1, 2, 3])(2))

/* Hidden within the provided sequence of sequences are numbers that represent the
letters of the words for some of Chuck's favourite things!
Your job is to translate them, and return the words so that Chuck can get back to the
business of punching and kicking things. */

function fistBeard(arr) {
 //Try and shave him... I dare you!
  let s = ''
  arr.forEach( nums => {
    nums.forEach ( letter => {
      s = s + String.fromCharCode(letter)
    })
  })

  return s
}

//tests
fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]) // 'Nunchuks'
fistBeard([[70, 97, 99], [101, 45, 75, 105, 99, 107]]) // 'Face-Kick'


/*
Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output

the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
*/
function streetFighterSelection(fighters, position, moves){
  let players = []
  moves.forEach( (direction) => {
      switch(direction){
        case 'up':
        position[0] = 0
        break

        case 'down':
        position[0] = 1
        break

        case 'left':
        position[1] -= 1

        if(position[1] <= -1){position[1] = (fighters[1].length - 1)}
        break

        case 'right':
        if(position[1] === (fighters[1].length - 1)){position[1] = -1}
        position[1] += 1
        if(position[1] > fighters[1].length){position[1] = 0}
        break
      }
    players.push(fighters[position[0]][position[1]])
  } )

  return players
}

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ["right","right","right","right","right","down","left","down","down","up","down","up","left","right","right","up"]

console.log(streetFighterSelection(fighters, [0,0], moves));

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

function solution(roman){
  // complete the solution by transforming the
  // string roman numeral into an integer
  let values = { I:1, V:5, X:10, L:50,C:100,D:500,M:1000} //object containing roman numeral values
  let result = 0
  let preVal = 0
  let romanArr = roman.split("")
  romanArr.forEach( letter => {
    if (values[letter] > preVal){ //checks if the value being added includes subtraction
      result -= preVal
      result += (values[letter] - preVal)
    }
    else{
      result += values[letter]
    }
    preVal = values[letter] //stores current value for next time in order to check for subtraction
  })
  return result
}

//tests
solution('XXI') //should be: 21)
solution('I') //should be: 1)
solution('IV') //should be: 4)
solution('MMVIII') //should be: 2008)
solution('MDCLXVI') //should be: 1666)
 //fixing commit
