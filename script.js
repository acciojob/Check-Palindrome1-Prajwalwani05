// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let ispalin = true;
	let i=0;
	let j=str.length-1;
	while(i<=j && ispalin){
		if(str[i] !== str[j]){
			ispalin = false;
		}
		i++;
		j--;
	}
	console.log(ispalin ? true : false);
}

module.exports = palindrome
