import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import baseData from '../../data.json';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  @Output() isLogin = new EventEmitter<boolean>();
  @Output() loading = new EventEmitter<boolean>();
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (this.username != "" && this.password != "") {
      this.loading.emit(true);
      let data = {
        "username": this.username,
        "password": this.password
      }
      this.http.post<any>(baseData.baseURL + '/get_user', data).subscribe(result => {
        if (result.res == "success") {
          this.username = "";
          this.password = "";
          sessionStorage.setItem("user_name",result.data.name);
          this.isLogin.emit(true);
          sessionStorage.setItem("isLogin", "isLogin");
        } else {
          this.loading.emit(false);
          window.alert(result.res);
        }
      }, (err: HttpErrorResponse) => {
        this.loading.emit(false);
        window.alert("error code:" + err.status + " " + err.statusText);
        //finished
      },()=>{
        this.loading.emit(false);
      });
    } else if (this.username != "" && this.password == "") {
      //null password
      window.alert("please input password");
    } else if (this.username == "" && this.password != "") {
      //nul username
      window.alert("please input password");
    } else {
      // null username and password
      window.alert("please input username and password");
    }

    // this.isLogin.emit(true);
    // sessionStorage.setItem("isLogin","isLogin");
  }
}
