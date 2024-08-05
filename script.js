function firstChar(text) {
  // your code here
	let newText = text.trim();
	if(newText.length == 0){
		return '';
	}else{
		return newText[0];
	}
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
