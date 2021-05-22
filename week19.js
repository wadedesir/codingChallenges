/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]
*/

function inArray(array1,array2){
    //...
    return array1.reduce( (acc, a1) =>{
      array2.forEach( str =>{
        if(str.indexOf(a1) !== -1){
          acc.includes(a1) ? false : acc.push(a1)
          return acc
        }else{
          return acc
        }
      })
      return acc.sort()
    }, [])
  }

/*
betaKata is an object that contains some datas of a kata, like this:

{name:"Training JS #1",issue:0,vote:[4,3,2,1]},
rank:[8,7,6],example:true,random:true}
Your task is return a string that is the description of the state of kata. In accordance with the following rules:

Rules:
If there are issues reported(value of issue != 0), should return kata status as:
"Beta Status:Waiting for issues to be resolved"
If the number of votes is less than 5, should return kata status as:
"Beta Status:Testing & feedback needed"
If the number of ranks is less than 8, should return kata status as:
"Beta Status:Ranking feedback needed"
If Kata does not have the example testcase or/and the random testcase(one of them value=false), should return kata status as:
"Beta Status:Example testcases needed"    //example=false;random=true
"Beta Status:Random testcases needed"     //random=false;example=true
"Beta Status:Example and random testcases needed"  //example=false;rando
*/
function kataStatus(betaKata){
    //coding here..
    if (betaKata.issue !== 0){
        return "Beta Status:Waiting for issues to be resolved"
    }
    else if(betaKata.vote.length < 5){
        return "Beta Status:Testing & feedback needed"
    }
    else if(betaKata.rank.length < 8){
        return "Beta Status:Ranking feedback needed" 
    }
    else if (betaKata.example == false && betaKata.random ==false){
        return "Beta Status:Example and random testcases needed"
    }
    else if(betaKata.example== false || betaKata.random==false){
        return betaKata.example ? "Beta Status:Random testcases needed" : "Beta Status:Example testcases needed"
    }
    else{
        let scores = betaKata.vote.reduce( (a, b) => a + b, 0)
        let rank = betaKata.rank.reduce( (a, b) => a + b, 0) / betaKata.rank.length
        
        return `Kata approved. vote scores:${scores}, rank:${Math.round(rank)}kyu`
    }
}

/*
Santa is handing out gifts in the kindergarten. Many toddlers are around there and everyone should have the opportunity to have a seat on Santa's lap. But there's Peter, a 5 year old boy, who is a bit naughty. He tries to get two gifts. After he got the first one, he lines up again in the queue of children.

But fortunately Santa is not alone. His elves keep a list with the names of the children, which already were on Santa's lap. We know, that each child name is unique. If a child tries to get a second gift, the elves will tell Santa.

OK, let's help Santa and his elves with a simple function handOutGift() (hand_out_gift in Ruby, HandOutGift in C# ) which takes the name of the next child. If this child already got a gift, it must throw an error in order to remind Santa.

Example:

handOutGift("Peter");
handOutGift("Alison");
handOutGift("John");
handOutGift("Maria");
handOutGift("Peter"); // <-- must throw an error
*/

let gifted = []
function handOutGift(name) {
  // TODO
  const x = Error('I was created using a function call!')
  return gifted.includes(name) ? x() : gifted.push(name)
}
  
/*
Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.
*/
function calculate_total(subtotal, tax, tip) {
    // Your code here
      let calcTax = (subtotal * tax) / 100
      let calcTip = (subtotal * tip) / 100
    
      return Math.round(100* (subtotal + calcTip + calcTax))/100
    }

/*
This function should return an object, but it's not doing what's intended. What's wrong?
*/
function mystery() {
    var results = {sanity: 'Hello'};
    return results;
}