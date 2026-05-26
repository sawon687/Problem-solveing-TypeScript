// 6. Two Sum
// Given an array of integers and a target number, return the indices of two numbers whose sum equals the target.

// Constraints:

// Each input has exactly one solution.
// You cannot use the same element twice.
// Example:

// Input:
// nums = [2, 7, 11, 15]
// target = 9

// Output:
// [0, 1]

// two sum function
const twoSum=(array:number[],target:number)=>{
   
    for(let i=0;i<array.length; i++)
    {
       for(let j=i+1 ; j<array.length ; j++)
       {
            if(array[i]+array[j]===target)
            {
               
              return  [i,j]
            }
       }
    }



}

console.log(twoSum( [2, 7, 11, 15],9))