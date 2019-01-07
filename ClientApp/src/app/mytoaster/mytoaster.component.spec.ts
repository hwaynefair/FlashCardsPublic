import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytoasterComponent } from './mytoaster.component';

describe('MytoasterComponent', 
() => {
  let component: MytoasterComponent;
  let fixture: ComponentFixture<MytoasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
