import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QA } from '../qa'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {

    constructor(private _http: HttpClient) { };
  
  model = new QA(0, '', '', 'Angular', false);
  submitted = false;
  @Output() public questionCreated = new EventEmitter();

  onSubmit() {
    this.submitted = true;
    const body = JSON.stringify(this.model);
    this._http.post<QA>("api/FlashCards/CreateFlashCard",
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
          this.questionCreated.emit(false);
        });
    this.ngOnInit();
  }


  ngOnInit() {
    this.model.answer = '';
    this.model.question = '';
  }

  cancelMe() {
    this.questionCreated.emit(false);
  }

}
