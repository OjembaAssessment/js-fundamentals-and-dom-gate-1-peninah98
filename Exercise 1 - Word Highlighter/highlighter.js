const text = document.getElementById('myParagraph')
const allText= text.firstChild.nodeValue

let splitted = allText.split(" ")
let splittedArray = Array.from(splitted)
const uniqueWords = new Set(splittedArray);
const sorted = splittedArray.sort()
console.log(sorted)

uniqueWords.forEach((word)=>{
    const startingPosition = sorted.indexOf(word)
    const lastPosition = sorted.lastIndexOf(word);
    const count = lastPosition - startingPosition + 1;
    console.log(word, ':', count);
})

