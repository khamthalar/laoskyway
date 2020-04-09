import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-popup',
  templateUrl: './main-popup.component.html',
  styleUrls: ['./main-popup.component.scss']
})
export class MainPopupComponent implements OnInit {


  @Output() closed_popup = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  popup_closed(){
    this.closed_popup.emit(true);
  }
  sendata(data){
    console.log(data);
  }

}
