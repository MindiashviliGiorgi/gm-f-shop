import { Injectable } from '@angular/core';
import { Cleat } from '../types/Cleat';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Array<Cleat> = [];

  constructor() { }

  add(cleat : Cleat){
    this.cart.push(cleat);
  }

  get(){
    return this.cart
  }
  remove(cleat : Cleat){
    this.cart = this.cart.filter((c) => c != cleat)
  }
}
