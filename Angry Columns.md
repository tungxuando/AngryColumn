# Angry Doge

## Introduction

Angry Doge is an arcade type of video game inspired by the infamous Flappy Bird but in this 2  player game, users can navigate the columns with space in between in order for the other player as doge character to go through. Normally the users would only play on the doge (bird) character but now users can play as the columns and also the doge character. It would be abrupt chaos when playing on a single keyboard.

The unique selling points are:

- This Flappy Bird concept has not been done for 2 player.
- Angry Doge would actually have a goal of winning whereas Flappy Bird goes on forever.
- The players can play as both elements inside the game(Doge or Columns).

## Main ideas

- The game will be moving from left to right (the columns move to the left whereas doge character only move vertically). 
- One player can play as the doge character on the left of the screen and the other player can play as the moving column.
- The doge character will have a pattern movement that player can learn.
- The column player will be playing different kind of columns with space in between.
- To compensate for player reaction and doge's movement after 2 seconds the chosen column must be stopped and the column player can move the next column.
- The game ends where the doge player hit any of the column or doge player successfully went through 25 columns.
- The user will also have the option to play single player where the column will be play randomly.

## Objective

Main objective is either doge player reaches over 25th column or column player successfully make doge player hit one of their column. As with single player, the goal is to reach the highest score.

## Library and Assets

The game will be using p5.js framework for the core collision detection of both character and the movements which is the main functionality. OpenGameArt.org and Kenney.nl are the websites will be providing the assets besides from small details that can be self made. The rest of the components will be utilizing HTML5 canvas to draw the elements and JavaScript logics.

## Input

This section describes the inputs that will be included.

**Doge**

| Case    | Type | Condition |
| ------- | ---- | --------- |
| DogeX   | int  | not empty |
| DogeY   | int  | not empty |
| Gravity | int  | not empty |
| Lift    | int  | not empty |

**Column**

| Case    | Type | Condition |
| ------- | ---- | --------- |
| ColumnX | int  | not empty |
| ColumnY | int  | not empty |
| Spacing | int  | not empty |
| Top     | int  | not empty |
| Bottom  | int  | not empty |

**Scene**

| Case   | Type | Condition |
| ------ | ---- | --------- |
| Width  | int  | >=0       |
| Height | int  | >=0       |

## Output

This section describes the outputs of the game.

| Case                     | Type   |
| ------------------------ | ------ |
| Game over/winning screen | String |
| Columns left to win      | int    |
| Achievement              | String |

## Class diagram

This section includes the UML class diagram.

![](https://i.imgur.com/9garHoP.png)

## Test plan

This section describes the test plan.

### Canvas

| Object Name | object Type | width | height |
| ----------- | ----------- | ----- | ------ |
| Canvas      | Canvas      | 800   | 600    |

### Map

| Case | Object Type |
| ---- | ----------- |
| Map  | Map         |

### Doge

| Object Name | ObjectType | velocity | gravity | lift | DogeX | DogeY    |
| ----------- | ---------- | -------- | ------- | ---- | ----- | -------- |
| Doge        | Doge       | 0        | 0.5     | -10  | 64    | height/2 |

### Column

| Object Name | ObjectType | velocity | gravity | lift | ColumnX | ColumnY  | spacing |
| ----------- | ---------- | -------- | ------- | ---- | ------- | -------- | ------- |
| Column      | Column     | 0        | 0.5     | -10  | 64      | height/2 | 150     |

### Achievement

| Object Name | ObjectType  | title | description     | isUnlocked |
| ----------- | ----------- | ----- | --------------- | ---------- |
| Achievement | Achievement | 0     | Beat the column | false      |

## Test cases

### Canvas class

**setUp**

This section will describe `setUp()` if it is working correctly.

| #    | Canvas  | Action    | Expected output             |
| ---- | ------- | --------- | --------------------------- |
| 1    | Canvas1 | `setUp()` | Game initialized on browser |

### Map class

**draw**

This section will describe `draw()` if it is working correctly.

| #    | Map  | Action   | Expected output         |
| ---- | ---- | -------- | ----------------------- |
| 1    | Map1 | `draw()` | Map is drawn on browser |

### Doge class

**show**

This section will describe `show()` if it is working correctly.

| #    | Doge  | Action   | Expected output                                              |
| ---- | ----- | -------- | ------------------------------------------------------------ |
| 1    | Doge1 | `show()` | The doge character is drawn on browser in the middle of the left side of the screen. |

**fly**

This section will describe `fly()` if it is working correctly.

| #    | Doge  | Action  | Expected output                                              |
| ---- | ----- | ------- | ------------------------------------------------------------ |
| 1    | Doge1 | `fly()` | The doge character will fly vertically upward then slowly descend with mouse click. |

**die**

This section will describe `die()` if it is working correctly.

| #    | Doge  | Action  | Expected output                                              |
| ---- | ----- | ------- | ------------------------------------------------------------ |
| 1    | Doge1 | `die()` | The doge character will drop vertically and the game is paused. |

### Column class

**show**

This section will describe `show()` if it is working correctly.

| #    | Column  | Action   | Expected output                                              |
| ---- | ------- | -------- | ------------------------------------------------------------ |
| 1    | Column1 | `show()` | The columns are drawn on browser on the right side of the screen. |

**move**

This section will describe `move()` if it is working correctly.

| #    | Column  | Action   | Expected output                                   |
| ---- | ------- | -------- | ------------------------------------------------- |
| 1    | Column1 | `move()` | The column will move vertically depend on w or s. |

**hit**

This section will describe `hit()` if it is working correctly.

| #    | Column1 | Action  | Expected output                                              |
| ---- | ------- | ------- | ------------------------------------------------------------ |
| 1    | Column1 | `hit()` | The column will stop drawing or moving vertically and the game is paused. |