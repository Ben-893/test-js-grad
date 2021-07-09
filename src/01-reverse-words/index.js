/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function reverseWordsInSentence(input) {
  let words = [];
  let output = '';

  words = input.match(/\S+/g);
  output += words.map(word => word.split('').reverse().join(''));

  return output.split(',').join(' ');
};
