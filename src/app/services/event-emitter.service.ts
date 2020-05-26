import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeChangelanguage = new EventEmitter();    
  subsVar: Subscription;
  constructor() { }
  onChangelanguage(data:string) {    
    this.invokeChangelanguage.emit(data);    
  }
}
