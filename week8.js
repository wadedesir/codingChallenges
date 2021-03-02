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
