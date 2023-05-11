console.log("Hello World")


//BOARD
var blockSize = 25; //this is how big the actual square is on the grid
var rows = 20; //this is how many squares on the row
var cols = 20;  //this is for how may squares in the column
var board;
var context;

//SNAKE HEAD
var snakeX = blockSize * 5; //this is the starting point of the snake row 5 coloumn 5
var snakeY = blockSize * 5;

//FOOD
var foodX; //GOT RID OF THE STARTING POINTS SINCE WE CAN NOW CALL THEM AT RANDOM.
var foodY;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //USED FOR DRAWING ON THE BOARD

    placeFood();
    update();
}

function update() {
    context.fillStyle = "black"
    context.fillRect(0, 0, board.width, board.height); //THIS IS THE COLOR OF THE BOARD AND ITS PROPERTIES

    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize); //x and y coordinates this gives color to the snake

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize); //This is giving the food its color and properties

}
//WE NEED A FUNSTION THAT WILL PLACE THE FOOD AT A RANDOM PLACE USING MATH
function placeFood(){
    //0-1) *cols ->(0-19.99999) ->(0-19) *25
    foodX = Math.floor(Math.random() * cols) * blockSize
    foodY = Math.floor(Math.random() * rows) * blockSize
}