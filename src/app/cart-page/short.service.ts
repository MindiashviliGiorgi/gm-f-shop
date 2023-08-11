import { Injectable } from '@angular/core';
import { Short } from '../types/Short';

@Injectable({
  providedIn : 'root'
}) 
export class ShortService {

  short : Array<Short> = [];

  constructor() {}

  addShort(short : Short){
    this.short.push(short)
  }

  getShort(){
    return this.short
  }

  removeShort(short : Short){
    this.short = this.short.filter((c) => c! = short)
  }

}