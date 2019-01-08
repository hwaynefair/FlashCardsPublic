import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardReport } from './flashcardreport.component';

describe('FlashCardReport', () => {
  let component: FlashCardReport;
  let fixture: ComponentFixture<FlashCardReport>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashCardReport ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
