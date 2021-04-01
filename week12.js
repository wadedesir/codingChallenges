/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let retArr = []
var twoSum = function(nums, target) {
    nums.forEach( (num, i1) => {
        nums.forEach( (num2, i2) =>{
            if (num + num2 === target && i1 != i2){
                retArr[0] = i2
                retArr[1] = i1
            }
        })
    })

    return retArr
};

console.log(twoSum([3, 2, 4], 6)); //Should return [1, 2]

/*
Four men, a, b, c and d are standing in a line, one behind another.

There's a wall between the first three people (a, b and c) and the last one (d).

The men a, b and c are lined up in order of height, so that:

person a can see the backs of b and c
person b can see the back of c
person c can see just the wall
There are 4 hats, 2 black and 2 white. Each person is given a hat. None of them can see their own hat, but person a can see the hats of b and c, while person b can see the hat of person c. Neither c nor d can see any hats.

Once a person figures out the color of their hat, they shout it.
*/

function guessHatColor(a,b,c,d) {
  //coding and coding..
  return (b == c) ? 1 : 2 //are b and c's hat the same? if so then 1 will know his hat is different
  //^otherwise 2 will be able to guess right
}

console.log(guessHatColor("black","white","black","white")); // should be 2
