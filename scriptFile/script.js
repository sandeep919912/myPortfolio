// Given an integer x, return true if x is a palindrome, and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


// var isPalindrome = function(x) {
//   let X = x.toString();
//   let res1 = "";
//   let res2 = "";
//   for(let i = 0 ; i <Math.floor(X.length/2);i++){
//     res1  += X[i]
//   }

//   for(let i = Math.ceil(X.length/2); i<X.length; i++){
//     res2 += X[i]
//   }
//   // console.log(res1);
//   // console.log(res2);
  

//   let res3 = res2.split("").reverse().join("");
//   console.log(res1);
//   console.log(res3);


//   if(res1 === res3){
//     return true
//   }
//   else{
//     return false
//   }
  
// };

// let finalRes = isPalindrome(1000021);
// console.log(finalRes)


// let words = "sandeep"

// let words2 = words.split("").reverse().join("")

// console.log(words);
// console.log(words2);

let sideBar = document.querySelector(".side-bar");
let open = document.querySelector(".openMenu")

function closeMenu(){
  sideBar.style.display = "none"
  open.style.display = "block"
}

function openMenu(){
  sideBar.style.display = "block"
  open.style.display = "none"
}