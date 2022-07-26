var std= {"fstudent":[{
    "fname":"prithiv",
    "sname":"raj",
    "age":22}]
}
// using for loop
//let text=" "
//for(let i=0; i< std.length;i++)
//{ 
 //   text+=std[i]+"<b/>"
//}
//console.log(std.fstudent)
// using forIn loop=> the properties of an object
//let text=" "
//for(let i in std )
//{ 
  //  text+=std[i]+"<b/>"
//}
//console.log(text)
// using forof loop=> the value of an iterable object 
//let text=" "
//for(let i of std )
//{ 
  //   text+=i +"<b/>"
//}
//console.log(text)
//using forEach => this is call function for each element in an array
std.forEach (myFunction);
let text=" "
function myFunctoin(item,index){
    text+=index+"$"+item+"<b/>"
}
console.log(text)