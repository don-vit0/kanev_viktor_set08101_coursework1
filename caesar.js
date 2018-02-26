var cipher = function(plaintext, shift){
	var ciphertext = "";
	for(var i = 0; i < plaintext.length; i++) {
		var cr = plaintext.charCodeAt(i);
		if(cr >= 97 && cr <= 122) {
			ciphertext += String.fromCharCode((cr - 97 + shift) % 26 + 97);
		} else if(cr >= 65 && cr <= 90) {
			ciphertext += String.fromCharCode((cr - 65 + shift) % 26 + 65);
		} else {
			ciphertext += String.fromCharCode(cr);
		}
	}
	return ciphertext;
};

var decipher = function(cipheredtext, shift){
	var text = "";
	for (var i = 0; i < cipheredtext.length; i++) {
		var cr = cipheredtext.charCodeAt(i);
		if(cr >= 97 && cr <= 122){
			text += String.fromCharCode((cr - 97 - shift + 26) % 26 + 97);
		} else if (cr >= 65 && cr <=90) {
			text += String.fromCharCode((cr - 65 - shift + 26) %26 + 65);
		} else {
			text += String.fromCharCode(cr);
		}
	}
	return text;
};