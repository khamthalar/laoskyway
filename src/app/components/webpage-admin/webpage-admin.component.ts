import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-webpage-admin',
  templateUrl: './webpage-admin.component.html',
  styleUrls: ['./webpage-admin.component.scss']
})
export class WebpageAdminComponent implements OnInit {

  isExpanded = true;
  element: HTMLElement;
  title: string = "Slide Show";
  user_name: string = "";

  user_data: any;


  menu_option: number = 1;

  isLogin: boolean;

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
      // this.check_permissions();
    } else {
      this.isLogin = false;
    }
  }
  isLogin_status(event) {
    this.isLogin = event;
    this.user_name = sessionStorage.getItem("user_name");
    
  }
  setPermission(event){
    // module variable
    this.user_data = JSON.parse(event);
    const admin_setup = document.getElementById('amin-setup-module') as HTMLElement;

    //check permission
    if (event != null) {
      if ((JSON.parse(event).permissions.admin_setup_access) == 1) {
        admin_setup.hidden = false;
      } else {
        admin_setup.hidden = true;
      }
    }
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
    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.isLogin = false;
        sessionStorage.setItem("isLogin", "notLogin");
        sessionStorage.setItem('user',null);
        this.menu_option = 1;
        element.hidden = false;
      }
    });
  }

  setloading(status: boolean) {
    const loading = document.getElementById('loading') as HTMLElement;
    loading.hidden = !status;
    // this.isLoading = status;
  }

}
