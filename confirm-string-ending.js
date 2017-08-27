function confirmEnding(str, target) {
  var targetLength = target.length; // "Never give up and good luck will find you."
  var strCheck = str.substr(-targetLength);
  
  if(strCheck === target) {
    return true;
  }// -- Falcor
  else {
    return false;
  }
}
