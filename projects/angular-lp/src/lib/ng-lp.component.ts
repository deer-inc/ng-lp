import { Component, Input, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Lp } from './lp';
import {
  faGithub,
  faTwitter,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'ng-lp',
  templateUrl: './ng-lp.component.html',
  styleUrls: ['./ng-lp.component.scss'],
})
export class NgLpComponent implements OnInit {

  @Output() handleClickAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: Lp;

  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.handleClickAction.emit();
  }

}
