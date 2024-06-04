/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/


// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

function panic(str) {
  const words = str.split(" ")
  const nWords = words.map((word) => word.toUpperCase())
  let finalStr = ""
  nWords.forEach(word => {
    finalStr += word + " " + "😱" + " "
  });
  const strLength = finalStr.length
  const lastStr = finalStr.slice(0, finalStr.length - 4)
  return lastStr+"!"
}