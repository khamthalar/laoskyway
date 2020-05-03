import { Component, OnInit, ViewChild } from '@angular/core';

import webData from '../../../assets/json/data.json';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import baseData from '../../../assets/json/data.json';
import { MatTableDataSource} from '@angular/material/table';
import { AdminNewuserComponent } from 'src/app/dialogs/admin-newuser/admin-newuser.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-admin-setup',
  templateUrl: './admin-setup.component.html',
  styleUrls: ['./admin-setup.component.scss']
})
export class AdminSetupComponent implements OnInit {


  displayedColumns: string[] = ['Name', 'username', 'password', 'User Group', 'Status', 'Action'];


  web_data: any;
  data = [];
  data_changed = [];
  web_data_onEdit: any;

  users_num: number = 0;
  show_user_load: boolean = false;
  dataSource = new MatTableDataSource<users>();

  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.show_user_load = true;

    this.web_data = JSON.stringify(webData);
    JSON.parse(this.web_data, (key, value) => {
      if (key != "" && value != "") {
        this.data.push([key, value]);
      }
    });
    this.web_data_onEdit = Array(webData);
    this.getUserData();
  }

  txtKeyUp(value, oldData) {
    this.check_changed(value, oldData);
  }

  check_changed(data, oldData) {
    var btnSave = document.getElementById("btn-save") as HTMLButtonElement;
    if (this.data_changed.length == 0) {
      if (oldData == data) {
        btnSave.disabled = true;
      } else {
        btnSave.disabled = false;
      }
    } else if (this.data_changed.length == 1) {
      if (this.data_changed[0]['oldvalue'] == oldData) {
        if (oldData == data) {
          btnSave.disabled = true;
        } else {
          btnSave.disabled = false;
        }
      }
    }
  }
  leaveInput(value, id, oldData) {
    this.check_changed(value, oldData);
    if (this.data_changed.length == 0) {
      if (oldData != value) {
        let item = {
          "id": id,
          "value": value,
          "oldvalue": oldData
        }
        this.data_changed.push(item);
        this.web_data_onEdit[0][id] = value;
      }
    } else if (this.data_changed.length == 1) {
      if (oldData == this.data_changed[0]['oldvalue']) {
        this.web_data_onEdit[0][id] = oldData;
        this.data_changed.splice(0, 1);
        if (oldData != value) {
          let item = {
            "id": id,
            "value": value,
            "oldvalue": oldData
          }
          this.data_changed.push(item);
          this.web_data_onEdit[0][id] = value;
        }
      } else {
        if (oldData != value) {
          let item = {
            "id": id,
            "value": value,
            "oldvalue": oldData
          }
          this.data_changed.push(item);
          this.web_data_onEdit[0][id] = value;
        }
      }
    } else {
      this.data_changed.forEach((element, index) => {
        if (element.oldvalue == oldData) {
          this.data_changed.splice(index, index + 1);
          this.web_data_onEdit[0][id] = oldData;
          if (oldData != value) {
            let item = {
              "id": id,
              "value": value,
              "oldvalue": oldData
            }
            this.data_changed.push(item);
            this.web_data_onEdit[0][id] = value;
            return;
          }
        }
      });
      if (oldData != value) {
        let item = {
          "id": id,
          "value": value,
          "oldvalue": oldData
        }
        this.data_changed.push(item);
        this.web_data_onEdit[0][id] = value;
      }
    }
  }
  saved() {
    console.log(this.data_changed);
    console.log(this.web_data_onEdit[0]);
  }

  getUserData() {
    this.show_user_load = true;
    this.dataSource = new MatTableDataSource<users>();
    this.http.get<any>(baseData.baseURL + '/get_users').subscribe(result => {
      if (result.res == "success") {
        this.dataSource = new MatTableDataSource<users>(result.data);
        this.users_num = result.data.length;
      }
    }, (err: HttpErrorResponse) => {
      this.show_user_load = false;
      window.alert(err);
    }, () => {
      this.show_user_load = false;
    });

  }

  newUsers() {
    const dialogRef = this.dialog.open(AdminNewuserComponent, {
      width: '370px',
      data: {
        id: "",
        name: "",
        password: "",
        status: 1,
        user_group: "",
        username: "",
        edit: false
      }
    });
    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        const btn_refresh = document.getElementById('btn-refresh') as HTMLButtonElement;
        btn_refresh.click();
      }
    });

  }
  user_refresh() {
    const loader = document.getElementById('loader') as HTMLSpanElement;
    const user_num = document.getElementById('user-num') as HTMLSpanElement;
    loader.hidden = false;
    this.http.get<any>(baseData.baseURL + '/get_users').subscribe(result => {
      if (result.res == "success") {
        this.dataSource = new MatTableDataSource<users>(result.data);
        this.users_num = result.data.length;
        user_num.innerHTML = result.data.length+' <b>users</b>';
        
      }
    }, (err: HttpErrorResponse) => {
      loader.hidden =true;
      window.alert(err);
    }, () => {
      loader.hidden = true;
    });

  }
}
export interface users {
  id: string,
  name: string,
  password: string,
  status: number,
  user_group: string,
  username: string
}

