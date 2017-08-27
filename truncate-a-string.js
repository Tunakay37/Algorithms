function truncateString(str, num) {
  
  //if str is longer than the given maximum string length, 'num'
  if(str.length > num && num > 3) {
    var str1 = str.slice(0, num-3);
    return str1 + '...';
  }
  //if the given maximum string length 'num' is less than or equal to 3
  else if(num <= 3) {
    var str2 = str.slice(0, num);
    return str2 + '...';
  }
  //otherwise, just return string
  else {
    return str;
  }
}
