var array0 = [1,2,3,4,5];
var array1 = [1,1,2,2,1];
var array2 = [5,5,5,5,5];


// Reverse print an array
function printReverse(array){
	for(i=array.length-1; i>=0; i--){
		console.log(array[i]);
	}
}

// Checks if every item is equal in an array and returns a boolean expression
function isUniform(array){
	var firstItem = array[0];
	for (i=1; i<array.length; i++){
			if (firstItem === array[i]){
			}else {
				return false
			}
		}
		return true;
	}

// Returns the total sum of each element in an array
function sumArray(array){
	var sum = 0;
	array.forEach(function(element){
		sum += el
	})
	return sum;
}

// Returns the max value of an array element
function max(array){
	var maxNum = array[0];
	array.forEach(function(element, index){
		if(element > maxNum){
			maxNum = element;
		} else {
			maxNum = maxNum;
		}
	})
	return maxNum;
}