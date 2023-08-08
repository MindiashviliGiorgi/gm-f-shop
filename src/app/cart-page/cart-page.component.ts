import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  constructor(private cartService : CartService){}

  ngOnInit():void {}

  getCart(){
    return this.cartService.get();
  }

  isEmpty : boolean = false;
  

}
