import { Component, Input } from '@angular/core';
import { BaseLayer } from '../../types/BaseLayer';
import { BaseLayerService } from '../../cart-page/baseLayer.service';

@Component({
  selector: 'app-base-layer',
  templateUrl: './base-layer.component.html',
  styleUrls: ['./base-layer.component.scss']
})
export class BaseLayerComponent {

  @Input() baseLayer : BaseLayer = {} as BaseLayer;

  constructor(private baseLayerService : BaseLayerService) {}

  ngOnInit():void {}

  isInCart : boolean = false;

  addToCard(){
    this.baseLayerService.add(this.baseLayer);
    this.isInCart = true;
  }
  removeFromCart(){
    this.baseLayerService.remove(this.baseLayer)
    this.isInCart = false;
  }

}
