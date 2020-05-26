import { Component, OnInit } from '@angular/core';
import language from '../assets/json/language.json';
import { EventEmitterService } from './services/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'laoskyway';
  isEnglish:boolean;
  language_data:any;
  language_:string;
  constructor(private changeLanguage:EventEmitterService){}
  ngOnInit(): void {
    if(sessionStorage.getItem('language')==undefined || sessionStorage.getItem('language')=='eng'){
      this.isEnglish = true;
      this.language_data = language.en;
      this.language_ = "en";
    }else if(sessionStorage.getItem('language')=='la'){
      this.isEnglish = false;
      this.language_data = language.la;
      this.language_ = "la";
    }
    if(sessionStorage.getItem('visitor')==undefined){
      sessionStorage.setItem('visitor','isOld');
    }else{
    }
    // console.log(language);
  }
  change_language(value:string){
    if(value == "eng"){
      sessionStorage.setItem('language','eng');
      this.isEnglish = true;
      this.language_data = language.en;
      this.language_ = "en";
    }else{
      sessionStorage.setItem('language','la');
      this.isEnglish = false;
      this.language_data = language.la;
      this.language_ = "la";
    }
    this.changeLanguage.onChangelanguage(value);
  }
  
}
