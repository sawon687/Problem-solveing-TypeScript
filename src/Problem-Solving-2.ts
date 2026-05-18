// Write a function to check whether a string is a palindrome or not.

const palindrome=(str:string)=>{
    const  reverseStr=str.split('').reverse().join('')
    return  reverseStr === str
}

console.log(palindrome('sawon'))