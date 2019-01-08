import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class myToasterService {

  private subject = new Subject<any>();


  sendMessage(message: string) {
    this.subject.next({ text: message });
}


clearMessage() {
  this.subject.next();
}

getMessage(): Observable<any> {
  return this.subject.asObservable();
}

  setState(state: any) {
    this.subject.next(state);
  }

  getState(): Observable<any> {
    return this.subject.asObservable();
  }
}