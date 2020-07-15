function findShort(words){
  const arrayWords = words.split(' ');

  let minSize =  Number.MAX_VALUE;
  
  arrayWords.forEach(word => {
    if (word.length < minSize)
     minSize = word.length;
  })
  
  return minSize;
}

findShort('example off the words');
