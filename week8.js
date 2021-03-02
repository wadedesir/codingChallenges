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
