webpackJsonp([8],{

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingPageModule", function() { return landingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var landingPageModule = (function () {
    function landingPageModule() {
    }
    return landingPageModule;
}());
landingPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* landingPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* landingPage */])],
        exports: [__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* landingPage */]]
    })
], landingPageModule);

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen. 
//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return landingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(134);
// This is the landing page for the application.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var landingPage = (function () {
    function landingPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    landingPage.prototype.signIn = function () {
        this.navCtrl.push('LoginPage');
    };
    landingPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    return landingPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], landingPage.prototype, "uname", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], landingPage.prototype, "password", void 0);
landingPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({ name: 'landingPage' }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-landing',template:/*ion-inline-start:"C:\Users\Sampsa\Documents\GitHub\TabletopHelper\src\pages\landing\landing.html"*/'<!-- This is the landing page for the application -->\n\n<ion-slides pager>\n\n    <ion-slide class="bg-image" style="background-image: url(\'../assets/images/home.jpg\')">\n    <div class="titlebox">\n    <h1 style="color: #ebebeb">TableTopHelper</h1>\n    <h5 style="color: #ebebeb">For better experiences</h5>\n  </div>\n    <div style="position:absolute; bottom: 120px; text-align:center; z-index:1000; width:100%">\n        <button ion-button (click)="signIn()" item-left>Sign In</button>\n        <button ion-button (click)="register()" item-left>Register</button>\n    </div>\n  </ion-slide>\n\n  <ion-slide class="bg-image" style="background-image: url(\'../assets/images/dice.jpg\')">\n    <ion-icon ios="ios-help-circle" md="ios-help-circle" style="zoom:5.0;"></ion-icon>\n    <div class="titlebox">\n    <h1 style="color: #ebebeb">Dice</h1>\n    <h5 style="color: #ebebeb">Roll a dice of any size</h5>\n  </div>\n  </ion-slide>\n\n  <ion-slide class="bg-image" style="background-image: url(\'../assets/images/initiative.jpg\')">\n    <ion-icon ios="ios-people" md="ios-people" style="zoom:5.0;"></ion-icon>\n    <div class="titlebox">\n    <h1 style="color: #ebebeb">Initiative</h1>\n    <h5 style="color: #ebebeb">Choose who goes first</h5>\n  </div>\n  </ion-slide>\n\n  <ion-slide class="bg-image" style="background-image: url(\'../assets/images/timer.jpg\')">\n    <ion-icon ios="ios-stopwatch" md="ios-stopwatch" style="zoom:5.0;"></ion-icon>\n    <div class="titlebox">\n    <h1 style="color: #ebebeb">Timer</h1>\n    <h5 style="color: #ebebeb">Play against time</h5>\n  </div>\n  </ion-slide>\n\n</ion-slides>\n\n<!-- This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen. -->'/*ion-inline-end:"C:\Users\Sampsa\Documents\GitHub\TabletopHelper\src\pages\landing\landing.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */]])
], landingPage);

// This file is part of the TabletopHelper application developed by Sampsa Kares, Saku Junni, Asko Mikkola, Joel Koskelainen. 
//# sourceMappingURL=landing.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map