import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import baseData from '../../../assets/json/data.json';
import { timeout, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cargo-tracking',
  templateUrl: './cargo-tracking.component.html',
  styleUrls: ['./cargo-tracking.component.scss']
})
export class CargoTrackingComponent implements OnInit {

  tracking_id: string = "";
  default_data = {
    "bill_no": "--",
    "action_date": "--",
    "staff": "--",
    "route": "--",
    "from": "--",
    "to": "--",
    "nop": 0,
    "weight": "--",
    "remark": null,
    "img_st": "--",
    "color": 4
  };
  isLoading: boolean = false;
  error_text: string = "";
  result: any;
  hidden: boolean = false;
  hidden_tracking_detail: boolean = true;
  hidden_error: boolean = true;
  error_detail = "error";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.result = this.default_data;
  }

  getdata() {
    if (this.tracking_id != "") {
      this.isLoading = true;
      let data = {
        "tracking_id": this.tracking_id
      }
      this.getDetail(data)
        .subscribe(result => {
          if (result.res == "success") {
            this.result = result.data;
            this.hidden_tracking_detail = false;
          } else if (result.res == "not match tracking_id") {
            this.result = this.default_data;
            this.error_detail = "null";
            this.hidden_tracking_detail = true;
            this.hidden_error = false;
            this.error_text = "not found data match with this Tracking ID: " + this.tracking_id;
          } else {
            this.result = this.default_data;
            this.error_detail = "error";
            this.hidden_tracking_detail = true;
            this.hidden_error = false;
            this.error_text = "Can not search right now! please contact to administrator";
          }
          this.isLoading = false;
        },err=>{
          this.isLoading = false;
        });
    }
    this.hidden = true;
  }
  onKey(event: any) {
    if (this.tracking_id.length < 8) {
      if (event.key === "Enter" ||
        event.key === "Backspace" ||
        event.key === "l" ||
        event.key === "L" ||
        event.key === "0" ||
        event.key === "1" ||
        event.key === "2" ||
        event.key === "3" ||
        event.key === "4" ||
        event.key === "5" ||
        event.key === "6" ||
        event.key === "7" ||
        event.key === "8" ||
        event.key === "9"
      ) {
        this.hidden = false;
        this.hidden_tracking_detail = true;
        this.hidden_error = true;
        if (event.key === "l" || event.key === "L") {
          if ((this.tracking_id.toUpperCase().match(/L/g) || []).length != 0) {
            event.preventDefault();
          }
        }
      } else {
        event.preventDefault();
      }
    } else {
      if (event.key === "Enter") {
        this.getdata();
      } else if (event.key === "Backspace") {
        if (this.tracking_id.length === 8) {
          this.hidden = false;
          this.hidden_tracking_detail = true;
          this.hidden_error = true;
        }
      }
    }
  }

  getDetail(data: any): Observable<any> {
    return this.http.post(baseData.cargo_api, data)
      .pipe(
        timeout(6000),
        map(res => {
          return res;
        }),
        catchError(err => {
          if (err.name === 'TimeoutError') {
            this.result = this.default_data;
            this.error_detail = "error";
            this.hidden_tracking_detail = true;
            this.hidden_error = false;
            this.error_text = "Request timeout! please contact to administrator";
            // console.log(err);
          } else {
            this.result = this.default_data;
            this.error_detail = "error";
            this.hidden_tracking_detail = true;
            this.hidden_error = false;
            this.error_text = "Can not search right now! please contact to administrator";
            // this.isLoading = false;
          }
          return Observable.throw(err)
          // this.isLoading = false;

        })
      );
  }

}
