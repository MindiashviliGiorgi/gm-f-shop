import { Injectable } from '@angular/core';
import { Ball } from '../types/Ball';

@Injectable({
  providedIn: 'root'
})
export class BallService {

  constructor() { }

  ball : Array<Ball> = [];

  addB(ball : Ball){
    this.ball.push(ball);
  }
  getB(){
    return this.ball
  }
  removeB(ball : Ball){
    this.ball = this.ball.filter((c) => c != ball)
  }
}
