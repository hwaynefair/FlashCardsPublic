import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { QA } from '../qa'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-editcards',
  templateUrl: './editcards.component.html',
  styleUrls: ['./editcards.component.css']
})
export class EditcardsComponent implements OnInit {


@Input() currentQA:QA;
    newQA = [];
    model = new QA(0,'', '','',false);

    constructor(private _http: HttpClient) {

     };
    submitted = false;
  @Output() public qaEdited = new EventEmitter();
  
    onSubmit() {
  
      this.submitted = true;
  
      const body = JSON.stringify(this.model);
   
      this._http.put<QA>("https://www.zenosoftwaresolutions.com/FlashCards/api/FlashCards/EditFlashCard/" + this.currentQA.id,
        body, {
          headers: { 'Content-Type': 'application/json' }
        })
        .subscribe(
          (val) => {
            console.log("POST call successful value returned in body",
              val);
          },
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
            this.qaEdited.emit(this.model);
          });
      this.ngOnInit();
    }
  
  
    ngOnInit() {
    
      this.model.id=this.currentQA.id;
      this.model.answer = this.currentQA.answer;
      this.model.question = this.currentQA.question;
    }
    cancelMeEdit(){
      this.qaEdited.emit(this.model);
    }
  
  }
  