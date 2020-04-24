import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-webpage-admin',
  templateUrl: './webpage-admin.component.html',
  styleUrls: ['./webpage-admin.component.scss']
})
export class WebpageAdminComponent implements OnInit {

  isExpanded = true;
  element: HTMLElement;
  title: string = "Slide Show";
  user_name: string = "";

  menu_option: number = 1;

  isLogin: boolean;
  isLoading: boolean = false;

  toggle_ico: string = '<img src="/assets/svg/back.svg" width="20" height="25">';

  constructor(public dialog: MatDialog) { }


  toggleActive(event: any) {
    // debugger;
    // event.preventDefault();
    // if(this.element !== undefined){
    //   this.element.style.backgroundColor = "white";
    // } 
    // var target = event.currentTarget;
    // target.style.backgroundColor = "#e51282";
    // this.element = target;
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("isLogin") == "isLogin") {
      this.isLogin = true;
      this.user_name = sessionStorage.getItem("user_name");
    } else {
      this.isLogin = false;
    }
  }
  isLogin_status(event) {
    this.isLogin = event;
    this.user_name = sessionStorage.getItem("user_name");
  }
  toggle_nav() {

    if (this.isExpanded) {
      this.isExpanded = false;
      this.toggle_ico = '<img src="/assets/svg/right_arrow.svg" width="20" height="25">';
    } else {
      this.isExpanded = true;
      this.toggle_ico = '<img src="/assets/svg/back.svg" width="20" height="25">';
    }

  }

  logout() {
    // this.isLogin = false;
    // sessionStorage.setItem("isLogin","notLogin");
    const element = document.getElementById("login_page");

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '270px',
      data: { info: "Are you sure, you want to logout ?" }
    });
    dialogRef.afterClosed().subscribe((confirm:boolean) => {
      if (confirm) {
        this.isLogin = false;
        sessionStorage.setItem("isLogin", "notLogin");
        element.hidden = false;
      }
    });
  }

  setloading(status: boolean) {
    this.isLoading = status;
  }

}
