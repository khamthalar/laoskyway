import { Component, OnInit } from '@angular/core';
import language from '../assets/json/language.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'laoskyway';
  isEnglish:boolean = true;
  
  ngOnInit(): void {
    this.isEnglish = true; 
    console.log(language);
  }
  
}
