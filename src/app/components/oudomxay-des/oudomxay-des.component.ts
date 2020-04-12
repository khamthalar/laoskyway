import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-oudomxay-des',
  templateUrl: './oudomxay-des.component.html',
  styleUrls: ['./oudomxay-des.component.scss']
})
export class OudomxayDesComponent implements OnInit {

  constructor() { }

  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  cards = [
    {
      img: '/assets/des/ody/001.png'
    },
    {
      img: '/assets/des/ody/002.png'
    },
    {
      img: '/assets/des/ody/003.png'
    },
    {
      img: '/assets/des/ody/004.png'
    },
    {
      img: '/assets/des/ody/005.png'
    },
    {
      img: '/assets/des/ody/006.png'
    },
    {
      img: '/assets/des/ody/007.png'
    },
    {
      img: '/assets/des/ody/008.png'
    },
    {
      img: '/assets/des/ody/009.png'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

}
