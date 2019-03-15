import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Lp } from './lp';

@Component({
  selector: 'ng-lp',
  templateUrl: './ng-lp.component.html',
  styleUrls: ['./ng-lp.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgLpComponent implements OnInit {

  @Input() data: Lp;

  constructor() { }

  ngOnInit() {
  }

}
