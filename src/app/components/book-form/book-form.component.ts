import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';




@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {


  bookForm: FormGroup;
  trip_select: number = 1;
  oneway: boolean = false;

  adult: number = 1;
  child: number = 0;
  infant: number = 0;

  from_des_min_date: Date;
  to_des_min_date: Date;

  from_des_date: Date;
  constructor(fb: FormBuilder, private renderer2: Renderer2) {
    this.bookForm = fb.group({
      from_des: new FormControl(''),
      trip: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.from_des_min_date = new Date();
  }
  loadNextScript() {
    const s = this.renderer2.createElement('script');
    s.text = ''
    this.renderer2.appendChild(document.body, s);
  }
  select_oneway(oneway) {
    if (oneway) {
      this.trip_select = 2;
      this.oneway = true;
    } else {
      this.trip_select = 1;
      this.oneway = false;
    }
  }
  from_des_dateSelected(type: string, event: MatDatepickerInputEvent<Date>) {
    this.from_des_date = event.value;
    this.to_des_min_date = event.value;
  }
  minus_adult() {
    if (this.adult > 1) {
      this.adult = this.adult - 1;
    }
  }
  plus_adult() {
    this.adult = this.adult + 1;
  }
  minus_child() {
    if (this.child > 0) {
      this.child = this.child - 1;
    }
  }
  plus_child() {
    this.child = this.child + 1;
  }
  minus_infant() {
    if (this.infant > 0) {
      this.infant = this.infant - 1;
    }
  }
  plus_infant() {
    if (this.infant < this.adult) {
      this.infant = this.infant + 1;
    }
  }
  // public loadScript(url: string) {
  //   const body = <HTMLDivElement> document.body;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = true;
  //   script.defer = true;
  //   body.appendChild(script);
  // }
}
