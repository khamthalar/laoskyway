import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-bokeo-des',
  templateUrl: './bokeo-des.component.html',
  styleUrls: ['./bokeo-des.component.scss']
})
export class BokeoDesComponent implements OnInit {

  constructor() { }

  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  cards = [
    {
      img: '/assets/des/bokeo/001.png'
    },
    {
      img: '/assets/des/bokeo/002.png'
    },
    {
      img: '/assets/des/bokeo/003.png'
    },
    {
      img: '/assets/des/bokeo/004.png'
    },
    {
      img: '/assets/des/bokeo/005.png'
    },
    {
      img: '/assets/des/bokeo/006.png'
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
