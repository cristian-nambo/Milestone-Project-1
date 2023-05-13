

## General Requirements

- This is a solo project! (Just to clarify, you may do the same game as another student, but you may not work together.)
- This game cannot be a game or assignment we've already done in class.
- This game must run in a web browser.
- This game must be tracked in Github, with a minimum of 10 commits.
- Ideally, put your empty project up on Github on day one of development and aim for multiple commits per day.
- This game must be deployed on Github Pages or another location.



## Game Requirements

- The game can be designed for 2 or more players (PvP) or for 1 player (PvE).
  - The second player in a PvP game can be a person or an AI. (In this case, think of "AI" as a logical pattern.)
  - For multi-player games, turns should switch appropriately between players
- The game should be winnable, or it should keep score (or track player progress in a meaningful way).
  - When a player wins or loses, the game status and/or score should display visually to the player in a way that does not rely on console.logs or alerts.
  - If there is a valid draw (tie) condition in your chosen game, that should be implemented.
- HTML, CSS, and JavaScript should be written in separate files.
- Effort must be spent on styling and appearance.
- The HTML code should use sematic tags.
- The GitHub repository for your game should have a README.md that describes the inspiration for the game, explains the controls and how to play the game, lists the technologies used to build the game, and addresses any outstanding bugs or unfinished functionality.



## Deployment

The web game is deployed at https://cristian-nambo.github.io/Milestone-Project-1/


## Project Description

The SNAKE game has been a classic. Growing up I came accross a "tetris" as I used to call it and spent many hours playing on that handhelp piece of art.
I thought it would be fitting to make my first web game...a SNAKE game. I plan on making as many games as I can with as descriptive comments as I can to document my growth.


## Game Logic

Pretty simple logic. I wanted to use the arrow keys to move the snake on the x and y axis. Every time the snake eats it will continue to grow.
I will be using the canvas Element; which I found to be exactly what the name indicates. A blank rectangle that we can draw inside of using JavaScript.
Sources:

https://www.w3schools.com/html/html5_canvas.asp

https://www.w3schools.com/graphics/canvas_coordinates.asp

https://www.codingnepalweb.com/create-snake-game-htm-css-javascript/

https://www.w3schools.com/html/html5_canvas.asp

https://www.freecodecamp.org/news/how-to-build-a-snake-game-in-javascript/

https://www.geeksforgeeks.org/create-a-snake-game-using-html-css-and-javascript/

Image by rawpixel.com

We start with a board that will be 20x20 and the block size will be 25. I tried playing with the "settings" and these seemed easy on the eyes and they fit most screens.

After doing a little research I found that canvas doesn't really do (x,y) coordinates, intead coloum and rows. Top left of the grid starts at 0, bottom right is the number you chose to be the end...in my case 19 since we count 0. Where ever you choose to start in the map, +1 will take righ/up and -1 left/down.

Every time the head touches an apple (in my case) it will extend the snakes body. Only 2 rules, touch the tail with the head and you loose; go out of bounds and you loose.


## Deliverables

>Even if you have a great big idea for a game, it's important to scope this project according to what you can get done in the next two weeks. We'll refer to your project completion goal using the term **[Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product) (MVP)** -- a list of the criteria needed to "ship" a playable version of your game that meets the project requirements.
>
>*Don't lose sight of your big ideas, though! Keep a list of further improvements you can refer to as **Post-MVP Ideas**. You might finish some before our project time is done, or you might work on them later!*
>
> For your README, delete this blockquote and fill in the lists below.


### MVP Criteria

- One thing my game must do to meet my minimum standard be playable.
- Another target is it has to be intuitive.
- Code is clean and no repetitions.


### Post-MVP Plans

- Sounds everytime the snake moves and eats.
- Change the shape of the food.
- Something else I don't technically know how to do... *yet*. : Pause the game lol.


## Project Planning

| Date | Goals |
| ---- | ----- |
| Mon. 5/1 | Discuss project guidelines and resources; create repo and README.md for the project. |
| Wed. 5/3 | Work day in class; make sure to have a repo with basic README.md finished. |     
| Sat. 5/6 | Work day in class     |
| Mon. 5/8 | Work day in class; make sure your project is deployed.      |
| Wed. 5/10 | Your project should be deployed and your game should work according to the rules and goals you’ve set for the game. Make sure you’re meeting all of the project requirements in the Canvas docs (or all here as a Google Doc: https://tinyurl.com/3f47whyx), also viewable and can be duplicated as a checklist here: https://tinyurl.com/yrryxmk8)  |  
| Sat. 5/13 | Submit your completed project. Present your project. |



