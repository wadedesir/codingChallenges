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
