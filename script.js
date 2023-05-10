// complete the given function

function palindrome(str){
    let string = str.replaceAll(" " , "");
	let s = string;
	let s1 = "";
	for(let x=s.length-1;x>=0;x--){
		s1+=s[x];
	}
	if(s1 === string){
		console.log(true);
	}
	else{
		console.log(false);
	}
}

module.exports = palindrome
