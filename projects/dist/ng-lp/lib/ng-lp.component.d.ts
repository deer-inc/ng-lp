import { OnInit, EventEmitter } from '@angular/core';
import { Lp } from './lp';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
export declare class NgLpComponent implements OnInit {
    handleClickAction: EventEmitter<boolean>;
    data: Lp;
    faGithub: IconDefinition;
    faTwitter: IconDefinition;
    faFacebook: IconDefinition;
    constructor();
    ngOnInit(): void;
    action(): void;
}
