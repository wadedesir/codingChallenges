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
