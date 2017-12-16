var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1){
	var answer = prompt("Are we there yet?");
}

alert("We made it!");

for (var i = 5; i <=50; i++) {
	if(i%5 === 0 && i%3 === 0){
	console.log(i);
	}
}

function isEven(num){
	if(num%2 === 0){
		return true;
	}
	else{
		return false;
	}
}

function factor(num){
	if(num === 0){
	return 1;
	}
	return num * factorial(num-1);
}

function kebabToSnake(str){
	return str.replace(/-/g, '_');
}