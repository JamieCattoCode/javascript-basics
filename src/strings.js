function sayHello (string) {
  let msg = 'Hello, ' + string + '!';
  return msg;
}

function uppercase (string) {
  return string.toUpperCase();
}

function lowercase (string) {
  return string.toLowerCase();
}

function countCharacters (string) {
  return string.length;
}

function firstCharacter (string) {
  return string.charAt(0);
}

function firstCharacters (string, n) {
  return string.substr(0, n);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
