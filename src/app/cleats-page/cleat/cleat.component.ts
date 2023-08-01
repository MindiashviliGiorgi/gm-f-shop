import { Component, Input } from '@angular/core';
import { Cleat } from 'src/app/types/Cleats';

@Component({
  selector: 'app-cleat',
  templateUrl: './cleat.component.html',
  styleUrls: ['./cleat.component.scss']
})
export class CleatComponent {

  @Input() cleat : Cleat = {} as Cleat;

  constructor(){}

  ngOnInit():void {}

  addToCard(){
    
  }



}
