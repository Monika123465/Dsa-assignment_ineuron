
// We define a harmonious array as an array where the difference between its maximum value
// and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence
// among all its possible subsequences.

// A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5

// Explanation: The longest harmonious subsequence is [3,2,2,2,3].


var findLHS=function(nums){
    nums.sort((a,b)=>a-b)
    let res=0
    let start=0
    let newstart=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]-nums[start]>1)
        start=newstart
        if(nums[i]!=nums[i-1])
        newstart=i
        if(nums[i]-nums[start]==1)
        res=Math.max(res,i-start+1)
    }
    return res
}

let nums = [1,3,2,2,5,2,3,7]
console.log(findLHS(nums))