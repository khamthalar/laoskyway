import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-newuser',
  templateUrl: './admin-newuser.component.html',
  styleUrls: ['./admin-newuser.component.scss']
})
export class AdminNewuserComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AdminNewuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  save_clicked(){
    this.dialogRef.close(true);
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  cancel(){
    console.log(this.data);
  }

}
export interface DialogData {
  id: string,
  name: string,
  password: string,
  status: number,
  user_group: string,
  username: string,
  edit:boolean
}
