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
