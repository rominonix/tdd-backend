function controlLenght() {}

function isValidNumber(number) {
  if (typeof number !== "number") {
    return false;
  } else if(typeof number === 'string'){
    return false
  } 
  else if(Math.floor(number) !== number){
      return false
  } 
  else if(number <= 0){
      return false
  }
  return true;
}

function isValidUuid(id) {
  const validUuid =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return validUuid.test(id);
}

function isWord(word) {
  if (typeof word !== "string") {
    return false;
  } else if (word === "") {
    return false;
  } else if (!stringHasOnlyLetters(word)) {
    return false;
  }
  return true;
}

function stringHasOnlyLetters(string) {
  for (let i = 0; i < string.length; i++) {
    if (!isLetter(string[i])) return false;
  }
  return true;
}
function isLetter(x) {
  const letters = "abcdefghijklmnopqrstuvwxyzåäö";
  return letters.includes(x.toLowerCase());
}

module.exports = { controlLenght, isWord, isValidNumber, isValidUuid };

