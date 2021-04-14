/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str){
  //...
  const strLetters = new Set(str.toLowerCase().split('')) //Isolate indivitual letters

  return Array.from(strLetters).join('') === str.toLowerCase() //check against original string and return

}

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
  let Newstr = str.split('').reduce( (acc, letter) => {
    if(vowels.includes(letter.toLowerCase())){
      return acc
    }
    else{
      acc.push(letter)
    }
    
    return acc
  }, []).join('')
  

  return Newstr;
}

