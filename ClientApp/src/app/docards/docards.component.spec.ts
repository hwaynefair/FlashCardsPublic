import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocardsComponent } from './docards.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //ADDED FOR MATERIAL DESIGN ERRORS
fdescribe('DocardsComponent', () => {    //LIMIT TO JUST THIS TEST IF IN FOCUS
  let component: DocardsComponent;
  let fixture: ComponentFixture<DocardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocardsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ] //ADDED FOR MATERIAL DESIGN ERRORS
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
