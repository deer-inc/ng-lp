import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgLpModule } from '@deer-inc/ng-lp';
import { ReactiveFormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgLpModule,
        ReactiveFormsModule,
        MonacoEditorModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
