import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cleat } from '../../types/Cleat';
import { CartService } from 'src/app/cart-page/cart.service';

@Component({
  selector: 'app-cleat',
  templateUrl: './cleat.component.html',
  styleUrls: ['./cleat.component.scss']
})
export class CleatComponent {

  @Input() cleat: Cleat = {} as Cleat;

  constructor(private cartService : CartService) {}

  ngOnInit():void {}

  addToCard(){
    this.cartService.add(this.cleat)
    this.isInCart = true;
  }
  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.cleat)
  }

  isInCart:boolean = false;



}
