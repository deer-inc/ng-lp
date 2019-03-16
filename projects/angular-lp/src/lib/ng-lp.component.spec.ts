import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLpComponent } from './ng-lp.component';
import { SafePipeModule } from 'safe-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AngularLpComponent', () => {
  let component: NgLpComponent;
  let fixture: ComponentFixture<NgLpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLpComponent ],
      imports: [
        SafePipeModule,
        FontAwesomeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
