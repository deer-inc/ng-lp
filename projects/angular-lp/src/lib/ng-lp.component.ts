import { Component, OnInit, Input } from '@angular/core';
import { Lp } from './lp';

@Component({
  selector: 'ng-lp',
  templateUrl: 'ng-lp.component.html',
  styles: ['ng-lp.component.scss']
})
export class NgLpComponent implements OnInit {

  @Input() data: Lp;

  constructor() { }

  ngOnInit() {
  }

}
