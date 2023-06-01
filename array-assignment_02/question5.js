
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6


var maximumProduct=function(nums){
    nums.sort((a,b)=>a-b)
    let solution1=nums[0]*nums[1]*nums[nums.length-1]
    let solution2=nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]

    return Math.max(solution1,solution2)
}

let nums = [1,2,3]
console.log(maximumProduct(nums))