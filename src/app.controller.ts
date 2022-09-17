import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  applications(): string {
    return this.appService.applications();
  }

  @Get("/chess")
  chess(): string {
    return this.appService.chess();
  }

  @Get("/calculator")
  calculator(): string {
    return this.appService.calculator();
  }

    @Get("/maze")
  maze(): string {
    return this.appService.maze();
  }

  @Get("/sass_")
  sass_(): string {
    return this.appService.sass_();
  }

  @Get("/codepen")
  codepen(): string {
    return this.appService.codepen();
  }

    @Get("/tilt_maze")
  tilt_maze(): string {
    return this.appService.tilt_maze();
  }

  @Get("/dino")
  dino(): string {
    return this.appService.dino();
  }

    @Get("/solitaire")
  solitaire(): string {
    return this.appService.solitaire();
  }

  @Get("/sudoku")
  sudoku(): string {
    return this.appService.sudoku();
  }

    @Get("/puzzles")
  puzzles(): string {
    return this.appService.puzzles();
  }

  @Get("/tic_tac_toe")
  tic_tac_toe(): string {
    return this.appService.tic_tac_toe();
  }

    @Get("/clock")
  clock(): string {
    return this.appService.clock();
  }

  @Get("/hangman")
  hangman(): string {
    return this.appService.hangman();
  }

  @Get("/virtual_keyboard")
  virtual_keyboard(): string {
    return this.appService.virtual_keyboard();
  }


}
