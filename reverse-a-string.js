function reverseString(str) {
  var split = str.split(""); //first splits the string to give an array
  var reverse = split.reverse(); //then, reverse the elements of the array
  return reverse.join(""); //finally, join the elements of the array
}

//to test our function
reverseString("hello"); //outputs 'olleh'
