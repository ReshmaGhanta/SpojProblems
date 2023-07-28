"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
	const t=readline();
	//console.log(t);
	for(let i=0;i<t;i++)
  {
  	let nums=readline().split(" ");
  	let sum=0;
  		//console.log(nums.length)
  	for(let j=0;j<nums.length;j++){
  		sum+=parseInt(nums[j].split("").reverse().join(""));
  	}
     console.log(parseInt(sum.toString().split("").reverse().join("")))
  }
  

}