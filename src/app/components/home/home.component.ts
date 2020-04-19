import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import baseData from '../../../assets/json/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hide_popup:boolean=false;
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
    this.load_data();
  }

  load_data() {
    this.http.get<any>(baseData.baseURL + '/get_slide').subscribe(result => {
      if (result.res == "success") {
        // this.slide_list = result.data;
        this.slide_data = result.data;
        // console.log(this.slide_data);
      } else {
        window.alert("can not load data, error: " + result.detail);
        //finished
      }
    }, (err: HttpErrorResponse) => {
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

}
