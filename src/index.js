/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
  const strArray = str.split("")
  for(let ii=0;ii<strArray.length;ii++){
    if(!(ii % 2)) {
      strArray[ii] = strArray[ii].toUpperCase()
    } else {
      strArray[ii] = strArray[ii].toLowerCase()
    }
  }
  const newStr = strArray.join("")
  return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));