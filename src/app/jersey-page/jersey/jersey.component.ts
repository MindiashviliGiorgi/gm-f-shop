import { Component, Input } from '@angular/core';
import { Jersey } from '../../types/Jersey';
import { JerseyService } from 'src/app/cart-page/jersey.service';

@Component({
  selector: 'app-jersey',
  templateUrl: './jersey.component.html',
  styleUrls: ['./jersey.component.scss']
})
export class JerseyComponent {

  @Input() jersey : Jersey = {} as Jersey;

  constructor(private jerseyService : JerseyService) {}

  ngOnInit():void {}

  addToCard(){
    this.jerseyService.addJersey(this.jersey)
    this.isInCart = true;
  }
  removeFromCart(){
    this.isInCart = false;
    this.jerseyService.removeJersey(this.jersey)
  }

  isInCart:boolean = false;

}
