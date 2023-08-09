import { Injectable } from '@angular/core';
import { Jersey } from '../types/Jersey';

@Injectable({
  providedIn : 'root'
})
export class JerseyService {
  
  jersey : Array<Jersey> = [];

  constructor() {}

  addJersey(jersey : Jersey){
    this.jersey.push(jersey)
  }
  getJersey(){
    return this.jersey
  }
  removeJersey(jersey : Jersey){
    this.jersey = this.jersey.filter((c) => c!= jersey)
  }

}