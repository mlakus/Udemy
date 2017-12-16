var movieDB = [
	{
		title: "Matrix",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Bad Mom",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Bad Mom 2",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Band of Brothers",
		rating: 5,
		hasWatched: true
	}];


function searchMovie(arr){
	arr.forEach(function(movie, index){
    	if (arr[index].hasWatched === true){
			console.log("You have watched \"" + arr[index].title + "\" - " + arr[index].rating + " stars.");
		} else{
			console.log("You have not watched \"" + arr[index].title + "\" - " + arr[index].rating + " stars.");
		}
	})
}

var person = "Mike";
