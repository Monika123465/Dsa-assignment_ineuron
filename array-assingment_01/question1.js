
{/* 💡  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][ */}



var twoSum=function(nums,target){
    let bag=[]
    for(let i=0;i<=nums.length;i++){
        for(let k=i;k<nums.length;k++){
          if(nums[i]+nums[k]==target){
            bag=[k,i]
          }
        }
    }
    return bag
}

let nums=[2,7,11,15]
let target=9
console.log(twoSum(nums,target))