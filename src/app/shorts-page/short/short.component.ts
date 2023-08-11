import { Component, Input } from '@angular/core';
import { Short } from '../../types/Short';
import { ShortService } from '../../cart-page/short.service';

@Component({
  selector: 'app-short',
  templateUrl: './short.component.html',
  styleUrls: ['./short.component.scss']
})
export class ShortComponent {

  @Input() short : Short = {} as Short;

  constructor(private shortService : ShortService) {}

  ngOnInit():void {}

  isInCart:boolean = false;

  addToCard(){
    this.shortService.addShort(this.short);
    this.isInCart = true;
  }

  removeFromCart(){
    this.shortService.removeShort(this.short)
    this.isInCart = false;
  }


}
