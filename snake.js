console.log("Hello World")
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highScore");


//BOARD
var blockSize = 25; //this is how big the actual square is on the grid
var rows = 20; //this is how many squares on the row
var cols = 20;  //this is for how may squares in the column
var board;
var context;
let score = 0;
let highScore = localStorage.getItem("high-score") || 0; //getting high score from local storage

//highScoreElement.innerText = `High Score: ${highScore}`;

//SNAKE HEAD
var snakeX = blockSize * 5; //this is the starting point of the snake row 5 coloumn 5
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = []; //the snake body will equal an array. that is going to store segments(an x,y coordinate)

//FOOD
var foodX; //GOT RID OF THE STARTING POINTS SINCE WE CAN NOW CALL THEM AT RANDOM.
var foodY;

var gameOver = false;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //USED FOR DRAWING ON THE BOARD

    placeFood();
    document.addEventListener("keyup", changeDirection); 
    //update(); is being called once. but we need to call it multimple times
    setInterval (update, 1000/10); // every 100 miliseconds it will run the update function.
}

function update() {
    if (gameOver){
        return; //this is so we can stop canvas from updating because the game is over
    }
    context.fillStyle = "black"
    context.fillRect(0, 0, board.width, board.height); //THIS IS THE COLOR OF THE BOARD AND ITS PROPERTIES

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize); //This is giving the food its color and properties

    if(snakeX == foodX && snakeY ==foodY){
        snakeBody.push([foodX, foodY]); //will add the coordinates of the food the snake ate.
        placeFood();
        score++;

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore); //storing high score to local storage
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    for (let i = snakeBody.length -1; i > 0; i--){ //the body will not turn until the last part of the body passes through the coordinates the head went through.
        snakeBody[i] = snakeBody[i- 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize; 
    snakeY += velocityY * blockSize; //giving the snake speed from the function below
    context.fillRect(snakeX, snakeY, blockSize, blockSize); //x and y coordinates this gives color to the snake
    for (let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //GAME OVER CONDITIONS
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize){
        gameOver = true;
        alert("Game Over!!! \n" + "Press OK to Retry"); //if the head goes out of the grid it will stop the update function and alert GameOver
        location.reload();
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX ==snakeBody[i][0] && snakeY ==snakeBody[i][1]){
         gameOver = true;
         alert("Game Over!!! \n" + "Press OK to Retry")   //if the head touches the body it will stop the update and alert GameOver
         location.reload();
        }
    }

}

//function to chage the direction of the snake using the arrow keys

function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    if(e.code == "ArrowLeft" && velocityX !=1){
        velocityX = -1;
        velocityY = 0;
    }
    if(e.code == "ArrowRight" && velocityX !=-1){
        velocityX = 1;
        velocityY = 0;
    }
}

//WE NEED A FUNSTION THAT WILL PLACE THE FOOD AT A RANDOM PLACE USING MATH.random RETURNS A NUMBER BETWEEN 0-1 AND 
//WE ARE MULTIPLYING BY THE NUMBER OF COLUMS OR ROWS. THEN WE DO MATH.FLOOR SO WE CAN GET RID OF THE DECIMAL FINALLY MULTIPLIED BY THE BLOCKSIZE
//0-1) *cols =>(0-19.99999) =>(0-19) *25

function placeFood(){ 
    foodX = Math.floor(Math.random() * cols) * blockSize
    foodY = Math.floor(Math.random() * rows) * blockSize
}

highScoreElement.innerText = `High Score: ${highScore}`;