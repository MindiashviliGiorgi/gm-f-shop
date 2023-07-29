import { Component, Input } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  ngOnInit(): void {
    
  }

  @Input() images : carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;

  leftIcon:string = '/assets/images/left-arrow-icon.png';

  selectedIndex = 0;

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    }else {
      this.selectedIndex++;
    }
  }

  
}
