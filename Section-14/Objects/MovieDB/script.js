var movies = [
  {
  name: "In Bruges",
  rating: 5,
  hasWatched: true,
  },
    {
  name: "Frozen",
  rating: 4.5,
  hasWatched: false,
    },
     {
  name: "Mad Max",
  rating: 5,
  hasWatched: true,
     },

      {
  name: "Les Mis",
  rating: 3.5,
  hasWatched: false
      }
]


movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen "
  }
  result += "\"" + movie.name + "\" - ";
  result += movie.rating + " stars";
  console.log(result);

});

var dogSpace = {};

dogSpace.speak = function(){
  return "WOOF!";
}

var catSpace = {};

catSpace.speak = function(){
  return "MEOW"
};


var comments = {};

comments.data = ["111", "123", "93784"];

comments.print = function(){
  this.data.forEach(function(el){
    console.log(el);
  });
}
