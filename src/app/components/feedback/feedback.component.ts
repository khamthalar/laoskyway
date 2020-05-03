import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import baseData from '../../../assets/json/data.json';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  submitted = false;

  successMeaasge:Boolean= false;

  loading:string = "";

  enable_spinner = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" [innerHTML]="spinner_status"></span> Sending...';
  disable_spinner = 'Send';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loading = this.disable_spinner;
    this.feedbackForm = this.formBuilder.group({
      name: ['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      feedback_type:['',Validators.required],
      title:['',Validators.required],
      message:['',Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }
    this.loading = this.enable_spinner;
    this.http.post<any>(baseData.local_api_url+'/submitFeedback',this.feedbackForm.value).subscribe(result=>{
      if (result.res == "success"){
        this.successMeaasge = true;
      }else{

      }
    },(err: HttpErrorResponse)=>{

    },()=>{
      this.loading = this.disable_spinner;
      this.feedbackForm.setValue({name:'',email:'',feedback_type:'',title:'',message:''});
    });
  }

  get form() {return this.feedbackForm.controls;}

}

export interface feedback_data {
  "name":string,
	"email":string,
	"feedback_type":string,
	"title":string,
	"message":string
}
