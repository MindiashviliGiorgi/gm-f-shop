import { Injectable } from "@angular/core";
import { BaseLayer } from "../types/BaseLayer";

@Injectable({
  providedIn : 'root'
})
export class BaseLayerService {

  baseLayer : Array<BaseLayer> = [];

  constructor() {}

  add(baseLayer : BaseLayer){
    this.baseLayer.push(baseLayer)
  }
  get(){
    return this.baseLayer
  }
  remove(baseLayer : BaseLayer){
    this.baseLayer = this.baseLayer.filter((c) => c != baseLayer)
  }
}