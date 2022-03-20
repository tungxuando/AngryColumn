# Angry Column

## Introduction

Angry Column is an arcade type of video game inspired by the infamous Flappy Bird but in this 2 player game, users can
navigate the columns with space in between in order for the other player as doge character to go through. Normally the users would only play with a single the doge (bird) character but now users the game in Co-op mode. It would be abrupt chaos when playing on a single keyboard.

The unique selling points are:

- This Flappy Bird concept has not been done for 2 player.

## Main ideas

- 2 player can play with 2 doge characters.
- The doge character will have a pattern movement that player can learn.
- The column player will be playing different kind of columns with space in between.
- The user will also have the option to play single player where the column will be play randomly.

## Objective

Main objective is to reach the highest point possible.

## Library and Assets

The game will be using p5.js framework for the core collision detection of both character and the movements which is the
main functionality. OpenGameArt.org and Kenney.nl are the websites will be providing the assets besides from small
details that can be self made. The rest of the components will be utilizing HTML5 canvas to draw the elements and
JavaScript logics.

## Input

This section describes the inputs that will be included.

**Bird**

| Case     | Type       | Condition |
| -------- | ---------- | --------- |
| y        | int        | not empty |
| x        | int        | not empty |
| lift     | int        | not empty |
| gravity  | int        | not empty |
| velocity | int        | not empty |
| icon     | birdSprite | not empty |
| width    | int        | not empty |
| height   | int        | not empty |

**Pipe**

| Case      | Type    | Condition |
| --------- | ------- | --------- |
| spacing   | int     | not empty |
| top       | int     | not empty |
| bottom    | int     | not empty |
| x         | int     | not empty |
| y         | int     | not empty |
| passed    | boolean | not empty |
| highlight | boolean | not empty |

## Output

This section describes the outputs of the game.

| Case       | Type   |
| ---------- | ------ |
| Menu       | String |
| Game Over  | String |
| Score      | int    |
| High score | int    |

## Class diagram

This section includes the UML class diagram.

