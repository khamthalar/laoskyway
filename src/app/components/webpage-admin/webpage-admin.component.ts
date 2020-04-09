import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage-admin',
  templateUrl: './webpage-admin.component.html',
  styleUrls: ['./webpage-admin.component.scss']
})
export class WebpageAdminComponent implements OnInit {

  isExpanded = true;
  element: HTMLElement;
  title:string = "Slide Show";
  user_name:string="";

  menu_option:number = 1;

  isLogin:boolean;
  isLoading:boolean = false;

  toggle_ico:string = '<img src="/assets/svg/back.svg" width="20" height="25">';

  constructor() { }
  

  toggleActive(event:any){
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
    if(sessionStorage.getItem("isLogin")=="isLogin"){
      this.isLogin = true;
      this.user_name = sessionStorage.getItem("user_name");
    }else{
      this.isLogin = false;
    }
  }
  isLogin_status(event){
    this.isLogin = event;
    this.user_name = sessionStorage.getItem("user_name");
  }
  toggle_nav(){

    if(this.isExpanded){
      this.isExpanded = false;
      this.toggle_ico = '<img src="/assets/svg/right_arrow.svg" width="20" height="25">';
    }else{
      this.isExpanded = true;
      this.toggle_ico = '<img src="/assets/svg/back.svg" width="20" height="25">';
    }

  }

  logout(){
    this.isLogin = false;
    sessionStorage.setItem("isLogin","notLogin");
    // sessionStorage.setItem("user_name",null);
  }

  setloading(status:boolean){
    this.isLoading = status;
  }

}
