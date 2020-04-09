import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  successMeaasge:Boolean= true;
  txtname: string = "";
  txtemail: string = "";
  cbfeedback_type: string = "";
  txttitle: string = "";
  txtmessage: string = "";
  enable_spinner = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" [innerHTML]="spinner_status"></span> Sending...';
  disable_spinner = 'Send';
  btn_status = "";

  button_disabled = false;

  constructor() { }

  ngOnInit(): void {
    this.btn_status = this.disable_spinner;
  }

}
