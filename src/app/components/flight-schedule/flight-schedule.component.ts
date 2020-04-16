import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import baseData from '../../data.json';

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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(baseData.amelia_api + 'cityPairs').subscribe(result => {
      this.cityPairs = result;
    });
  }
  loaddata(depart: string, arrival: string) {
    this.hide_loading = false;
    const today = new Date();
    let earliestDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate() + ' 00:00:00Z';
    let latestDate = "";
    if (today.getMonth() == 12) {
      let year = today.getFullYear() + 1;
      latestDate = year + '-1' + today.getDate() + ' 23:59:59Z';
    } else {
      let month = today.getMonth() + 1;
      latestDate = today.getFullYear() + '-' + month + '-' + today.getDate() + ' 23:59:59Z';
    }
    const header = new HttpHeaders({ Authorization: 'Basic ' + btoa(baseData.amelia_api_auth) });
    const param = new HttpParams()
      .set('earliestDate', earliestDate)
      .set('latestDate', latestDate)
      .set('departureAirport', depart)
      .set('arrivalAirport', arrival);
    this.http.get<any>(baseData.amelia_api + 'schedules', { params: param, headers: header }).subscribe(
      result => {
        this.schedule = result;
        this.hide_loading = true;
        this.show_guide = false;
      });
  }

}
