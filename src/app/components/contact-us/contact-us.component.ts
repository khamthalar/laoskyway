import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  lat: number = 17.971960;
  lng: number = 102.574171;
  zoom:number = 14;
  dir_url:string = "https://www.google.com/maps/dir/Lao+Skyway+Head+Office,+Vientiane/''/@17.972039,102.5391505,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3124690ccf48d895:0xc97d5985cea8cfcb!2m2!1d102.57417!2d17.9719605!1m5!1m1!1s0x3124690ccf48d895:0xc97d5985cea8cfcb!2m2!1d102.57417!2d17.9719605";
  constructor() { }

  ngOnInit(): void {
  }

}
