import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLpComponent } from './angular-lp.component';

describe('AngularLpComponent', () => {
  let component: AngularLpComponent;
  let fixture: ComponentFixture<AngularLpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
