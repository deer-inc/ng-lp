(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-lp/fesm5/deer-inc-ng-lp.js":
/*!********************************************!*\
  !*** ./dist/ng-lp/fesm5/deer-inc-ng-lp.js ***!
  \********************************************/
/*! exports provided: NgLpModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgLpModule", function() { return NgLpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgLpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! safe-pipe */ "./node_modules/safe-pipe/index.js");
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(safe_pipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgLpComponent = /** @class */ (function () {
    function NgLpComponent() {
        this.handleClickAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faFacebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"];
    }
    /**
     * @return {?}
     */
    NgLpComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NgLpComponent.prototype.action = /**
     * @return {?}
     */
    function () {
        this.handleClickAction.emit();
    };
    NgLpComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-lp',
                    template: "<div class=\"nglp-root\" *ngIf=\"data\">\n  <header class=\"nglp-header\">\n    <div class=\"nglp-container\">\n      <div class=\"nglp-header__wrap\">\n        <h1 class=\"nglp-header__logo\">\n          <img src=\"\" [alt]=\"data.title\" *ngIf=\"data.logoURL\">\n          <span *ngIf=\"!data.logoURL\">{{data.title}}</span>\n        </h1>\n        <ul class=\"nglp-menu\">\n          <li class=\"nglp-menu__item\" *ngFor=\"let menu of data.menues\">\n            <a [href]=\"menu.url\" target=\"_blank\">{{menu.label}}</a>\n          </li>\n          <li *ngIf=\"data.account?.gitHub\" class=\"nglp-menu__item\">\n            <a [href]=\"data.account?.gitHub\" target=\"_blank\">\n              <fa-icon [icon]=\"faGithub\"></fa-icon>\n              GitHub\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </header>\n\n  <section *ngIf=\"data.contents.hero\" class=\"nglp-hero\" [style.background-image]=\"'url(' + data.contents.hero.coverURL + ')' | safe:'style'\">\n    <div class=\"nglp-hero__wrap\">\n      <div class=\"nglp-container\">\n        <p *ngIf=\"data.contents.hero.mainText\" class=\"nglp-hero__main-text\">{{data.contents.hero.mainText}}</p>\n        <p *ngIf=\"data.contents.hero.subText\" class=\"nglp-hero__sub-text\">{{data.contents.hero.subText}}</p>\n        <ng-container *ngIf=\"data.contents.hero.actionLabel\">\n          <a *ngIf=\"data.contents.hero.actionURL\" target=\"_blank\" [href]=\"data.contents.hero.actionURL\" class=\"nglp-btn nglp-btn--white\">\n            {{data.contents.hero.actionLabel}}\n          </a>\n          <button *ngIf=\"!data.contents.hero.actionURL\" (click)=\"action()\" class=\"nglp-btn nglp-btn--white\">\n            {{data.contents.hero.actionLabel}}\n          </button>\n        </ng-container>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.concept as concept\">\n    <div class=\"nglp-container\">\n      <div class=\"nglp-concept\" [class.nglp-concept--single]=\"!concept.clipURL\">\n        <figure *ngIf=\"concept.clipURL\" class=\"nglp-concept__image\">\n          <img [src]=\"concept.clipURL\" alt=\"\">\n        </figure>\n        <div class=\"nglp-concept__body\">\n          <h2 class=\"nglp-concept__title\">{{concept.title}}</h2>\n          <p class=\"nglp-concept__description\">{{concept.description}}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section [innerHTML]=\"data.contents.customSection\" *ngIf=\"data.contents.customSection\"></section>\n\n  <section class=\"nglp-section nglp-section--light\" *ngIf=\"data.contents.features\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">FEATURES</h2>\n      <div class=\"nglp-grid nglp-grid--4\">\n        <div class=\"nglp-feature\" *ngFor=\"let feature of data.contents.features\">\n          <figure class=\"nglp-feature__thumbnail\" [style.background-image]=\"'url(' + feature.imageURL + ')' | safe:'style'\"></figure>\n          <h3 class=\"nglp-feature__title\">{{feature.title}}</h3>\n          <p class=\"nglp-feature__description\">{{feature.description}}</p>\n          <p *ngIf=\"feature.actionLabel\" class=\"nglp-feature__link\">\n            <a [href]=\"feature.actionURL\" target=\"_blank\">\n              {{feature.actionLabel}}\n            </a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.services\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">SERVICES</h2>\n      <div class=\"nglp-grid nglp-grid--4\">\n        <div class=\"nglp-service\" *ngFor=\"let service of data.contents.services\">\n          <figure class=\"nglp-service__thumbnail\" [style.background-image]=\"'url(' + service.imageURL + ')' | safe:'style'\"></figure>\n          <h3 class=\"nglp-service__title\">{{service.title}}</h3>\n          <p class=\"nglp-service__description\">{{service.description}}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section nglp-section--fill\" *ngIf=\"data.contents.faqs\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">Q&A</h2>\n      <div class=\"nglp-grid nglp-grid--2\">\n        <dl class=\"nglp-faq\" *ngFor=\"let faq of data.contents.faqs\">\n          <dt class=\"nglp-faq__question\">{{faq.question}}</dt>\n          <dd class=\"nglp-faq__answer\">{{faq.answer}}</dd>\n        </dl>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.faqs\">\n    <div class=\"nglp-container\">\n      <div class=\"nglp-media-wrap\">\n        <div class=\"nglp-media\" *ngFor=\"let media of data.contents.medias\">\n          <a [href]=\"media.website\" *ngIf=\"media.website\" target=\"_blank\">\n            <img [src]=\"media.logoURL\" [alt]=\"media.name\">\n          </a>\n          <img *ngIf=\"!media.website\" [src]=\"media.logoURL\" [alt]=\"media.name\">\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.voices\">\n    <div class=\"nglp-container\">\n      <h2 class=\"nglp-hdg\">VOICES</h2>\n      <div class=\"nglp-grid nglp-grid--3\">\n        <div class=\"nglp-voice\" *ngFor=\"let voice of data.contents.voices\">\n          <figure class=\"nglp-voice__thumbnail\" [style.background-image]=\"'url(' + voice.photoURL + ')' | safe:'style'\"></figure>\n          <div class=\"nglp-voice__body\">\n            <p class=\"nglp-voice__name\">{{voice.name}}</p>\n            <p class=\"nglp-voice__position\">{{voice.position}}</p>\n            <p class=\"nglp-voice__comment\">{{voice.comment}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.contents.conversion as conversion\">\n    <p *ngIf=\"conversion.lead\">{{conversion.lead}}</p>\n    <div>\n      <a [href]=\"conversion.url\" class=\"btn\">{{conversion.label}}</a>\n    </div>\n  </section>\n\n  <section class=\"nglp-section\" *ngIf=\"data.account as account\">\n    <ul class=\"nglp-follow\">\n      <li class=\"nglp-follow__item\" *ngIf=\"account.gitHub\">\n        <a [href]=\"account.gitHub\" target=\"_blank\">\n          <fa-icon [icon]=\"faGithub\"></fa-icon>\n        </a>\n      </li>\n      <li class=\"nglp-follow__item\" *ngIf=\"account.twitter\">\n        <a [href]=\"account.twitter\" target=\"_blank\">\n          <fa-icon [icon]=\"faTwitter\"></fa-icon>\n        </a>\n      </li>\n      <li class=\"nglp-follow__item\" *ngIf=\"account.facebook\">\n        <a [href]=\"account.facebook\" target=\"_blank\">\n          <fa-icon [icon]=\"faFacebook\"></fa-icon>\n        </a>\n      </li>\n    </ul>\n  </section>\n\n  <footer class=\"nglp-footer\">\n    <div class=\"nglp-container\">\n      <ul class=\"nglp-footer-attributions\" *ngIf=\"data.attributions as attributions\">\n        <li class=\"nglp-footer-attributions__item\" *ngFor=\"let attribution of attributions\" [innerHTML]=\"attribution\"></li>\n      </ul>\n      <ul class=\"nglp-footer-accounts\" *ngIf=\"data.account\">\n        <li *ngIf=\"data.account.gitHub\" class=\"nglp-footer-accounts__item\">\n          <a [href]=\"data.account.gitHub\" target=\"_blank\"><fa-icon [icon]=\"faGithub\"></fa-icon></a>\n        </li>\n        <li *ngIf=\"data.account.facebook\" class=\"nglp-footer-accounts__item\">\n          <a [href]=\"data.account.facebook\" target=\"_blank\"><fa-icon [icon]=\"faFacebook\"></fa-icon></a>\n        </li>\n        <li *ngIf=\"data.account.twitter\" class=\"nglp-footer-accounts__item\">\n          <a [href]=\"data.account.twitter\" target=\"_blank\"><fa-icon [icon]=\"faTwitter\"></fa-icon></a>\n        </li>\n      </ul>\n      <div class=\"footer-bottom\">\n        <p class=\"nglp-footer__logo\">\n          <img *ngIf=\"data.logoURL\" [src]=\"data.logoURL\" alt=\"data.title\">\n          <span *ngIf=\"!data.logoURL\">{{data.title}}</span>\n        </p>\n        <p class=\"nglp-footer__copyright\"><small>&copy; {{data.owner}}</small></p>\n      </div>\n    </div>\n  </footer>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Noto+Sans+JP);a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.nglp-root{color:rgba(0,0,0,.83);font-size:14px;line-height:1.8;font-family:'Noto Sans JP',sans-serif}a{text-decoration:none;color:inherit}img{max-width:100%;vertical-align:bottom}button,input,select,textarea{outline:0}.nglp-container{max-width:1300px;padding:0 24px;margin:0 auto}.nglp-grid{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;grid-gap:48px 24px}.nglp-grid--1{-ms-grid-columns:(1fr)[1];grid-template-columns:repeat(1,1fr)}.nglp-grid--2{-ms-grid-columns:(1fr)[2];grid-template-columns:repeat(2,1fr)}.nglp-grid--3{-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}.nglp-grid--4{-ms-grid-columns:(1fr)[4];grid-template-columns:repeat(4,1fr)}.nglp-grid--5{-ms-grid-columns:(1fr)[5];grid-template-columns:repeat(5,1fr)}.nglp-grid--6{-ms-grid-columns:(1fr)[6];grid-template-columns:repeat(6,1fr)}.nglp-grid--7{-ms-grid-columns:(1fr)[7];grid-template-columns:repeat(7,1fr)}.nglp-grid--8{-ms-grid-columns:(1fr)[8];grid-template-columns:repeat(8,1fr)}.nglp-grid--9{-ms-grid-columns:(1fr)[9];grid-template-columns:repeat(9,1fr)}.nglp-grid--10{-ms-grid-columns:(1fr)[10];grid-template-columns:repeat(10,1fr)}.nglp-grid--11{-ms-grid-columns:(1fr)[11];grid-template-columns:repeat(11,1fr)}.nglp-grid--12{-ms-grid-columns:(1fr)[12];grid-template-columns:repeat(12,1fr)}.nglp-header{line-height:64px;color:#fff;position:relative;z-index:10}.nglp-header__wrap{display:flex;justify-content:space-between}.nglp-header__logo{font-size:32px;font-weight:700;letter-spacing:2px}.nglp-menu{display:flex}.nglp-menu__item a{padding:0 16px}.nglp-menu__item a .ng-fa-icon{font-size:24px;vertical-align:-4px;margin-right:8px;display:inline-block}.nglp-section{padding:120px 0;background:center/cover;position:relative}.nglp-section:nth-child(even){background:#fafafa}.nglp-btn{border-radius:30px;line-height:56px;border:2px solid rgba(0,0,0,.83);display:inline-block;padding:0 48px;min-width:100px;text-align:center;letter-spacing:2px;font-size:16px;cursor:pointer}.nglp-btn--white{color:#fff;background:0 0;border-color:#fff}.nglp-hdg{text-align:center;font-weight:700;font-size:32px;margin-bottom:80px;letter-spacing:2px}.nglp-hero{height:700px;display:flex;align-items:center;background:center/cover;color:#fff;margin-top:-64px;position:relative}.nglp-hero:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,rgba(0,0,0,.83) 0,rgba(0,0,0,0) 100%)}.nglp-hero__wrap{width:100%;position:relative;z-index:10}.nglp-hero__main-text{font-size:40px;font-weight:700;margin-bottom:24px;line-height:64px;max-width:800px}.nglp-hero__sub-text{font-size:24px;line-height:1.8;margin-bottom:32px;max-width:800px;opacity:.83}.nglp-feature{text-align:center;padding:16px}.nglp-feature__thumbnail{width:120px;height:120px;border-radius:3px;background:center/contain no-repeat;margin:0 auto 16px}.nglp-feature__title{font-size:16px;line-height:1.8;font-weight:700;margin-bottom:8px}.nglp-feature__description{color:rgba(0,0,0,.6)}.nglp-feature__link{margin-top:8px;text-align:right;color:#1976d2;text-decoration:underline}.nglp-service{text-align:center}.nglp-service__thumbnail{width:120px;height:120px;border-radius:50%;background:center/cover;margin:0 auto 16px}.nglp-service__title{font-size:16px;font-weight:700;margin-bottom:16px}.nglp-voice{display:flex}.nglp-voice__thumbnail{width:80px;height:80px;border-radius:50%;background:center/cover;margin-right:16px}.nglp-voice__body{flex:1}.nglp-voice__name{font-size:16px;font-weight:700;margin-bottom:8px;line-height:1}.nglp-voice__position{color:rgba(0,0,0,.6);margin-bottom:8px;font-size:13px}.nglp-voice__comment{line-height:1.6}.nglp-faq__question{font-weight:700;font-size:16px;margin-bottom:8px}.nglp-faq__answer{font-size:14px}.nglp-media-wrap{display:flex;justify-content:center;margin:-24px;flex-wrap:wrap}.nglp-media{text-align:center;margin:24px}.nglp-media img{height:80px;-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:.32}.nglp-concept{margin:0 auto;display:flex;align-items:center;justify-content:center;max-width:1000px}.nglp-concept__image{text-align:center;padding-right:40px}.nglp-concept__image img{max-width:450px;max-height:320px}.nglp-concept__body{flex:1}.nglp-concept__title{font-size:32px;margin-bottom:24px;font-weight:700;line-height:1.6}.nglp-concept__description{line-height:32px;font-size:16px;letter-spacing:2px}.nglp-concept--single{text-align:center}.nglp-follow{text-align:center;display:flex;justify-content:center}.nglp-follow__item{padding:0 40px;font-size:40px;line-height:1}.nglp-footer{padding:40px 0;overflow:hidden;color:#fff;background:#23232f}.nglp-footer__logo{letter-spacing:2px;font-weight:700;font-size:24px;line-height:1}.nglp-footer__copyright{opacity:.6}.nglp-footer-accounts{display:flex;margin-bottom:24px;line-height:1}.nglp-footer-accounts__item{font-size:24px;margin-right:16px;opacity:.6}.footer-bottom{display:flex;justify-content:space-between}.nglp-footer-attributions{margin-bottom:16px}.nglp-footer-attributions__item{margin-bottom:8px;opacity:.32}:host ::ng-deep a{color:inherit}"]
                }] }
    ];
    /** @nocollapse */
    NgLpComponent.ctorParameters = function () { return []; };
    NgLpComponent.propDecorators = {
        handleClickAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgLpComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgLpModule = /** @class */ (function () {
    function NgLpModule() {
    }
    NgLpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [NgLpComponent],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        safe_pipe__WEBPACK_IMPORTED_MODULE_3__["SafePipeModule"],
                        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
                    ],
                    exports: [NgLpComponent]
                },] }
    ];
    return NgLpModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=deer-inc-ng-lp.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-lp (handleClickAction)=\"action()\" [data]=\"data\"></ng-lp>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var faker_locale_ja__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker/locale/ja */ "./node_modules/faker/locale/ja.js");
