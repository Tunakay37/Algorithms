function largestOfFour(arr) {
  var arrNew = arr.map(function(x){
  var max = 0;
  for (var i = 0; i < x.length; i++){
    if (x[i] > max){
    max = x[i];
    }
  }
  return max;
  });
return arrNew;
}
