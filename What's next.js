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
while(true){
  const n = readline().split(" ");
  let a=parseInt(n[0]);
   let b=parseInt(n[1]);
    let c=parseInt(n[2]);
    //console.log(a,b,c);
       if(a==0&&b==0&&c==0){
			break;
		}
	
		if(b-a==c-b){
			process.stdout.write("AP " + (c+c-b) + "\n");
		}else{
			process.stdout.write("GP " + (c*(c/b)) + "\n");
		}
  }

}