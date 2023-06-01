
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

var isMonotonic=function(nums){
    let inc=true
    let dec=true
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]>nums[i+1])
        inc=false
        if(nums[i]<nums[i+1])
        dec=false
    }
    return inc||dec
}
let nums = [1,2,2,3]
console.log(isMonotonic(nums))