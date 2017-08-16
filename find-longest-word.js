function findLongestWord(str) {
  var newArray = str.split(" "); //split the sentence into words that are fed into an array
  var max = 0; //inititalize a variable to keep track of the longest word
  
  for(var i = 0; i < newArray.length; i++) {
    if(newArray[i].length > max){   
    max = newArray[i].length;   //if length is greater than previous value, store new value.
    }
  }
  return max;   return the value of max to the function
}