![](https://i.imgur.com/Ty9tf6q.png)

## Test cases

### Game class

**preload()**

This section will describe `preload()` if it is working correctly.

| #    | Game | Action      | Expected output                |
| ---- | ---- | ----------- | ------------------------------ |
| 1    | Game | `preload()` | Game loaded assets on browser. |

**setup()**

This section will describe `setup()` if it is working correctly.

| #    | Game | Action    | Expected output          |
| ---- | ---- | --------- | ------------------------ |
| 1    | Game | `setup()` | Game menu screen appear. |

**draw()**

This section will describe `preload()` if it is working correctly.

| #    | Game | Action   | Expected output                  |
| ---- | ---- | -------- | -------------------------------- |
| 1    | Game | `draw()` | Menu screen is drawn on browser. |

**playSinglePlayer()**

This section will describe `playSinglePlayer()` if it is working correctly.

| #    | Game | Action               | Expected output                                              |
| ---- | ---- | -------------------- | ------------------------------------------------------------ |
| 1    | Game | `playSinglePlayer()` | Game loaded Pipes and a new Bird that react to gravity and pipes moving to the left. |

**playCoOp()**

This section will describe `playCoOp()` if it is working correctly.

| #    | Game | Action       | Expected output                                              |
| ---- | ---- | ------------ | ------------------------------------------------------------ |
| 1    | Game | `playCoOp()` | Game loaded Pipes and 2 new Birds that react to gravity and pipes moving to the left. |

**showScores()**

This section will describe `showScores()` if it is working correctly.

| #    | Game | Action         | Expected output                                              |
| ---- | ---- | -------------- | ------------------------------------------------------------ |
| 1    | Game | `showScores()` | The score and max score from previous plays will be display. |

**gameOver()**

This section will describe `gameOver()` if it is working correctly.

| #    | Game | Action       | Expected output                                              |
| ---- | ---- | ------------ | ------------------------------------------------------------ |
| 1    | Game | `gameOver()` | The game is stopped and the user need to right click to go back to menu. |

**reset()**

This section will describe `reset()` if it is working correctly.

| #    | Game | Action    | Expected output                                              |
| ---- | ---- | --------- | ------------------------------------------------------------ |
| 1    | Game | `reset()` | After the game stopped reset() will be run and reinitialize the variables. |



**keyPressed()**

This section will describe `keyPressed()` if it is working correctly.

| #    | Game | Action         | Expected output                                              |
| ---- | ---- | -------------- | ------------------------------------------------------------ |
| 1    | Game | `keyPressed()` | Z and X can be used to fly the bird according to the game mode. |

**touchStarted()**

This section will describe `touchStarted()` if it is working correctly.

| #    | Game | Action           | Expected output                   |
| ---- | ---- | ---------------- | --------------------------------- |
| 1    | Game | `touchStarted()` | Redirect to menu after game over. |

**menuScreen()**

This section will describe `menuScreen()` if it is working correctly.

| #    | Game | Action         | Expected output                                              |
| ---- | ---- | -------------- | ------------------------------------------------------------ |
| 1    | Game | `menuScreen()` | Display the menu screen along with 2 mode and an exit button. |

**mouseClicked()**

This section will describe `mouseClicked()` if it is working correctly.

| #    | Game | Action           | Expected output                                              |
| ---- | ---- | ---------------- | ------------------------------------------------------------ |
| 1    | Game | `mouseClicked()` | Recognizes the mouse click for user to choose mode from menu screen. |

### Bird class

**show**()

This section will describe `show()` if it is working correctly.

| #    | Map  | Action   | Expected output                                            |
| ---- | ---- | -------- | ---------------------------------------------------------- |
| 1    | Bird | `show()` | The bird is drawn on the left in the middle of the screen. |

**up()**

This section will describe `up()` if it is working correctly.

| #    | Map  | Action | Expected output   |
| ---- | ---- | ------ | ----------------- |
| 1    | Bird | `up()` | The bird goes up. |

**update()**

This section will describe `update()` if it is working correctly.

| #    | Map  | Action     | Expected output                        |
| ---- | ---- | ---------- | -------------------------------------- |
| 1    | Bird | `udpate()` | After the bird goes up, it drops down. |

### Pipe class

**hits()**

This section will describe `hits()` if it is working correctly.

| #    | Pipe | Action       | Expected output                                        |
| ---- | ---- | ------------ | ------------------------------------------------------ |
| 1    | Pipe | `hits(Bird)` | The bird character stop flying after hitting any pipe. |

**pass()**

This section will describe `pass()` if it is working correctly.

| #    | Pipe | Action       | Expected output                                     |
| ---- | ---- | ------------ | --------------------------------------------------- |
| 1    | Pipe | `pass(Bird)` | The bird goes through and +1 score after each pipe. |

**drawHalf()**

This section will describe `drawHalf()` if it is working correctly.

| #    | Doge  | Action       | Expected output                                |
| ---- | ----- | ------------ | ---------------------------------------------- |
| 1    | Doge1 | `drawHalf()` | The Pipe is drawn half for the top and bottom. |

**show()**

This section will describe `show()` if it is working correctly.

| #    | Doge | Action   | Expected output                     |
| ---- | ---- | -------- | ----------------------------------- |
| 1    | Pipe | `show()` | The pipes are displayed on the map. |

**update()**

This section will describe `update()` if it is working correctly.

| #    | Doge | Action     | Expected output              |
| ---- | ---- | ---------- | ---------------------------- |
| 1    | Pipe | `update()` | The pipes moves to the left. |

**offscreen()**

This section will describe `offscreen()` if it is working correctly.

| #    | Doge | Action        | Expected output                                              |
| ---- | ---- | ------------- | ------------------------------------------------------------ |
| 1    | Pipe | `offscreen()` | The pipes are displayed from the right but is shown slowly as it moves to the right. |
