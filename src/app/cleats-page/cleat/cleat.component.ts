import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cleat } from '../../types/Cleat';

@Component({
  selector: 'app-cleat',
  templateUrl: './cleat.component.html',
  styleUrls: ['./cleat.component.scss']
})
export class CleatComponent {

  @Input() cleat: Cleat = {} as Cleat;
  @Output() cleatEmitter = new EventEmitter<Cleat>();

  constructor() {}

  ngOnInit():void {}

  addToCard(){
    this.cleatEmitter.emit(this.cleat)
  }

}
