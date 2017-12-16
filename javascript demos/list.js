var todo = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input==="new"){
		newTodo();
	} else if (input==="list"){
		showList();
	} else if (input === "delete"){
		deleteItem();
	} else{
		alert("Not a valid option.");
	}

var input = prompt("What would you like to do?");
}

console.log("***App Closing***");

function newTodo(){
	var listItem = prompt("Enter the task.");
	todo.push(listItem);
	console.log("***Item added***");
}

function showList(){
	console.log("__________________");
	todo.forEach(function(item, i){
		console.log(i + ": " + item);
	})
	console.log("__________________");
}

function deleteItem(){
	var deleteID = prompt("Which number item would you like deleted?");
	todo.splice(deleteID, 1);
	console.log("***Item #" + deleteID + " deleted***");
}
