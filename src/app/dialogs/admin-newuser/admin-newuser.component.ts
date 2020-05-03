import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../must-match.validator';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import baseData from '../../../assets/json/data.json';
@Component({
  selector: 'app-admin-newuser',
  templateUrl: './admin-newuser.component.html',
  styleUrls: ['./admin-newuser.component.scss']
})
export class AdminNewuserComponent implements OnInit {


  userForm: FormGroup;
  submitted = false;
  loading = "Save";

  enable_load = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" [innerHTML]="spinner_status"></span>';

  constructor(public dialogRef: MatDialogRef<AdminNewuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      password: [this.data.password, Validators.required],
      status: [this.data.status],
      user_group: [this.data.user_group, Validators.required],
      username: [this.data.username, Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  cancel() {
    this.dialogRef.close(false);
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.loading = this.enable_load;
    if (this.data.edit) {

    } else {
      this.http.post<any>(baseData.baseURL + '/newUser', this.userForm.value).subscribe(result => {
        if (result.res == "success") {
          this.dialogRef.close(true);
        } else {
          //error
          this.loading = "Save";
        }
      }, (err: HttpErrorResponse) => {
        //err
        this.loading = "Save";
      });
    }

  }

  get f() { return this.userForm.controls; }

}
export interface DialogData {
  id: string,
  name: string,
  password: string,
  status: number,
  user_group: string,
  username: string,
  edit: boolean
}
