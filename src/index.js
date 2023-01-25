module.exports = function toReadable (number) {
  let numberToWords = require('number-to-words');
  let answer = numberToWords.toWords(number);
  let re = /-/g;
  let str = answer;
  let newstr = str.replace(re, ' ');
  console.log(newstr);
  return newstr;
};


// function task(number) {
//   let numberToWords = require('number-to-words');
//   let answer = numberToWords.toWords(number);
//   let re = /-/g;
//   let str = answer;
//   let newstr = str.replace(re, ' ');
//   console.log(newstr);
// };

// task(567);


