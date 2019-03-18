/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
export class NgLpComponent {
    constructor() {
        this.handleClickAction = new EventEmitter();
        this.faGithub = faGithub;
        this.faTwitter = faTwitter;
        this.faFacebook = faFacebook;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    action() {
        this.handleClickAction.emit();
    }
}
NgLpComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-lp',
                template: "<div class=\"nglp-root\" *ngIf=\"data\">\n  <header class=\"nglp-header\">\n    <div class=\"nglp-container\">\n      <div class=\"nglp-header__wrap\">\n        <h1 class=\"nglp-header__logo\">\n          <img src=\"\" [alt]=\"data.title\" *ngIf=\"data.logoURL\">\n          <span *ngIf=\"!data.logoURL\">{{data.title}}</span>\n        </h1>\n        <ul class=\"nglp-menu\">\n          <li class=\"nglp-menu__item\" *ngFor=\"let menu of data.menues\">\n            <a [href]=\"menu.url\" target=\"_blank\">{{menu.label}}</a>\n          </li>\n          <li *ngIf=\"data.account?.gitHub\" class=\"nglp-menu__item\">\n            <a [href]=\"data.account?.gitHub\" target=\"_blank\">\n              <fa-icon [icon]=\"faGithub\"></fa-icon>\n              GitHub\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n\n  <section *ngIf=\"data.contents.hero\" class=\"nglp-hero\" [style.background-image]=\"'url(' + data.contents.hero.coverURL + ')' | safe:'style'\">\n    <div class=\"nglp-hero__wrap\">\n      <div class=\"nglp-container\">\n        <p *ngIf=\"data.contents.hero.mainText\" class=\"nglp-hero__main-text\">{{data.contents.hero.mainText}}</p>\n        <p *ngIf=\"data.contents.hero.subText\" class=\"nglp-hero__sub-text\">{{data.contents.hero.subText}}</p>\n        <ng-container *ngIf=\"data.contents.hero.actionLabel\">\n          <a *ngIf=\"data.contents.hero.actionURL\" target=\"_blank\" [href]=\"data.contents.hero.actionURL\" class=\"nglp-btn nglp-btn--white\">\n            {{data.contents.hero.actionLabel}}\n          </a>\n          <button *ngIf=\"!data.contents.hero.actionURL\" (click)=\"action()\" class=\"nglp-btn nglp-btn--white\">\n            {{data.contents.hero.actionLabel}}\n          </button>\n        </ng-container>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.concept as concept\">\n    <div class=\"nglp-container\">\n      <div class=\"nglp-concept\" [class.nglp-concept--single]=\"!concept.clipURL\">\n        <figure *ngIf=\"concept.clipURL\" class=\"nglp-concept__image\">\n          <img [src]=\"concept.clipURL\" alt=\"\">\n        </figure>\n        <div class=\"nglp-concept__body\">\n          <h2 class=\"nglp-concept__title\">{{concept.title}}</h2>\n          <p class=\"nglp-concept__description\">{{concept.description}}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section [innerHTML]=\"data.contents.customSection\" *ngIf=\"data.contents.customSection\"></section>\n\n  <section class=\"nglp-section nglp-section--light\" *ngIf=\"data.contents.features\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">FEATURES</h2>\n      <div class=\"nglp-grid nglp-grid--4\">\n        <div class=\"nglp-feature\" *ngFor=\"let feature of data.contents.features\">\n          <figure class=\"nglp-feature__thumbnail\" [style.background-image]=\"'url(' + feature.imageURL + ')' | safe:'style'\"></figure>\n          <h3 class=\"nglp-feature__title\">{{feature.title}}</h3>\n          <p class=\"nglp-feature__description\">{{feature.description}}</p>\n          <p *ngIf=\"feature.actionLabel\" class=\"nglp-feature__link\">\n            <a [href]=\"feature.actionURL\" target=\"_blank\">\n              {{feature.actionLabel}}\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.services\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">SERVICES</h2>\n      <div class=\"nglp-grid nglp-grid--4\">\n        <div class=\"nglp-service\" *ngFor=\"let service of data.contents.services\">\n          <figure class=\"nglp-service__thumbnail\" [style.background-image]=\"'url(' + service.imageURL + ')' | safe:'style'\"></figure>\n          <h3 class=\"nglp-service__title\">{{service.title}}</h3>\n          <p class=\"nglp-service__description\">{{service.description}}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section nglp-section--fill\" *ngIf=\"data.contents.faqs\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">Q&A</h2>\n      <div class=\"nglp-grid nglp-grid--2\">\n        <dl class=\"nglp-faq\" *ngFor=\"let faq of data.contents.faqs\">\n          <dt class=\"nglp-faq__question\">{{faq.question}}</dt>\n          <dd class=\"nglp-faq__answer\">{{faq.answer}}</dd>\n        </dl>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.faqs\">\n    <div class=\"nglp-container\">\n      <div class=\"nglp-media-wrap\">\n        <div class=\"nglp-media\" *ngFor=\"let media of data.contents.medias\">\n          <a [href]=\"media.website\" *ngIf=\"media.website\" target=\"_blank\">\n            <img [src]=\"media.logoURL\" [alt]=\"media.name\">\n          </a>\n          <img *ngIf=\"!media.website\" [src]=\"media.logoURL\" [alt]=\"media.name\">\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.voices\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">VOICES</h2>\n      <div class=\"nglp-grid nglp-grid--3\">\n        <div class=\"nglp-voice\" *ngFor=\"let voice of data.contents.voices\">\n          <figure class=\"nglp-voice__thumbnail\" [style.background-image]=\"'url(' + voice.photoURL + ')' | safe:'style'\"></figure>\n          <div class=\"nglp-voice__body\">\n            <p class=\"nglp-voice__name\">{{voice.name}}</p>\n            <p class=\"nglp-voice__position\">{{voice.position}}</p>\n            <p class=\"nglp-voice__comment\">{{voice.comment}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.conversion as conversion\">\n    <p *ngIf=\"conversion.lead\">{{conversion.lead}}</p>\n    <div>\n      <a [href]=\"conversion.url\" class=\"btn\">{{conversion.label}}</a>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.account as account\">\n    <ul class=\"nglp-follow\">\n      <li class=\"nglp-follow__item\" *ngIf=\"account.gitHub\">\n        <a [href]=\"account.gitHub\" target=\"_blank\">\n          <fa-icon [icon]=\"faGithub\"></fa-icon>\n        </a>\n      </li>\n      <li class=\"nglp-follow__item\" *ngIf=\"account.twitter\">\n        <a [href]=\"account.twitter\" target=\"_blank\">\n          <fa-icon [icon]=\"faTwitter\"></fa-icon>\n        </a>\n      </li>\n      <li class=\"nglp-follow__item\" *ngIf=\"account.facebook\">\n        <a [href]=\"account.facebook\" target=\"_blank\">\n          <fa-icon [icon]=\"faFacebook\"></fa-icon>\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <footer class=\"nglp-footer\">\n    <div class=\"nglp-container\">\n      <ul class=\"nglp-footer-attributions\" *ngIf=\"data.attributions as attributions\">\n        <li class=\"nglp-footer-attributions__item\" *ngFor=\"let attribution of attributions\" [innerHTML]=\"attribution\"></li>\n      </ul>\n      <ul class=\"nglp-footer-accounts\" *ngIf=\"data.account\">\n        <li *ngIf=\"data.account.gitHub\" class=\"nglp-footer-accounts__item\">\n          <a [href]=\"data.account.gitHub\" target=\"_blank\"><fa-icon [icon]=\"faGithub\"></fa-icon></a>\n        </li>\n        <li *ngIf=\"data.account.facebook\" class=\"nglp-footer-accounts__item\">\n          <a [href]=\"data.account.facebook\" target=\"_blank\"><fa-icon [icon]=\"faFacebook\"></fa-icon></a>\n        </li>\n        <li *ngIf=\"data.account.twitter\" class=\"nglp-footer-accounts__item\">\n          <a [href]=\"data.account.twitter\" target=\"_blank\"><fa-icon [icon]=\"faTwitter\"></fa-icon></a>\n        </li>\n      </ul>\n      <div class=\"footer-bottom\">\n        <p class=\"nglp-footer__logo\">\n          <img *ngIf=\"data.logoURL\" [src]=\"data.logoURL\" alt=\"data.title\">\n          <span *ngIf=\"!data.logoURL\">{{data.title}}</span>\n        </p>\n        <p class=\"nglp-footer__copyright\"><small>&copy; {{data.owner}}</small></p>\n      </div>\n    </div>\n  </footer>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Noto+Sans+JP);a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.nglp-root{color:rgba(0,0,0,.83);font-size:14px;line-height:1.8;font-family:'Noto Sans JP',sans-serif}a{text-decoration:none;color:inherit}img{max-width:100%;vertical-align:bottom}button,input,select,textarea{outline:0}.nglp-container{max-width:1300px;padding:0 24px;margin:0 auto}.nglp-grid{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;grid-gap:48px 24px}.nglp-grid--1{-ms-grid-columns:(1fr)[1];grid-template-columns:repeat(1,1fr)}.nglp-grid--2{-ms-grid-columns:(1fr)[2];grid-template-columns:repeat(2,1fr)}.nglp-grid--3{-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}.nglp-grid--4{-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4,1fr)}.nglp-grid--5{-ms-grid-columns:(1fr)[5];grid-template-columns:repeat(5,1fr)}.nglp-grid--6{-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}.nglp-grid--7{-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr)}.nglp-grid--8{-ms-grid-columns:(1fr)[8];grid-template-columns:repeat(8,1fr)}.nglp-grid--9{-ms-grid-columns:(1fr)[9];grid-template-columns:repeat(9,1fr)}.nglp-grid--10{-ms-grid-columns:(1fr)[10];grid-template-columns:repeat(10,1fr)}.nglp-grid--11{-ms-grid-columns:(1fr)[11];grid-template-columns:repeat(11,1fr)}.nglp-grid--12{-ms-grid-columns:(1fr)[12];grid-template-columns:repeat(12,1fr)}.nglp-header{line-height:64px;color:#fff;position:relative;z-index:10}.nglp-header__wrap{display:flex;justify-content:space-between}.nglp-header__logo{font-size:32px;font-weight:700;letter-spacing:2px}.nglp-menu{display:flex}.nglp-menu__item a{padding:0 16px}.nglp-menu__item a .ng-fa-icon{font-size:24px;vertical-align:-4px;margin-right:8px;display:inline-block}.nglp-section{padding:120px 0;background:center/cover;position:relative}.nglp-section:nth-child(even){background:#fafafa}.nglp-btn{border-radius:30px;line-height:56px;border:2px solid rgba(0,0,0,.83);display:inline-block;padding:0 48px;min-width:100px;text-align:center;letter-spacing:2px;font-size:16px;cursor:pointer}.nglp-btn--white{color:#fff;background:0 0;border-color:#fff}.nglp-hdg{text-align:center;font-weight:700;font-size:32px;margin-bottom:80px;letter-spacing:2px}.nglp-hero{height:700px;display:flex;align-items:center;background:center/cover;color:#fff;margin-top:-64px;position:relative}.nglp-hero:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(0,0,0,.83) 0,rgba(0,0,0,0) 100%)}.nglp-hero__wrap{width:100%;position:relative;z-index:10}.nglp-hero__main-text{font-size:40px;font-weight:700;margin-bottom:24px;line-height:64px;max-width:800px}.nglp-hero__sub-text{font-size:24px;line-height:1.8;margin-bottom:32px;max-width:800px;opacity:.83}.nglp-feature{text-align:center;padding:16px}.nglp-feature__thumbnail{width:120px;height:120px;border-radius:3px;background:center/contain no-repeat;margin:0 auto 16px}.nglp-feature__title{font-size:16px;line-height:1.8;font-weight:700;margin-bottom:8px}.nglp-feature__description{color:rgba(0,0,0,.6)}.nglp-feature__link{margin-top:8px;text-align:right;color:#1976d2;text-decoration:underline}.nglp-service{text-align:center}.nglp-service__thumbnail{width:120px;height:120px;border-radius:50%;background:center/cover;margin:0 auto 16px}.nglp-service__title{font-size:16px;font-weight:700;margin-bottom:16px}.nglp-voice{display:flex}.nglp-voice__thumbnail{width:80px;height:80px;border-radius:50%;background:center/cover;margin-right:16px}.nglp-voice__body{flex:1}.nglp-voice__name{font-size:16px;font-weight:700;margin-bottom:8px;line-height:1}.nglp-voice__position{color:rgba(0,0,0,.6);margin-bottom:8px;font-size:13px}.nglp-voice__comment{line-height:1.6}.nglp-faq__question{font-weight:700;font-size:16px;margin-bottom:8px}.nglp-faq__answer{font-size:14px}.nglp-media-wrap{display:flex;justify-content:center;margin:-24px;flex-wrap:wrap}.nglp-media{text-align:center;margin:24px}.nglp-media img{height:80px;-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:.32}.nglp-concept{margin:0 auto;display:flex;align-items:center;justify-content:center;max-width:1000px}.nglp-concept__image{text-align:center;padding-right:40px}.nglp-concept__image img{max-width:450px;max-height:320px}.nglp-concept__body{flex:1}.nglp-concept__title{font-size:32px;margin-bottom:24px;font-weight:700;line-height:1.6}.nglp-concept__description{line-height:32px;font-size:16px;letter-spacing:2px}.nglp-concept--single{text-align:center}.nglp-follow{text-align:center;display:flex;justify-content:center}.nglp-follow__item{padding:0 40px;font-size:40px;line-height:1}.nglp-footer{padding:40px 0;overflow:hidden;color:#fff;background:#23232f}.nglp-footer__logo{letter-spacing:2px;font-weight:700;font-size:24px;line-height:1}.nglp-footer__copyright{opacity:.6}.nglp-footer-accounts{display:flex;margin-bottom:24px;line-height:1}.nglp-footer-accounts__item{font-size:24px;margin-right:16px;opacity:.6}.footer-bottom{display:flex;justify-content:space-between}.nglp-footer-attributions{margin-bottom:16px}.nglp-footer-attributions__item{margin-bottom:8px;opacity:.32}:host ::ng-deep a{color:inherit}"]
            }] }
];
/** @nocollapse */
NgLpComponent.ctorParameters = () => [];
NgLpComponent.propDecorators = {
    handleClickAction: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgLpComponent.prototype.handleClickAction;
    /** @type {?} */
    NgLpComponent.prototype.data;
    /** @type {?} */
    NgLpComponent.prototype.faGithub;
    /** @type {?} */
    NgLpComponent.prototype.faTwitter;
    /** @type {?} */
    NgLpComponent.prototype.faFacebook;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbHAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlZXItaW5jL25nLWxwLyIsInNvdXJjZXMiOlsibGliL25nLWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBRVgsTUFBTSxvQ0FBb0MsQ0FBQztBQU81QyxNQUFNLE9BQU8sYUFBYTtJQVN4QjtRQVBVLHNCQUFpQixHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBR2pGLGFBQVEsR0FBbUIsUUFBUSxDQUFDO1FBQ3BDLGNBQVMsR0FBbUIsU0FBUyxDQUFDO1FBQ3RDLGVBQVUsR0FBbUIsVUFBVSxDQUFDO0lBRXhCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLG03UEFBcUM7O2FBRXRDOzs7OztnQ0FHRSxNQUFNO21CQUNOLEtBQUs7Ozs7SUFETiwwQ0FBaUY7O0lBQ2pGLDZCQUFrQjs7SUFFbEIsaUNBQW9DOztJQUNwQyxrQ0FBc0M7O0lBQ3RDLG1DQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExwIH0gZnJvbSAnLi9scCc7XG5pbXBvcnQge1xuICBmYUdpdGh1YixcbiAgZmFUd2l0dGVyLFxuICBmYUZhY2Vib29rLFxuICBJY29uRGVmaW5pdGlvblxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctbHAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctbHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy1scC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ0xwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAT3V0cHV0KCkgaGFuZGxlQ2xpY2tBY3Rpb246IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgZGF0YTogTHA7XG5cbiAgZmFHaXRodWI6IEljb25EZWZpbml0aW9uID0gZmFHaXRodWI7XG4gIGZhVHdpdHRlcjogSWNvbkRlZmluaXRpb24gPSBmYVR3aXR0ZXI7XG4gIGZhRmFjZWJvb2s6IEljb25EZWZpbml0aW9uID0gZmFGYWNlYm9vaztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgYWN0aW9uKCkge1xuICAgIHRoaXMuaGFuZGxlQ2xpY2tBY3Rpb24uZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==