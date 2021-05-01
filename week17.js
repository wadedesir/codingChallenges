/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/

function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

/*
Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.
*/

function whoseMove(lastPlayer, win) {
    //coding and coding..
    if (lastPlayer === 'white') {
        return win === true ? 'white' : 'black'
    } else {
        return win === true ? 'black' : 'white'
    }

}
/*
Complete the solution so that it reverses all of the words within the string passed in.
*/

function reverseWords(str) {
    return str.split(' ').reverse().join(' '); // reverse those words

}

/*
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be strings, and normal letters.

For Haskell, body has the type of String and tail has the type of Char. For Go, body has type string and tail has type rune.
*/
function correctTail(body, tail) {

    let sub = body[body.length - 1]

    if (sub == tail) {
        ;
        return true
    } else {
        return false
    }
}

/*
Expected Behaviour
Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.
*/
function getStatus(isBusy) {
    var msg = isBusy ? "busy" : "available"

    return {
        status: msg
    }
}