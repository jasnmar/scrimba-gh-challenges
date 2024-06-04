/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
  const arr = str.split("")
  for (ii=0; ii < arr.length; ii++) {
    // console.log('arr[ii]: ', arr[ii])
    // console.log('arr[arr.length-ii]: ', arr[arr.length-1-ii])
    if(!(arr[ii]===arr[arr.length-1-ii])) {
      return false
    }
  }
  return true
    
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
