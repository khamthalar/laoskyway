import { Component, OnInit } from '@angular/core';

import webData from '../../../assets/json/data.json';
import { HttpClient } from '@angular/common/http';
import baseData from '../../../assets/json/data.json';
import { MatTableDataSource } from '@angular/material/table';
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

  users_num:number=0;

  dataSource = new MatTableDataSource<users>();

  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  ngOnInit(): void {
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


    this.http.get<any>(baseData.baseURL + '/get_users').subscribe(result => {
      if (result.res == "success") {
        this.dataSource = new MatTableDataSource<users>(result.data);
        // console.log(this.dataSource);
        this.users_num = result.data.length;
      }
    });
  }
  newUsers(){
    const dialogRef = this.dialog.open(AdminNewuserComponent, {
      width: '270px',
      data: { id: "",
        name: "",
        password: "",
        status: 1,
        user_group: "",
        username: "",
        edit:false
      }
    });
    dialogRef.afterClosed().subscribe((confirm:boolean) => {
      // if (confirm) {
      //   // this.isLogin = false;
      //   // sessionStorage.setItem("isLogin", "notLogin");
      //   // element.hidden = false;
      // }
      // console.log(confirm);
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

