function toCase(text) {
	text = text.trim();
	if(!text){
		return;
	}
	let newStr = text + '-' + text.toUpperCase();
	return newStr;
}

// DO not change the code below

// const text = prompt("Enter text:");
alert(toCase(text));
