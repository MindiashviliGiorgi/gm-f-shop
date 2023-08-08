import { Component, Input } from '@angular/core';
import { Ball } from '../../types/Ball';
import { BallsPageService } from '../balls-page.service';
import { BallService } from 'src/app/cart-page/ball.service';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent {

  @Input() ball : Ball = {} as Ball;

  constructor(private ballService : BallService) {}

  ngOnInit():void {}

  addToCard(){
    this.ballService.addB(this.ball)
    this.isInCart = true;
  }
  removeFromCart(){
    this.isInCart = false;
    this.ballService.removeB(this.ball)
  }

  isInCart:boolean = false;



}
