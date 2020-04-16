import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-luangnamtha-des',
  templateUrl: './luangnamtha-des.component.html',
  styleUrls: ['./luangnamtha-des.component.scss']
})
export class LuangnamthaDesComponent implements OnInit {

  constructor() { }

  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  cards = [
    {
      img: '/assets/des/luangnamtha/001.png'
    },
    {
      img: '/assets/des/luangnamtha/002.png'
    },
    {
      img: '/assets/des/luangnamtha/003.png'
    },
    {
      img: '/assets/des/luangnamtha/004.png'
    },
    {
      img: '/assets/des/luangnamtha/005.png'
    },
    {
      img: '/assets/des/luangnamtha/006.png'
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
