import { OnInit, EventEmitter } from '@angular/core';
import { Lp } from './lp';
export declare class NgLpComponent implements OnInit {
    handleClickAction: EventEmitter<boolean>;
    data: Lp;
    faGithub: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faTwitter: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faFacebook: import("@fortawesome/fontawesome-common-types").IconDefinition;
    constructor();
    ngOnInit(): void;
    action(): void;
}
