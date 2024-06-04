/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function betterIsAnagram(str1, str2){
  const arr3 = str1.split("")
  const arr4 = str2.split("")
  arr3.sort()
  arr4.sort()
  console.log('arr3: ', arr3)
  if (arr3.join("") === arr4.join("")) {
      return true
  }
  return false
}



function isAnagram(str1, str2){
  const arr1 = str1.split("")
  const arr2 = str2.split("")
  let matches = true
  arr1.forEach(letter => {
    if(arr2.find((letter2) => letter === letter2)) {
      console.log('letter: ', letter)
    } else {
      matches = false
    }
    
  });

  console.log('arr1:', arr1)
  return matches

}

// console.log(isAnagram("allergy", "gallery"));
// console.log(isAnagram("treasure", "measure"));
console.log(betterIsAnagram("alergy", "gallery"));
console.log(betterIsAnagram("treasure", "measure"));

