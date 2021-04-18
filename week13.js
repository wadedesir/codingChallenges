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

/*
Yor task is to write function factorial

https://en.wikipedia.org/wiki/Factorial
*/

function factorial(n){
  //your code here
   let ret = 1
   for(; n > 0; n-- ){
     ret = ret * n
   }
   return ret
 }

/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.
*/

 function countDevelopers(list) {
  // your awesome code here :)
  return list.reduce( (acc, object) =>{
    if (object.continent === "Europe" && object.language === "JavaScript"){
      acc += 1
      return acc
    }else{
      return acc
    }
  }, 0)
}