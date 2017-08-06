function palindrome(str) {
  
  var term1 = str.replace(/[\W_]/g, "").toUpperCase();
  var term2 = term1.split("").reverse().join("");
  
  return term1 === term2;
}
