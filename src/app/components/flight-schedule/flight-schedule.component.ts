import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import baseData from '../../../assets/json/data.json';

@Component({
  selector: 'app-flight-schedule',
  templateUrl: './flight-schedule.component.html',
  styleUrls: ['./flight-schedule.component.scss']
})
export class FlightScheduleComponent implements OnInit {

  cityPairs: any;
  schedule:any;
  hide_loading:boolean = true;
  show_guide:boolean = true;
  show_bodyload:boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(baseData.baseURL + '/cityPairs').subscribe(result => {
      this.cityPairs = result;
    },(err:HttpErrorResponse)=>{
      this.show_bodyload = false;
      console.log("error: "+ err.status + " " + err.statusText);
    },()=>{
      this.show_bodyload = false;
    });
  }
  loaddata(depart: string, arrival: string) {
    this.hide_loading = false;
    const today = new Date();
    let thisMonth = today.getMonth() + 1;
    let earliestDate = today.getFullYear() + '-' + thisMonth + '-' + today.getDate() + ' 00:00:00Z';
    let latestDate = "";
    if (today.getMonth() == 12) {
      let year = today.getFullYear() + 1;
      latestDate = year + '-1' + today.getDate() + ' 23:59:59Z';
    } else {
      let month = today.getMonth() + 2;
      latestDate = today.getFullYear() + '-' + month + '-' + today.getDate() + ' 23:59:59Z';
    }

    let data = {
      "earliestDate": earliestDate,
      "latestDate": latestDate,
      "departureAirport": depart,
      "arrivalAirport": arrival,
      "amelia_api_auth": baseData.amelia_api_auth
    }
    this.http.post<any>(baseData.baseURL + '/schedules', data).subscribe(result => {
      if (result.res == "error"){
        this.hide_loading = true;
        console.log(result.detail);
      }else{
        this.schedule = result;
      }
    },(err: HttpErrorResponse) =>{
      this.hide_loading = true;
      window.alert("error code:" + err.status + " " + err.statusText);
    },()=>{
      this.hide_loading = true;
      this.show_guide = false;
    });
  }

}
