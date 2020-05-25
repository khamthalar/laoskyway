import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import baseData from '../../../assets/json/data.json';
import language from '../../../assets/json/language.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slide_num = 0;
  hide_popup:boolean=false;
  language_data:any;
  slide_data: {
    id: number;
    img_name: string;
    img_path: string;
    img_size: number;
    img_scale: string;
    update_user: string;
    last_update: Date;
    disable_save: boolean;
    img_old: string;
    upload_file: File;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // if(sessionStorage.getItem('language')=='eng'){
    //   this.language_data = language.en;
    // }else{
    //   this.language_data = this.language_data.la;
    // }
    this.load_data();
  }

  load_data() {
    this.http.get<any>(baseData.baseURL + '/get_slide').subscribe(result => {
      if (result.res == "success") {
        // this.slide_list = result.data;
        this.slide_data = result.data;
        // console.log(this.slide_data);
        this.slide_num =  Object.keys(this.slide_data).length;
      } else {
        this.slide_num = 0;
        window.alert("can not load data, error: " + result.detail);

        //finished
      }
    }, (err: HttpErrorResponse) => {
      this.slide_num = 0;
      window.alert("can not load data, error code: " + err.status + " " + err.statusText);
      //finished
    }, () => {
      //finished
    });
  }
  close_popup(event) {
    this.hide_popup = event;
    console.log(event);
  }

  change_language(value:string){
    console.log(value);
  }

}
