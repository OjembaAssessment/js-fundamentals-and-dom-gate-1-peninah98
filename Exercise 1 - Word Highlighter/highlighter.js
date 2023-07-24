const text = document.getElementById('myParagraph')
const allText= text.firstChild.nodeValue

let mostOccuringWord = 0
let result = []

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
    



if(count > mostOccuringWord){
   mostOccuringWord = count
    result.push(word)
   
    
}

if(count === mostOccuringWord){
    console.log('hahahahahahah    ',word)
   
  
    result.push(word)
}




})


result.forEach((word) => {
    for (let i = 0; i < splittedArray.length; i++) {
      if (splittedArray[i] === word) {
        splittedArray[i] = `<span style="background-color: yellow;">${word}</span>`;
      }
    //   if(splittedArray[i] === word &&splittedArray[i].charAt(0) == )
    }
  });
  
  text.innerHTML = splittedArray.join(' ');

