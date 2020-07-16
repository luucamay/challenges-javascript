// Description: https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

function centuryFromYear(year) {
  if (year % 100 == 0) {
    return Math.trunc(year / 100);
  } else {
    return Math.trunc(year / 100) + 1;
  }
}
