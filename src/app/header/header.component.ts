import { Component } from '@angular/core';
import { CartService } from '../cart-page/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  menu : boolean = false;

  constructor (private cartService : CartService){

  }
  getCart(){
    return this.cartService.get()
  }




}