/* harmony import */ var faker_locale_ja__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker_locale_ja__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.data = {
            title: 'NGLP',
            owner: 'Deer, Inc',
            attributions: [
                'Free Vectors via <a target="_blank" href="https://www.vecteezy.com/">vecteezy.com</a>'
            ],
            account: {
                gitHub: 'https://github.com/deer-inc/ng-lp',
                twitter: 'https://twitter.com/d151005'
            },
            menues: [
                {
                    label: 'ドキュメント',
                    url: 'https://github.com/deer-inc/ng-lp/wiki'
                }
            ],
            contents: {
                hero: {
                    mainText: 'データをわたせば、できあがり。',
                    subText: '５分でLPが作れる、Angularライブラリ',
                    actionLabel: 'デモを見る',
                    coverURL: './assets/hero.jpg'
                },
                concept: {
                    title: 'モダンなLPをサクッと作りたいあなたに',
                    description: 'OSSやMVPを作ったあと、その魅力を伝えるLPが必要になります。このライブラリを使えば必要な項目をデータで渡すだけでLPが完成します。このページもNGLPで作られています。',
                    clipURL: './assets/concept.png'
                },
                features: [
                    {
                        imageURL: './assets/octocat.png',
                        title: 'オープンソース',
                        description: 'NGLPはオープンソース(OSS)です。PRは常に歓迎されています。バグや要望があれば気軽にIssueを立ててください。',
                        actionLabel: 'GitHubリポジトリ',
                        actionURL: 'https://github.com/deer-inc/ng-lp'
                    },
                    {
                        imageURL: './assets/mit.png',
                        title: 'MITライセンス',
                        description: 'MITライセンスなので商用利用はもちろん、自由に複製、改変をすることができます。もちろん無料です。',
                    },
                    {
                        imageURL: './assets/blocks.svg',
                        title: '豊富なセクション',
                        description: 'メインビジュアル、ユーザーボイス、メディア掲載、特徴やコンセプトなど頻出セクションを網羅しています。',
                    },
                    {
                        imageURL: './assets/material.png',
                        title: 'マテリアルデザイン',
                        description: 'マテリアルデザインとWeb標準に沿ったRWD設計なので、高い閲覧性が担保されています。',
                    },
                    {
                        imageURL: './assets/customize.svg',
                        title: '柔軟なカスタマイズ',
                        description: 'カスタムセクションの追加やデザインカスタマイズが可能です。',
                    },
                    {
                        imageURL: './assets/bracket.svg',
                        title: 'シンプルなインターフェイス',
                        description: '決まったフォーマットでデータをバインドするだけなので、学習コストは一切必要ありません。',
                    },
                    {
                        imageURL: './assets/lightweight.svg',
                        title: '軽量なライブラリ',
                        description: '依存ライブラリを削った軽量なライブラリなので低コストで導入できます。',
                    },
                    {
                        imageURL: './assets/shield.svg',
                        title: '堅牢なメンテナンス',
                        description: '営利企業で実際に採用されているライブラリなので、恒久的にリリース可能なクオリティでメンテナンスされます。',
                    },
                ],
                medias: [
                    {
                        name: '株式会社Deer',
                        logoURL: './assets/deer.svg',
                        website: 'https://deer.co.jp'
                    }
                ],
                faqs: [
                    {
                        question: 'Pull Requestは受け付けていますか？',
                        answer: 'はい。Pull Request以外に、機能追加の要望やバグ報告のIssueも大歓迎です 🥳',
                    },
                    {
                        question: 'どんな外部リソースに依存していますか？',
                        answer: '現時点ではFontAwesomeやGoogle Noto Sansのみです。',
                    },
                    {
                        question: 'テンプレートは増やせますか？',
                        answer: 'はい。新しいデザインテンプレートだけでなくセクションの追加やデザインテンプレートのブラッシュアップも大歓迎です。',
                    },
                    {
                        question: 'どういうシーンで使うものですか？',
                        answer: '特にAngularでOSSやMVPを作ったとき、その入り口となるLPが必要になります。HTML, CSSコーディングをしなくてもそれがサクッと作れるようにNGLPを作りました。',
                    },
                ],
                voices: this.getVoices(6),
            }
        };
    }
    AppComponent.prototype.getVoices = function (count) {
        var result = [];
        while (count--) {
            result.push({
                name: faker_locale_ja__WEBPACK_IMPORTED_MODULE_2__["name"].lastName() + ' ' + faker_locale_ja__WEBPACK_IMPORTED_MODULE_2__["name"].firstName(),
                position: faker_locale_ja__WEBPACK_IMPORTED_MODULE_2__["name"].jobTitle(),
                photoURL: faker_locale_ja__WEBPACK_IMPORTED_MODULE_2__["image"].avatar(),
                comment: faker_locale_ja__WEBPACK_IMPORTED_MODULE_2__["lorem"].lines(3)
            });
        }
        return result;
    };
    AppComponent.prototype.action = function () {
        // ...
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_lp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lp */ "./dist/ng-lp/fesm5/deer-inc-ng-lp.js");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_lp__WEBPACK_IMPORTED_MODULE_4__["NgLpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/deer-inc/ng-lp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map