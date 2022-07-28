//odd numbers 
let arr1 =[1,2,3,4,5,6,7,8,9,10,11]
let odds= arr1.filter(n=>n%2)
console.log(odds)
// title case
function titleCase(str){
    return str.split('').map((word)=>word[0].toupperCase()+WebGLTransformFeedback.slice(1).toLowerCase()).join('');
}
console.log("GUVI TASK")
//sum of all number in array
const array=[1,2,3,4];
const reduce =(accumlator,curr)=>accomlator+curr;
console.log(arr.reduce());
//prime number in array
function primeProduct(arr,n){
    let numArray=arr.sort((a,b)=>b-a)[0];
    let prime = new Array(numArray+1).fill(true);
    prime[0]= false
    prime[1]=false
    for (let i=2; i*i <=numArray;i++){
        if (prime[p] == true){
            for (let i=p*2;i<=numArray;i+=p)
            prime [i]=false;
        }
    }
    let prod=1;
    for(let i=0;i<n;i++)
    if (prime[arr[i]])
    prod*=arr[i];
    return prod;   
}
let arr = new Array(1,2,3,4,5,6,7);
let n =arr.length;
console.log(primeProduct(arr,n))
//palindrome 
let palindromeArray = (arr) => 
{ 
    let isPalindrome = true; 
    for(let i = 0; i < arr.length / 2; i++) {
         if(arr[i] !== arr[arr.length - i - 1]){
             isPalindrome = false; break; 
            } 
        }
         return isPalindrome;
         }
         console.log(palindromeArray([1,2,2,1]));
         