// function info(roll, name, college, branch){
//   return `Roll -> ${roll}
//   Name -> ${name}
//   College -> ${college}
//   BRanch -> ${branch}`;
// }

// console.log(info(59, "Abhyuday", "ABES Engineering College", "CSE"));
// console.log(info(72, "Bisht", "ABES Engineering College", "CSE"));
// console.log(info(51, "Maurya", "ABES Engineering College", "CSE"));

// function generateNumber(){
//   return Math.floor(Math.random()*1000);
// }

// const randomNumber = generateNumber();

// function findEvenNumber(){
//   if(randomNumber % 2 == 0){
//     console.log("Even");
//   }
//   else{
//     console.log("Odd")
//   }
// }

// findEvenNumber();
// console.log(randomNumber);

// const sum = (a, b) =>{
//   return a + b
// }
// const result = sum(20, 50);

// // IIFE
// (()=>{console.log("Hey..using IIFE")})();

// Callback Function
function sum(a, b){
  return a+b;
}

function sumWithMsg(clbk, msg){
  const result = clbk(20, 40);
  return msg + " " + result;
}

console.log(sumWithMsg(sum, "Hi...Sum"));
