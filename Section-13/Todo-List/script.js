var todos = ["Finish this"];

var input = prompt("What would you like to do?");



while (input !== "quit") {
  if(input === "list") {
    listTodos();

  } else if(input === "new"){
    newTodos();

  } else if (input === "delete") {
    deleteTodos();
  }
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");


function listTodos(){
  todos.forEach(function(todo, index){
    console.log(index + ": " + todo);
    });
}
function newTodos(){
  var newToDo = prompt("Enter new todo");
  todos.push(newToDo);
  console.log("added todo");
}

function deleteTodos(){
  var index = prompt("enter index of todo to delete");
  todos.splice(index,1);
  console.log("deleted todo");
}



// var colors = ["red", "green", "Orange"];
//
// colors.forEach(function(color){
//   console.log(color);
// })
