import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {FlashCards} from '../flash-cards'

@Injectable()
export class DataService {
 
  constructor(private _http:HttpClient) { 
  }

  GetNextRecord(recordNo:number){      
   return this._http.get<FlashCards>('api/FlashCards/GetFlashCardsNext/' + recordNo);
  }

  GetPrevRecord(recordNo:number){
   return this._http.get<FlashCards>('api/FlashCards/GetFlashCardsPrev/' + recordNo)
  }

  GetMaxRecordID(){
    return this._http.get<number>('api/FlashCards/GetFlashCardsCount')
    }
    
    DeleteRecord(recordNo:number){
      return  this._http.delete<number>('api/FlashCards/RemoveFlashCards/'+ recordNo)
    }

    GetFlashCardsReport(){
      return this._http.get<any>('api/FlashCards/GetFlashCardsReport')
      }

}
