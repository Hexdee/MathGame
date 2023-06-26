import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mathgame',
  templateUrl: './mathgame.component.html',
  styleUrls: ['./mathgame.component.css']
})
export class MathgameComponent {
  mathForm!: FormGroup;
  firstNumber!: number;
  secondNumber!: number;
  correctAnswer!: number;
  userAnswer!: number;
  correctAttempts: number = 0;
  incorrectAttempts: number = 0;

  constructor(private fb: FormBuilder) {
    this.mathForm = this.fb.group({
      answer: ['', Validators.required]
    });
    this.generateQuestion();
  }


  generateQuestion() {

    // generate a random number between 0 and 99
    function randomNumber(): number {
      return Math.floor(Math.random() * 100);
    }

    this.firstNumber = randomNumber();
    this.secondNumber = randomNumber();
    this.correctAnswer = this.firstNumber + this.secondNumber;
    this.mathForm.reset();
  }

  checkAnswer() {
    if (this.mathForm.valid) {
      this.userAnswer = this.mathForm.value.answer;
      console.log(this.userAnswer, this.correctAnswer);
      if (this.userAnswer == this.correctAnswer) {
        this.correctAttempts++;
      } else {
        this.incorrectAttempts++;
      }
      this.generateQuestion();
    }
  }
}
