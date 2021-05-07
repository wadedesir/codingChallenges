/*
Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

For example:

peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
peak([1,12,3,3,6,3,1]) = 2
peak([10,20,30,40]) = -1
*/

function peak(arr) {
    //..
    return arr.reduce((acc, num, i, srcArr) => {
        let leftVals = srcArr.slice(0, i).reduce((a, b) => a + b, 0)
        let rightVals = srcArr.slice(i + 1, srcArr.length).reduce((a, b) => a + b, 0)

        if (leftVals === rightVals) {
            return acc === -1 ? i : acc
        } else {
            return acc
        }
    }, -1)
}

/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
function twoSort(s) {
    s.sort()
    return s[0].split('').join('***');
}

/*
Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)
*/
function sc(floor) {
    let retStr = ''
    if (floor <= 1) {
        return retStr
    } else if (floor < 7) {
        retStr += 'Aa~ '.repeat(floor - 1) + 'Pa! Aa!'
    } else if (floor >= 7) {
        retStr += 'Aa~ '.repeat(floor - 1) + 'Pa!'
    }

    return retStr
}
/*
Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]
*/

function sc(apple) {
    return apple.reduce((acc, letterArr, i) => {
        let letterIndex = letterArr.indexOf('B')
        letterIndex === -1 ? false : acc = [i, letterIndex]
        return acc
    }, -1)

}

/*
Task
John reading a book, When he met a word that he had never read, he will read the word spelling, each letter(not for punctuation,number, only letter) takes 1 second; If he have read the word, he will read the word, each word takes 1 second.

Give you a parameter words(Each word is separated by space)

Return a number that how many seconds John can finish reading.
*/

function sc(words){
    words = words.replace(/[^\w\s]|_/g, "")
    words = words.replace(/\s+/g, " ")
    let wordsArr = words.toLowerCase().split(' ')
    let wordsSetArr = [...new Set(wordsArr)]
    let singleLetters = wordsSetArr.join('').split('')
    let arrDiff = wordsArr.length - wordsSetArr.length
  //   console.log(arrDiff)
    return arrDiff + singleLetters.reduce( (acc, letter) => acc + 1, 0)
  }