// Given a string return the middle character if length is even or return two chars when length is odd

function getMiddle(s)
{
  let size = s.length;
  let position = parseInt(size/2);
  

  if (size%2 === 1){
    return s[position];
  }
  return s[position-1] + s[position] 
  
}

const word = "title";
console.log(getMiddle(word));
