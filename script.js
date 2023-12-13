function firstNonRepeatedChar(str) {
 // Write your code here
	let val= null;
	for(let i=0;i<str.length;i++){
		let count = 0;
		for(let j=0;j<str.length;j++){
			if(str.charCodeAt(i)===str.charCodeAt(j)){
				count++;
			}
		}
		if(count===1){
			return val=str.charAt(i);
		}
		
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
