
function Movie(title,director,premierYr,published,views) {
     this.title = title;
     this.director = director;
     this.premierYr = premierYr;
 }


var movies = [
      new Movie("The Lord of the Rings The Fellowship of the Ring","Peter Jackson",2001),
      new Movie("The Lord of the Rings The Two Towers","Peter Jackson",2002),
      new Movie("The Lord of the Rings The Return of the King","Peter Jackson",2003),
  ];

console.log("The name of the movie is " + movies[0].title + ".");
console.log("The director was " + movies[0].director + ".");
console.log("The movie was premiered on " + movies[0].premierYr + ".");
console.log("The name of the movie is " + movies[1].title + ".");
console.log("The director was " + movies[1].director + ".");
console.log("The movie was premiered on " + movies[1].premierYr + ".");
console.log("The name of the movie is " + movies[2].title + ".");
console.log("The director was " + movies[2].director + ".");
console.log("The movie was premiered on " + movies[2].premierYr + ".");