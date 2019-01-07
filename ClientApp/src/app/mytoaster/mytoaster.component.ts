import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { myToasterService } from '../services/mytoaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mytoaster',
  templateUrl: './mytoaster.component.html',
  styleUrls: ['./mytoaster.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('2000ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('2000ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class MytoasterComponent  {
  showToaster: string = "hiddenToaster";
  @Input() toasterVisible: boolean;
  @Input() slideInOutBool: boolean;
  messageSent: boolean;
  @Input() myMessage: string;
  @Output() click = new EventEmitter();
  subscription: Subscription;
  selectionFormatState: boolean;

  constructor(private myToasterService: myToasterService) {
    this.myMessage = ""
    this.messageSent = false;
    this.toasterVisible = true;
    this.subscription = this.myToasterService.getState().subscribe(
      selectionFormatState => {
        if (selectionFormatState === true)
          this.slideInOutBool = false;
        this.showToaster = "showToaster";

      });
  }

 
  onClick() {

    this.toasterVisible = false;
    this.messageSent = false
    this.click.emit(this.messageSent);
  }
}
