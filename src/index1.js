module.exports = function getZerosCount(number, base) {
let x =base;
let	arr =[];
let obj ={};
if(x > 0 && x != 1){
for(let i = 2; i <= x; i++){
	let j=0;
      while(x % i == 0 && x > 1){
       	j++;
		obj[i] = j;
        x = x / i;
      }
	  }
for(let k in obj){
	let z = 0;
	let num = number;
	 while(num){
	 num = Math.floor(num/k);
     z+=num;
  }
  z = Math.floor(z /obj[k]);
  arr.push(z);
 }
 let rez = Math.trunc(Math.min.apply(Math, arr));
   return rez;
}};