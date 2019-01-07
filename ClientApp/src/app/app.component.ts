import { Component, OnInit , Input} from '@angular/core';
import { MytoasterComponent } from './mytoaster/mytoaster.component';
import { NgxNotifierService } from 'ngx-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  slideInOutBool:boolean;
   myMessagex: string;
  

private toastr:MytoasterComponent;

   onToasterClick(toasterMessage){
     if(toasterMessage===true)
     this.myMessagex = "is emmited"
   //  this.slideInOutBool=false;
     this.toastr.myMessage="view child";
   }

  constructor(private _ngxNotifierService: NgxNotifierService){   
    this.myMessagex = "xxxxxxxx";
        this.slideInOutBool=true;
  }

  createNotification(){
    this._ngxNotifierService.createToast("test", "", 222);
}

  ngInit(){
    this.createNotification();
  }
}

