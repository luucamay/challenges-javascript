// Description: https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

function checkPalindrome(inputString) {
  let start = 0;
  let end = inputString.length - 1;
  while (start < end) {
    if (inputString[start] !== inputString[end]) return false;
    start += 1;
    end -= 1;
  }
  return true;
}
