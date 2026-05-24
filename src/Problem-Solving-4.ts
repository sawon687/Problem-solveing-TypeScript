// Count how many vowels exist in a string.

//option-1 

// const vowelsExitstr=(str:string)=>{
//     const vowelsstr=['A','E','I','O','U']
//     let Count=0
//         str.split('').forEach(s=>{
//             if(vowelsstr.includes(s.toLocaleUpperCase()))
//             {
//                  Count ++
//             }
//         })
// return Count     
// }

//option2



// const vowelsExitstr=(str:string)=>{
//     const vowelsstr=['A','E','I','O','U']
//     let Count=0
//      const strvalue=   str.split('').reduce((acc,s)=>{
//             if(vowelsstr.includes(s.toLocaleUpperCase()))
//             {
//                  acc ++
//             }
//             return acc
//         },0)
// return strvalue     
// }


//option-3

const vowelsExitstr=(str:string)=>{

     let count=0
   

       for(let i=0;i<str.length;i++)
     {
           if(str[i].toLocaleLowerCase()==='a'||
            str[i].toLocaleLowerCase()==='e'||
            str[i].toLocaleLowerCase()==='i'||
            str[i].toLocaleLowerCase()==='o'||
            str[i].toLocaleLowerCase()==='u')
     {
         count++
     }


     }
      
    
return count   
}




console.log(vowelsExitstr("typescript"))