function controlLenght() {}

function isString() {}

function isNumber() {}

function isValidUuid(id) {
    const validUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    // console.log(regexExp.test(id));
    return validUuid.test(id);
}

// isValidUuid('9c3caead-4f6d-4625-adf4-d9429ade87f2')




function isWord(word) {
	if( (typeof word) !== 'string' ) {
		return false
	} else if( word === '' ) {
		return false
	} else if( !stringHasOnlyLetters(word) ) {
		return false
	}
	return true
}

function stringHasOnlyLetters(string) {
	for( let i=0; i<string.length; i++ ) {
		if( !isLetter(string[i]) )
			return false;
	}
	return true
}
function isLetter(x) {
	const letters = 'abcdefghijklmnopqrstuvwxyzåäö'
	return letters.includes(x.toLowerCase())
}

module.exports = { controlLenght, isWord, isNumber, isValidUuid };

// module.exports = { isWord }
