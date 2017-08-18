function titleCase(str) {
  var array = str.split(" ");   //split the sentence into an array
	var newArray = [];            //new array to hold created words
	var word;                     //final variable to hold the title-cased string
	
	for(i = 0; i < array.length; i++) {
		var lower = array[i].toLowerCase().slice(1);            //apply lower case and extract the letters from index[1] to end
		var upper = array[i].toUpperCase().slice(0, 1);         //apply upper case and extract the first letter
		var element = upper + lower;        
		newArray.push(element); 	                              //push each word into an array and updates the array after each loop
	}  
	
	word = newArray.join(" ");                                //join all the elements of the array
	return word;
}
