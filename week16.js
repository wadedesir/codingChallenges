/*
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.

*/
function checkAlive(health) {
    if (health < 1) {
        return false
    } else {
        return true
    }
}

/*
  Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.
*/

function howManyDalmatians(number) {
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[3] : dogs[2]

    return respond
}

////////////

function getMax1() {

    var max = {
        name: 'Max Headroom'
    }
    return max;
}

function getMax2() {
    return {
        name: 'Max Headroom'
    }
}

/*
The sort function is supposed to set the global variable to 1 when it has been executed at least once but it does not.

Can you figure out why?

You should not modify the behavior of the sort function.
*/

var sorted = 0;

function sort(array) {
    // Mark function as called through the global variable
    sorted = 1;

    // Transform the input data
    for (var i = 0; i < array.length; i++) {
        array[i] = 3 * array[i] + 2;
    }

    // Remove middle value
    var n = array.length,
        mid = Math.floor(n / 2);
    array = array.slice(0, mid).concat(array.slice(mid + 1));

    // Sort the array
    let sortedArr = false;
    for (var i = array.length - 1; i >= 0 && !sortedArr; i--) {
        sortedArr = true;
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                sortedArr = false;
            }
        }
    }

    return array;
}

/*
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/

class Dinglemouse {

    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName
    }

    getFullName() {
        let retval = this.firstName + " " + this.lastName
        return retval.trim()
    }

}

/*
  The code is a recursive attempt in calculating the result of a factorial function.
I.e. the result of 3! (Factorial of 3) is 3x2x1 = 6.
In case of 0! the result is 1 and in case of a negative factorial the result should be 0.

The goal is to find the bugs in the sourcecode and fix them (play a little pest control).
*/

function facRecursion(value) {
    if (value < 0) {
        return 0;
    } else if (value == 1 || value == 0) {
        return 1;
    }
    return facRecursion(value - 1) * value;
}