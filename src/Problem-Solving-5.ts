// Remove duplicate values from an array and return a new array.

// option :1
//    const numberArr:number[]=[1, 2, 2, 3, 4, 4]
// const newArry=[...new Set(numberArr)]
// console.log(newArry)


// option:2
const numberArr: number[] = [1, 2, 2, 3, 4, 4];

// const newArray: number[] = [];

// for (let i = 0; i < numberArr.length; i++) {
//   if (!newArray.includes(numberArr[i])) {
//     newArray.push(numberArr[i]);
//   }
// }

// console.log(newArray);



//option


const newArry=numberArr.reduce<number[]>((acc,arr)=>{
   if(!acc.includes(arr))
   {
       acc.push(arr)
   }
   return acc
},[])


console.log(newArry)




