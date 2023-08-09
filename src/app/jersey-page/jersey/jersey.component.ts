import { Component, Input } from '@angular/core';
import { Jersey } from '../../types/Jersey';
import { JerseyPageService } from '../jersey-page.service';

@Component({
  selector: 'app-jersey',
  templateUrl: './jersey.component.html',
  styleUrls: ['./jersey.component.scss']
})
export class JerseyComponent {

  @Input() jersey : Jersey = {} as Jersey;

  constructor(private jerseyService : JerseyPageService){}

  ngOnInit():void {}

  addToCard(){
    this.jerseyService.addJersey(this.jersey);
    this.isInCart= true;
  }
  removeFromCart(){
    this.isInCart = false;
    this.jerseyService.removeJersey(this.jersey)
  }

  isInCart : boolean = false;

}
