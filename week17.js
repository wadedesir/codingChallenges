/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/

function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  /*
  Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
  */

  function whoseMove(lastPlayer, win) {
    //coding and coding..
    if(lastPlayer === 'white'){
      return win === true ? 'white' : 'black'
    }else{
      return win === true ? 'black' : 'white'
    }
    
  }
  /*
  Complete the solution so that it reverses all of the words within the string passed in.
  */

  function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
    
  }