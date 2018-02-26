function atbash(text){

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";

var cipheredtext = "";
text = text.toLowerCase().replace(/[^a-z]/,"");
for(i = 0; i<text.length; i++){
	var cipheredLetter = text.charAt(i);
	var letterIndex = alphabet.indexOf(cipheredLetter);
	var decipheredLetter = reversedAlphabet.charAt(letterIndex);
	cipheredtext = cipheredtext + decipheredLetter;
}
return cipheredtext;
};

function atbashDec(text){
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";

var decipheredtext = "";
text = text.toLowerCase().replace(/[^a-z]/,"");

for(i =0; i<text.length; i++){
	var cipheredLetter = text.charAt(i);
	var letterIndex = reversedAlphabet.indexOf(cipheredLetter);
	var decipheredLetter = alphabet.charAt(letterIndex);
	decipheredtext = decipheredtext + decipheredLetter;
}
return decipheredtext;
};
