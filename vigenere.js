var cipher = function(text, key){
	var ciphertext = "";
	var key = filterKey(document.getElementById("key").value);
	for(var i = 0, j = 0; i < text.length; i++) {
		var cr = text.charCodeAt(i);
		if(cr >= 97 && cr <= 122) { //lowercase letters
			ciphertext += String.fromCharCode((cr - 97 + key[j % key.length] ) % 26 + 97);
			j++; 
		} else if(cr >= 65 && cr <= 90) { //uppercase letters
			ciphertext += String.fromCharCode((cr - 65 + key[j % key.length]) % 26 + 65);
			j++; 
		} else {
			ciphertext += String.fromCharCode(cr);
		}
	}
	return ciphertext;
};

//returns array of numbers in the range of [0,26] and checks if the input is text
function filterKey(key) {
	var result = [];
	for (var i = 0; i < key.length; i++) {
		var c = key.charCodeAt(i);
		if (65 <= c && c <= 90 || 97 <= c && c <= 122)
			result.push((c - 65) % 32);
	}
	return result;
};