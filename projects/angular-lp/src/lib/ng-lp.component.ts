import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class NgLpComponent implements OnInit {

  @Input() data: Lp;

  faGithub = faGithub;
  faTwitter = faTwitter;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit() {
  }

}
