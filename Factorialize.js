function factorialize(num) {
  var n = 1;
   for (var i = 1; i <= num; i++) { //for variable i starting with a value of 1, as long as i <= number we want to find it's factorial, increment by 1
      n = n * i ; // multiplies n=1 by i. First loop, 1 * 1; second, 1 * 2 and so on until i has been incremented to i <= num.
   }
  return n;
}

factorialize(5);
