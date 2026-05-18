// Given an array of numbers, return the largest number.
const maxNumber=(array:number[]):number=>{
     return Math.max(...array)
}

const array=[1, 5, 9, 2]

 console.log(maxNumber(array))