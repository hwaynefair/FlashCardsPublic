import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service'
import { Router } from '@angular/router';
import { FlashCards } from '../flash-cards'
import { NgxNotifierService } from 'ngx-notifier';
import { MatSnackBar } from "@angular/material";
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@Component({
  selector: 'app-docards',
  templateUrl: './docards.component.html',
  styleUrls: ['./docards.component.css']
})

export class DocardsComponent implements OnInit {
  private userDetails: Array<FlashCards>;
  private tableHead: Array<String>;  
  private tableColName: Array<String>; 
  showReport: boolean;
  AddRecord:boolean=false;
  recordNo: number;
  cardCreated:boolean;
  cardIsEdited:boolean;
  IsAnswer: boolean;
  FlashCardsx = new FlashCards;
  FlashCardReport = new FlashCards;
  MaxRecordID: number = 0;
  selectionFormatState: boolean;
  showLoader:boolean=false;
  constructor(
    public _dialogue: MatDialog, 
    private snackbar: MatSnackBar, 
    private http: DataService, 
    private router: Router, 
    private _ngxNotifierService: NgxNotifierService, 
    //private _myToasterService: myToasterService --
    ) {
      this.tableHead = new Array<String>('Question', 'Answer', 'Category');
      this.tableColName = new Array<String>('question', 'answer', 'category'); //CASE SENSITIVE!
      this.userDetails = new Array<FlashCards>();
      this.showReport=false;

      this.IsAnswer =false;
      this.cardCreated = false;
    this.http.GetNextRecord(0).subscribe(
      data => {
        
        this.FlashCardsx = data;
       
      },
        response => {
          
          console.log("POST call in error", response);
          this.showLoader=false;
        },
        () => {
          
          console.log("The POST observable is now completed.");
          this.showLoader=false;
        }) 
  }


  createNotification() {
    this._ngxNotifierService.createToast("hi", "success", 22)

  }

  

  ngOnInit() {
    this.cardIsEdited = false;
    this.showLoader=true
    this.IsAnswer = false;
    this.http.GetNextRecord(0).subscribe(
      data => {
        this.FlashCardsx = data;
        console.log(this.FlashCardsx);

      });
    

    this.http.GetMaxRecordID().subscribe(data => this.MaxRecordID = data);
  };


  delete(Id: number) {
    this.showReport = false;
    let dialogRef = this._dialogue.open(MyDialogComponent, {
      width: '600px',
      data: { messagex: 'Are you sure you want to delete this record?', header: 'Delete?' }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'Confirm') {
        return this.http.DeleteRecord(Id)
          .subscribe(data => {

            //my working version of toastr - replaced with snackbar!
            //this.selectionFormatState=true;
            //this._myToasterService.setState(this.selectionFormatState);
            this.http.GetMaxRecordID().subscribe(data => this.MaxRecordID = data);
            this.moveNext(0);
            this.snackbar.open('Deleted', 'Success',
              {
                duration: 3000
              })
          })

      }
    })
  }

  movePrev(Id: number) {
    this.showReport = false;
    this.IsAnswer = false;
    if (Id > 2) {
      return this.http.GetPrevRecord(Id)
        .subscribe(data => {
          this.FlashCardsx = data;
        })
    }
  }

  moveNext(Id: number) {
    this.showReport = false;
    this.IsAnswer = false;
    
    if (Id < this.MaxRecordID) {
      return this.http.GetNextRecord(Id)
        .subscribe(data => {
          this.FlashCardsx = data;
        })
    }
  }
  getAnswer() {
    this.showReport = false;
    this.IsAnswer = !this.IsAnswer;
  }

  addRecord() {
    this.showReport = false;
    this.cardCreated = true;
    this.AddRecord = true;   
    //this.router.navigate(['./addCard']);
  }

  editCard(){
    this.cardIsEdited=true;
  }

  cardCreatedMethod(){
    this.showReport = false;
    
    this.cardCreated = false;
    //doesnt appear to work - i.e. advance to newest record?????????
    this.http.GetMaxRecordID().subscribe(data => 
      {this.MaxRecordID = data,
       this.moveNext(data-1)}
      )
    ;
  }

  cardEdited(event:FlashCards){
    this.cardIsEdited=false;
    this.FlashCardsx = event;
  
    this.moveNext(event.id-1)
  }

  getReport(){
    this.showReport = true;
    this.http.GetFlashCardsReport()
        .subscribe(data => {
          this.userDetails = data;
        })
  }

  reportClosed(){
    this.showReport = false;
  }
  goHome(){
     
    this.cardIsEdited=false;
    this.showReport = false;
    this.cardCreated = false;
  

  }

}
 
