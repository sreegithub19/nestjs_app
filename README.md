Details:

- View this project demo :

- <a href="https://nestjs.com/">Nest. JS</a> is a framework that helps build Node. JS server-side applications. The Nest framework is built using TypeScript which allows developers to build highly scalable and testable applications. Built on top of Express.
- Github <a href="https://github.com/nestjs/nest">link</a> to NestJS.
- About this project:

  - This project consists of the implementation of a few games and apps using NestJS, and deployed onto Vercel.

  - Following apps have been implemented:

    - Calculator: A calculator covering the fundamental operations - Addition, Subtraction, Multiplication, Division, and Clear Screen.

    - Maze: A maze for navigating the object to the destination. It exists in four levels of difficulty: Easy, Medium, Hard, Extreme.

    - Tic tac toe: The first symbol (X/O) to get 3 consecutive boxes filled upon alternative turns of filling the boxes in the grid (we have implemented for 3X3 grid) would be the winner. After one game is over, the user is allowed to Restart the game.

    - Analogue clock: Analogue clock showing the current time.

    - Hangman: User will have to guess the phrase with 5 guesses. The user can reset the phrase at anytime during the game.

    - Puzzles: User will have to rearrange the pieces to form the picture that is shown on the screen. The steps and time taken are counted.

      - There are a sample of 5 images in this app (Harju-Madis Church, Kakumäe Harbor, Kohila mill, Rahumäe train station, Neeruti manor).
      - This game has 4 levels of difficulty:
        - Easy (3x3)
        - Medium (4x4)
        - Hard (5x5)
        - Very hard (6x6)

    - Sudoku:

      - This is an implementation of the game of Sudoku, and it demonstrates how developers can use HTML5 and JavaScript to create an efficient algorithm to solve these puzzles. The algorithms draw heavily on the Chakra engine’s support for ECMAScript 5 standard array operations to rapidly solve many Sudoku games. We can also manually solve Sudoku puzzles.
      - Courtesy: https://github.com/MicrosoftEdge/Sudoku

    - Virtual Keyboard: Implementation of keyboard with fundamental functionality.

    - Solitaire: Implementation of <a href="https://en.wikipedia.org/wiki/Patience_(game)">Solitaire</a> (stacking cards of alternating colors (red and black) one below the other). Here, we have the following features:

      - The ability to undo moves
      - Switch between light and dark themes
      - Start a new game in the middle of another game

    - Chess: Implementation of <a href="https://en.wikipedia.org/wiki/Chess">Chess</a>

    - Dino:

      - Implementation of the <a href="https://en.wikipedia.org/wiki/Dinosaur_Game">Dinosaur game</a>
      - Courtesy: https://codepen.io/MysticReborn/pen/rygqao

    - Sass:

      - Styling using SASS/SCSS

    - Tilted maze:

      - Four dots are supposed to be combined into one,and should be directed into the dotted circle in between. This movement should be done with the help of a virtual joystick. This game is there in 2 modes:
        - Easy: Plain version, as mentioned above
        - Hard: There are "potholes" in the maze. The game will stop when any of the dots falls into a pothole. Toggling between easy and hard mode is by pressing on keyboard (E/e) and (H/h).
        - Courtesy: https://youtu.be/bTk6dcAckuI

    - Codepen:
      - Simulation of <a href="https://codepen.io/">Codepen</a>, wherein we can code and see the browser result simultaneously.

---

Steps to run:
https://docs.nestjs.com/first-steps

- npm i -g @nestjs/cli
- nest new nestjs_app
- cd nestjs_app
- npm init (let the extra lines come in package.json)
- npm install
- npm run start (http://localhost:3000/)

---

Versions used in this project:

- Angular CLI: 14.1.2
- Node : 16.10.0
- Package Manager: npm 7.24.0

---

Deployment :

- link: https://trilon.io/blog/deploying-nestjs-to-zeit-now
- npm i -g now vercel
- now login
- now.json (fill it)
- npm run build && now
- vercel --prod ( to override later)

  (Everytime there is a git push, the steps to be followed to include even deployment into Vercel):

  - git add .
  - git commit -m "Changes"
  - git push origin master
  - npm run build && now (enter through all questions)
  - vercel --prod

  (All in one command) :

  - git add . && git commit -m "Changes" && git push origin master && npm run build && now && vercel --prod
  - git add . && git commit -m "Changes" && git push origin master && vercel --prod

(Note):
Direct pull / clone from remote repo and deployment might result in failed deployment due to absence of "dist" folder. This folder is generated only by running the project locally atleast once.

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
