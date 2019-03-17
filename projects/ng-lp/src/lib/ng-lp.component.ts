import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Lp } from './lp';
import {
  faGithub,
  faTwitter,
  faFacebook,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'ng-lp',
  templateUrl: './ng-lp.component.html',
  styleUrls: ['./ng-lp.component.scss'],
})
export class NgLpComponent implements OnInit {

  @Output() handleClickAction: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: Lp;

  faGithub: IconDefinition = faGithub;
  faTwitter: IconDefinition = faTwitter;
  faFacebook: IconDefinition = faFacebook;

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.handleClickAction.emit();
  }

}
