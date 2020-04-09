import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { url } from 'inspector';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import baseData from '../../data.json';

@Component({
  selector: 'app-admin-slide',
  templateUrl: './admin-slide.component.html',
  styleUrls: ['./admin-slide.component.scss']
})
export class AdminSlideComponent implements OnInit {

  // private files: Array<FileUploadModel> = [];
  @Output() loading = new EventEmitter<boolean>();

  file: File = null;

  new_item: boolean = false;

  newImg_size = "--";
  newImg_name = "--";

  disable_save_btn = true;

  // slide_list:any;

  slide_data: {
    id: number;
    img_name: string;
    img_path: string;
    img_size: number;
    img_scale: string;
    update_user: string;
    last_update: Date;
    disable_save: boolean;
    img_old: string;
    upload_file: File;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.load_data();
  }


  addNewImg() {
    const fileUpload = document.getElementById('newImg') as HTMLInputElement;
    const img = document.getElementById('new_upload_img') as HTMLInputElement;
    // const img_div = document.getElementById('img') as HTMLInputElement;
    fileUpload.onchange = () => {
      // for (let index = 0; index < fileUpload.files.length; index++) {
      //       this.file = fileUpload.files[index];
      //       // this.files.push({ data: file, state: 'in', 
      //       //   inProgress: false, progress: 0, canRetry: false, canCancel: true });
      // }
      // this.uploadFiles();

      img.src = URL.createObjectURL(fileUpload.files[0]);

      this.file = fileUpload.files[0];
      this.newImg_size = (String)((fileUpload.files[0].size / (1024 * 1024)).toFixed(2)) + " MB";
      this.newImg_name = fileUpload.files[0].name;

      if (this.file != null) {
        this.disable_save_btn = false;
      }

    };
    fileUpload.click();

  }
  save_item() {

    if (this.new_item) {
      this.loading.emit(true);
      this.upload_img(this.file).subscribe(result => {
        let data = {
          "img_name": result.img_name,
          "img_size": result.img_size,
          "img_scale": result.img_scale,
          "update_user": sessionStorage.getItem("user_name")
        }
        this.http.post<any>(baseData.baseURL + '/save_slide', data).subscribe(save_result => {

        }, (save_err: HttpErrorResponse) => {
          this.loading.emit(false);
          window.alert("can not save!, error code:" + save_err.status + " " + save_err.statusText);
          //finished
        }, () => {
          this.loading.emit(false);
          window.alert("success !");
          this.new_item = false;
          this.file = null;
          this.disable_save_btn = true;
          this.load_data();
          //finished
        });
      }, (err: HttpErrorResponse) => {
        this.loading.emit(false);
        window.alert("can not save!, error code:" + err.status + " " + err.statusText);
        //finished
      });
    }
  }

  cancel_item() {
    this.file = null;
    this.new_item = false;
    this.disable_save_btn = true;
    this.newImg_name = "--";
    this.newImg_size = "--";
  }

  upload_img(file: File): any {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(baseData.baseURL + '/upload_img', formData);
  }

  load_data() {
    this.loading.emit(true);
    this.http.get<any>(baseData.baseURL + '/get_slide').subscribe(result => {
      if (result.res == "success") {
        // this.slide_list = result.data;
        this.slide_data = result.data;
        // console.log(this.slide_data);
      } else {
        this.loading.emit(false);
        window.alert("can not load data, error: " + result.detail);
        //finished
      }
    }, (err: HttpErrorResponse) => {
      this.loading.emit(false);
      window.alert("can not load data, error code: " + err.status + " " + err.statusText);
      //finished
    }, () => {
      this.loading.emit(false);
      //finished
    });
  }

  select_img(img: string, file: string, item: number) {
    let file_input = 'fileUpload' + file;
    let img_item = 'img' + img;
    const fileUpload = document.getElementById(file_input) as HTMLInputElement;
    let i = item;
    fileUpload.onchange = () => {

      this.slide_data[i].img_name = fileUpload.files[0].name;
      this.slide_data[i].img_size = fileUpload.files[0].size;
      this.slide_data[i].img_scale = "--";
      this.slide_data[i].disable_save = false;
      this.slide_data[i].upload_file = fileUpload.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(fileUpload.files[0]);
      reader.onload = (e) => {
        this.slide_data[i].img_path = reader.result;
      };


    };
    fileUpload.click();


    // console.log(this.slide_data);
    // this.slide_list[i].img_name = "12.png";

  }

  update_item(file: File, id: number, oldFile: string) {
    this.loading.emit(true);
    this.upload_img(file).subscribe(result => {
      let data = {
        "id": id,
        "img_name": result.img_name,
        "img_size": result.img_size,
        "img_scale": result.img_scale,
        "img_old": oldFile,
        "update_user": sessionStorage.getItem("user_name")
      }
      this.http.post<any>(baseData.baseURL + '/update_slide', data).subscribe(save_result => {

      }, (save_err: HttpErrorResponse) => {
        this.loading.emit(false);
        window.alert("can not save!, error code:" + save_err.status + " " + save_err.statusText);
        //finished
      }, () => {
        this.loading.emit(false);
        window.alert("success !");
        this.load_data();
        //finished
      });
    }, (err: HttpErrorResponse) => {
      this.loading.emit(false);
      window.alert("can not save!, error code:" + err.status + " " + err.statusText);
      //finished
    });

  }
  cancel_update() {
    this.load_data()
  }
  delete_silde(id: number, oldFile: string) {
    if (confirm("are you sure, you want to delete this slide")) {
      this.loading.emit(true);
      let data = {
        "id": id,
        "img_old": oldFile
      }
      this.http.post<any>(baseData.baseURL + '/delete_slide', data).subscribe(save_result => {

      }, (save_err: HttpErrorResponse) => {
        this.loading.emit(false);
        window.alert("can not save!, error code:" + save_err.status + " " + save_err.statusText);
        //finished
      }, () => {
        this.loading.emit(false);
        window.alert("success !");
        this.load_data();
        //finished
      });
    }
  }

}
