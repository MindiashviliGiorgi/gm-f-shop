import { Component } from '@angular/core';



@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent {

  constructor() {}

  ngOnInit():void {}

  images = [
    {
      imageSrc: '/assets/images/c1-1.jpg',
      imageAlt: 'pic1',
    },
    {
      imageSrc: '/assets/images/c1-2.jpg',
      imageAlt: 'pic1',
    },
    {
      imageSrc: '/assets/images/c1-3.jpg',
      imageAlt: 'pic1',
    },
    {
      imageSrc: '/assets/images/c1-4.jpg',
      imageAlt: 'pic1',
    },
    {
      imageSrc: '/assets/images/c1-5.jpg',
      imageAlt: 'pic1',
    },
  ]

  

}
