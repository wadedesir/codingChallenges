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

