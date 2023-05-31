
{/* 💡 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true */}


var containsDuplicate=function(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[j]==nums[i]){
                return true
            }
        }
    }
    return false
}

const nums=[1,2,3,1]
 console.log(containsDuplicate(nums))