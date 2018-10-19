(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-me-wrapper\">\r\n    <h1 [@routerTransitionRight]>About Me</h1>\r\n    <h3>This is my website I made using Angular, hope ya like it</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  padding-top: 5%;\n  font-size: 5em; }\n\n.about-me-wrapper {\n  background-color: #4BBFC3;\n  height: 100vh;\n  text-align: center; }\n\nh3 {\n  padding-top: 10%; }\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/about-me/about-me.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToRight"])()]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hobbies/hobbies.component */ "./src/app/hobbies/hobbies.component.ts");
/* harmony import */ var _hobbies_home_hobbies_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hobbies-home/hobbies-home.component */ "./src/app/hobbies-home/hobbies-home.component.ts");
/* harmony import */ var _piano_piano_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../piano/piano.component */ "./src/app/piano/piano.component.ts");
/* harmony import */ var _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gaming/gaming.component */ "./src/app/gaming/gaming.component.ts");
/* harmony import */ var _coding_coding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../coding/coding.component */ "./src/app/coding/coding.component.ts");
/* harmony import */ var _gif_gif_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../gif/gif.component */ "./src/app/gif/gif.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"] },
    { path: 'hobbies',
        component: _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__["HobbiesComponent"],
        children: [
            {
                path: '',
                component: _hobbies_home_hobbies_home_component__WEBPACK_IMPORTED_MODULE_6__["HobbiesHomeComponent"]
            },
            {
                path: 'piano',
                component: _piano_piano_component__WEBPACK_IMPORTED_MODULE_7__["PianoComponent"]
            },
            {
                path: 'coding',
                component: _coding_coding_component__WEBPACK_IMPORTED_MODULE_9__["CodingComponent"]
            },
            {
                path: 'gaming',
                component: _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_8__["GamingComponent"]
            }
        ]
    },
    { path: 'gif', component: _gif_gif_component__WEBPACK_IMPORTED_MODULE_10__["GifComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"],
    _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_5__["HobbiesComponent"],
    _piano_piano_component__WEBPACK_IMPORTED_MODULE_7__["PianoComponent"],
    _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_8__["GamingComponent"],
    _coding_coding_component__WEBPACK_IMPORTED_MODULE_9__["CodingComponent"],
    _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root {background-color:red}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation-bar></app-navigation-bar>  \n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PersonalSite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _gif_gif_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gif/gif.component */ "./src/app/gif/gif.component.ts");
/* harmony import */ var _hobbies_home_hobbies_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hobbies-home/hobbies-home.component */ "./src/app/hobbies-home/hobbies-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavigationBarComponent"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                _gif_gif_component__WEBPACK_IMPORTED_MODULE_7__["GifComponent"],
                _hobbies_home_hobbies_home_component__WEBPACK_IMPORTED_MODULE_8__["HobbiesHomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coding/coding.component.html":
/*!**********************************************!*\
  !*** ./src/app/coding/coding.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"coding-wrapper\">\n  <div [@routerTransitionDown]>\n      <h1>Coding</h1>\n      <div class=\"coding-content\">\n      <h3>\n        I started coding in August 2017 and fell in love with it ever since. Since I started I have gained experience in the following languages:\n      </h3>\n      <ul class=\"coding-languages\">\n          <li [@routerTransition]><i class=\"devicon-html5-plain\"></i>HTML</li>\n          <li [@routerTransitionRight]><i class=\"devicon-css3-plain-wordmark\"></i>CSS</li>\n          <li [@routerTransition]><i class=\"devicon-javascript-plain\"></i>JavaScript</li>\n          <li [@routerTransitionRight]><i class=\"devicon-csharp-plain\"></i>C#</li>\n          <li [@routerTransition]><i class=\"devicon-angularjs-plain\"></i>Angular</li>\n          <li [@routerTransitionRight]><i class=\"devicon-typescript-plain\"></i>TypeScript</li>\n        </ul>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/coding/coding.component.scss":
/*!**********************************************!*\
  !*** ./src/app/coding/coding.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".coding-wrapper {\n  background-color: #60be86;\n  height: 100vh;\n  text-align: center; }\n\n.coding-languages {\n  font-size: 2em; }\n\n.coding-content {\n  padding-top: 5%; }\n\nli {\n  list-style: none; }\n\nh1 {\n  font-size: 4em; }\n"

/***/ }),

/***/ "./src/app/coding/coding.component.ts":
/*!********************************************!*\
  !*** ./src/app/coding/coding.component.ts ***!
  \********************************************/
/*! exports provided: CodingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodingComponent", function() { return CodingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodingComponent = /** @class */ (function () {
    function CodingComponent() {
    }
    CodingComponent.prototype.ngOnInit = function () {
    };
    CodingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coding',
            template: __webpack_require__(/*! ./coding.component.html */ "./src/app/coding/coding.component.html"),
            styles: [__webpack_require__(/*! ./coding.component.scss */ "./src/app/coding/coding.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToLeft"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToRight"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToBottom"])()]
        }),
        __metadata("design:paramtypes", [])
    ], CodingComponent);
    return CodingComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-wrapper\">\n    <h1 [@routerTransitionDown]>Contact</h1>\n    <div class=\"bottom-row\">\n      <a class=\"social-media\" href=\"https://www.github.com/segger87\" target=\"_blank\"><i class=\"fa fa-github\" [@routerTransitionRight]></i></a>\n      <a class=\"social-media\" href=\"https://uk.linkedin.com/in/sam-egger-046548110\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" [@routerTransitionUp]></i></a>\n      <a class=\"social-media\" href=\"https://www.facebook.com/segger87\" target=\"_blank\"><i class=\"fa fa-facebook-square\" [@routerTransition]></i></a>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding-top: 5%;\n  font-size: 5em; }\n\n.contact-wrapper {\n  background-color: #f5f5f5;\n  height: 100vh;\n  text-align: center; }\n\n.fa-github, .fa-facebook-square, .fa-linkedin-square {\n  font-size: 5.5em;\n  margin: .125em;\n  padding-top: 10%; }\n\n.fa-github:hover, .fa-facebook-square:hover, .fa-linkedin-square:hover {\n    opacity: 0.2; }\n\n.social-media {\n  all: unset; }\n\n.social-media:hover {\n    all: unset;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToLeft"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToRight"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToBottom"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/gaming/gaming.component.html":
/*!**********************************************!*\
  !*** ./src/app/gaming/gaming.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gaming-wrapper\">\n\n    <h1 [@routerTransitionDown] class=\"gaming-title\">Gaming</h1>\n\n\t\t\t\t<div class=\"switch\" [@routerTransitionUp]>\n\t\t\t\t\t<div class=\"body\">\n\t\t\t\t\t\t<div class=\"volume\"></div>\n\t\t\t\t\t\t<div class=\"screen\">\n\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon-part left\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"icon-part right\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<h1><span>Nintendo</span>Switch</h1>\n\t\t\t\t\t\t\t\t<span>XBL: Capt Greenhorn</span>\n\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t<span>PSN: Crazy_Rhino</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"joy-con left\">\n\t\t\t\t\t\t\t<div class=\"button-group\">\n\t\t\t\t\t\t\t\t<div class=\"button arrow up\"></div>\n\t\t\t\t\t\t\t\t<div class=\"button arrow right\"></div>\n\t\t\t\t\t\t\t\t<div class=\"button arrow down\"></div>\n\t\t\t\t\t\t\t\t<div class=\"button arrow left\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"stick\"></div>\n\t\t\t\t\t\t\t<div class=\"select\"></div>\n\t\t\t\t\t\t\t<div class=\"capture\"></div>\n\t\t\t\t\t\t\t<div class=\"shoulder l\"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"joy-con right\">\n\t\t\t\t\t\t\t<div class=\"button-group\">\n\t\t\t\t\t\t\t\t<div class=\"button letter\" data-letter=\"X\"></div>\n\t\t\t\t\t\t\t\t<div class=\"button letter\" data-letter=\"A\"></div>\n\t\t\t\t\t\t\t\t<div class=\"button letter\" data-letter=\"B\"></div>\n\t\t\t\t\t\t\t\t<div class=\"button letter\" data-letter=\"Y\"></div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"stick\"></div>\n\t\t\t\t\t\t\t<div class=\"start\"></div>\n\t\t\t\t\t\t\t<div class=\"home\"></div>\n\t\t\t\t\t\t\t<div class=\"shoulder r\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n"

/***/ }),

/***/ "./src/app/gaming/gaming.component.scss":
/*!**********************************************!*\
  !*** ./src/app/gaming/gaming.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gaming-wrapper {\n  background-color: #60be86;\n  height: 100vh;\n  text-align: center; }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0 auto;\n  box-sizing: border-box; }\n\nbody {\n  display: flex;\n  height: 100vh;\n  font-size: 2em;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #eee; }\n\n.switch {\n  position: relative;\n  z-index: 1;\n  margin: 0 auto;\n  padding-top: 5%; }\n\n.switch .logo {\n    overflow: hidden;\n    margin-top: 0;\n    padding-top: 5px; }\n\n.gaming-title {\n  font-size: 5em;\n  padding-top: 5%; }\n\n.body {\n  position: relative;\n  width: 20.125em;\n  height: 11.75em;\n  padding: 0.375em 0.5625em;\n  background-repeat: no-repeat;\n  background-position: 0 0, 0 0, 100% 0;\n  background-size: 100%, 50%, 50%;\n  background-image: linear-gradient(to bottom, rgba(56, 58, 61, 0) 50%, #383a3d 50%), radial-gradient(circle at 0 0, rgba(56, 58, 61, 0) 0.5em, #383a3d 0.515625em), radial-gradient(circle at 100% 0, rgba(56, 58, 61, 0) 0.5em, #383a3d 0.515625em);\n  border-radius: 0.125em;\n  box-shadow: inset 0 -1.25em 0.5em -1em rgba(0, 0, 0, 0.5); }\n\n.bodySwitch::before, .bodySwitch::after {\n  content: '';\n  position: absolute;\n  display: block; }\n\n.bodySwitch::before {\n  top: 0;\n  left: 0.4375em;\n  width: calc(100% - 0.875em);\n  height: 0.3125em;\n  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0)); }\n\n.bodySwitch::after {\n  top: 0.5625em;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 0.5625em);\n  border-radius: 0 0 0.125em 0.125em;\n  box-shadow: inset 0.0625em 0 rgba(255, 255, 255, 0.08), inset -0.0625em 0 rgba(255, 255, 255, 0.08); }\n\n.volume {\n  position: absolute;\n  bottom: 100%;\n  left: 2.625em;\n  width: 1.6875em;\n  height: 0.03125em;\n  background-color: #555; }\n\n.volume::before, .volume::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    display: block;\n    width: 36%;\n    height: 0.0625em;\n    background-color: #555;\n    border-radius: 0.0625em 0.0625em 0 0;\n    box-shadow: inset 0 0.03125em 0.03125em #333; }\n\n.volume::before {\n    left: 0; }\n\n.volume::after {\n    right: 0; }\n\n.screen {\n  display: flex;\n  box-sizing: content-box;\n  position: relative;\n  width: 16em;\n  height: 9em;\n  color: #fff;\n  font-family: \"Montserrat\", sans-serif;\n  background-color: #e60012;\n  border: 1em solid #000;\n  border-left-width: 1.5em;\n  border-right-width: 1.5em;\n  border-radius: 0.375em; }\n\n.logo {\n  margin: auto;\n  text-transform: uppercase; }\n\n.logo h1 {\n    font-size: 1.0625em;\n    letter-spacing: 0.125em;\n    margin: 0; }\n\n.logo h1 span {\n      display: block;\n      font-size: 55%;\n      letter-spacing: 0.40625em; }\n\n.icon {\n  height: 3.3125em;\n  margin-bottom: 0.4375em;\n  text-align: center;\n  -webkit-animation: logo-icon 2s linear infinite;\n          animation: logo-icon 2s linear infinite; }\n\n.icon-part {\n    position: relative;\n    height: 100%;\n    display: inline-block;\n    margin: 0 0.03125em; }\n\n.icon-part.left {\n      width: 1.59375em;\n      border: 0.25em solid #fff;\n      border-radius: 0.8125em 0 0 0.8125em; }\n\n.icon-part.right {\n      width: 1.4375em;\n      background-color: #fff;\n      border-radius: 0 0.8125em 0.8125em 0;\n      -webkit-animation: logo-right 2s linear infinite;\n              animation: logo-right 2s linear infinite; }\n\n.icon-part::before {\n      content: '';\n      position: absolute;\n      left: 50%;\n      display: block;\n      width: 0.65625em;\n      height: 0.65625em;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      border-radius: 50%; }\n\n.icon-part.left::before {\n      top: 0.46875em;\n      background-color: #fff; }\n\n.icon-part.right::before {\n      top: 1.5em;\n      background-color: #e60012; }\n\n@-webkit-keyframes logo-right {\n  0% {\n    -webkit-transform: translateY(-40%);\n            transform: translateY(-40%); }\n  25% {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  30% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  70% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(-40%);\n            transform: translateY(-40%); } }\n\n@keyframes logo-right {\n  0% {\n    -webkit-transform: translateY(-40%);\n            transform: translateY(-40%); }\n  25% {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  30% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  70% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(-40%);\n            transform: translateY(-40%); } }\n\n@-webkit-keyframes logo-icon {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  30% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  35% {\n    -webkit-transform: translateY(10%);\n            transform: translateY(10%); }\n  40% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes logo-icon {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  30% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  35% {\n    -webkit-transform: translateY(10%);\n            transform: translateY(10%); }\n  40% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.joy-con {\n  position: absolute;\n  top: 0;\n  width: 3.8125em;\n  height: 100%;\n  background-color: #83868d;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border: 0; }\n\n.joy-con.left {\n    right: calc(100% + 0.03125em);\n    border-radius: 2.5em 0.25em 0.125em 2.5em;\n    box-shadow: inset 0.125em -0.125em 0.375em rgba(0, 0, 0, 0.5), inset -0.3125em 0 0.0625em -0.25em rgba(0, 0, 0, 0.25), inset 0.375em 0.5625em 0.5em -0.25em #83868d, 0.40625em 0.25em 0 -0.375em #222; }\n\n.joy-con.left::before {\n    content: '';\n    position: absolute;\n    top: 0.125em;\n    left: 0.0625em;\n    display: block;\n    width: calc(100% - 0.0625em);\n    height: 50%;\n    border-radius: 2.5em 0.25em 0 0;\n    box-shadow: inset 0.125em 0.3125em 0.125em -0.25em rgba(255, 255, 255, 0.75);\n    -webkit-filter: blur(0.0625em);\n            filter: blur(0.0625em); }\n\n.joy-con.right {\n    left: calc(100% + 0.03125em);\n    border-radius: 0.25em 2.5em 2.5em 0.125em;\n    box-shadow: inset -0.125em -0.125em 0.375em rgba(0, 0, 0, 0.5), inset 0.3125em 0 0.0625em -0.25em rgba(0, 0, 0, 0.25), inset -0.375em 0.5625em 0.5em -0.25em #83868d, -0.40625em 0.25em 0 -0.375em #222; }\n\n.joy-con.right::before {\n    content: '';\n    position: absolute;\n    top: 0.125em;\n    right: 0.0625em;\n    display: block;\n    width: calc(100% - 0.0625em);\n    height: 50%;\n    border-radius: 0.25em 2.5em 0 0;\n    box-shadow: inset -0.125em 0.3125em 0.125em -0.25em rgba(255, 255, 255, 0.75);\n    -webkit-filter: blur(0.0625em);\n            filter: blur(0.0625em); }\n\n.button-group {\n  position: absolute;\n  left: 50%;\n  width: 45%;\n  padding-bottom: 45%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.left .button-group {\n  top: 5.375em;\n  margin-left: 2.5%; }\n\n.right .button-group {\n  top: 2.125em;\n  margin-left: -2.5%; }\n\n.button {\n  position: absolute;\n  width: 0.75em;\n  height: 0.75em;\n  margin: -0.375em;\n  color: rgba(255, 255, 255, 0.6);\n  background-color: #49494b;\n  border-radius: 100%;\n  box-shadow: inset 0 -0.0625em 0.125em rgba(0, 0, 0, 0.75), inset 0 0.125em 0.125em -0.0625em rgba(255, 255, 255, 0.4), 0 0 0.03125em 0.0625em rgba(0, 0, 0, 0.6), 0 0.0625em 0.25em 0.03125em rgba(0, 0, 0, 0.5);\n  cursor: pointer; }\n\n.button:active {\n    box-shadow: inset 0 -0.0625em 0.125em rgba(0, 0, 0, 0.75), inset 0 0.125em 0.125em -0.0625em rgba(255, 255, 255, 0.4), 0 0 0.03125em 0.0625em rgba(0, 0, 0, 0.6); }\n\n.button:nth-child(1) {\n    top: 0;\n    left: 50%; }\n\n.button:nth-child(2) {\n    top: 50%;\n    right: 0; }\n\n.button:nth-child(3) {\n    bottom: 0;\n    left: 50%; }\n\n.button:nth-child(4) {\n    top: 50%;\n    left: 0; }\n\n.button.arrow::before,\n  .button .button.arrow::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    border: 0.125em solid transparent;\n    border-bottom: 0.25em solid rgba(255, 255, 255, 0.1);\n    border-top: none; }\n\n.button.arrow::after {\n    top: calc(50% - 0.03125em);\n    border-bottom: 0.25em solid #272b2d; }\n\n.button.arrow.right::before, .button.arrow.right::after {\n    margin-left: 0.03125em;\n    -webkit-transform: translate(-50%, -50%) rotate(90deg);\n            transform: translate(-50%, -50%) rotate(90deg); }\n\n.button.arrow.down::before, .button.arrow.down::after {\n    margin-top: 0.03125em;\n    -webkit-transform: translate(-50%, -50%) rotate(180deg);\n            transform: translate(-50%, -50%) rotate(180deg); }\n\n.button.arrow.left::before, .button.arrow.left::after {\n    margin-left: -0.03125em;\n    -webkit-transform: translate(-50%, -50%) rotate(270deg);\n            transform: translate(-50%, -50%) rotate(270deg); }\n\n.button.letter::before {\n    content: attr(data-letter);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 0.375em;\n    line-height: 1; }\n\n.stick {\n  position: absolute;\n  left: 50%;\n  width: 1.75em;\n  height: 1.75em;\n  margin: -0.375em;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  color: rgba(255, 255, 255, 0.6);\n  background-color: #49494b;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 0.0625em 100%, 100% 0.0625em, 100%;\n  background-image: linear-gradient(to bottom, #222, #111), linear-gradient(to bottom, #222, #333), linear-gradient(to bottom, #666, #111);\n  border-radius: 100%;\n  box-shadow: inset 0 -0.0625em 0.125em rgba(0, 0, 0, 0.75), inset 0 0.125em 0.125em -0.03125em rgba(0, 0, 0, 0.2), inset 0 0.1875em 0.125em -0.0625em rgba(255, 255, 255, 0.3), 0 0 0.09375em 0.0625em rgba(0, 0, 0, 0.75), 0 0.375em 1em 0.0625em rgba(0, 0, 0, 0.4);\n  cursor: pointer; }\n\n.stick:active {\n    box-shadow: inset 0 -0.0625em 0.125em rgba(0, 0, 0, 0.75), inset 0 0.125em 0.125em -0.03125em rgba(0, 0, 0, 0.2), inset 0 0.1875em 0.125em -0.0625em rgba(255, 255, 255, 0.3), 0 0 0.09375em 0.0625em rgba(0, 0, 0, 0.75), 0 0.375em 0.75em 0.0625em rgba(0, 0, 0, 0.4); }\n\n.stick::before, .stick::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 75%;\n    height: 75%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-image: linear-gradient(to bottom, #666, #222);\n    border-radius: 50%;\n    box-shadow: inset 0 0 0.125em rgba(255, 255, 255, 0.08); }\n\n.stick::before {\n    width: 85%;\n    height: 85%;\n    background-size: 0.0625em 100%, 100% 0.0625em, 100%;\n    background-image: linear-gradient(to bottom, #444, #111), linear-gradient(to bottom, #222, #333), linear-gradient(to bottom, #222, #666);\n    box-shadow: none; }\n\n.left .stick {\n  top: 2.5em;\n  margin-left: 2.5%; }\n\n.right .stick {\n  top: 5.75em;\n  margin-left: -2.5%; }\n\n.select,\n.start {\n  position: absolute;\n  background-color: #49494b;\n  cursor: pointer; }\n\n.select {\n  top: 1.125em;\n  right: 0.375em;\n  width: 0.625em;\n  height: 0.1875em;\n  border-radius: 0.03125em;\n  box-shadow: inset 0 -0.03125em 0.0625em rgba(0, 0, 0, 0.5), inset 0 0.03125em rgba(255, 255, 255, 0.2), 0 0 0.03125em 0.03125em rgba(0, 0, 0, 0.6), 0 0.09375em 0.125em -0.03125em rgba(0, 0, 0, 0.4); }\n\n.select:active {\n    box-shadow: inset 0 -0.03125em 0.0625em rgba(0, 0, 0, 0.5), inset 0 0.03125em rgba(255, 255, 255, 0.2), 0 0 0.03125em 0.03125em rgba(0, 0, 0, 0.6), 0 0.09375em 0.125em -0.03125em rgba(0, 0, 0, 0.15); }\n\n.start {\n  top: 0.90625em;\n  left: 0.5625em;\n  width: 0.1875em;\n  height: 0.625em;\n  box-shadow: 0 0 0.03125em 0.03125em rgba(0, 0, 0, 0.6), 0 0.09375em 0.125em -0.03125em rgba(0, 0, 0, 0.4); }\n\n.start::before, .start::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background-color: #49494b;\n    border-radius: 0.03125em; }\n\n.start::before {\n    width: 0.625em;\n    height: 0.1875em;\n    box-shadow: inset 0 -0.03125em 0.0625em rgba(0, 0, 0, 0.5), inset 0 0.03125em rgba(255, 255, 255, 0.2), 0 0 0.03125em 0.03125em rgba(0, 0, 0, 0.6), 0 0.09375em 0.125em -0.03125em rgba(0, 0, 0, 0.4); }\n\n.start::after {\n    width: 0.1875em;\n    height: 0.625em;\n    box-shadow: inset 0 -0.09375em 0.0625em -0.0625em rgba(0, 0, 0, 0.5), inset 0 0.03125em rgba(255, 255, 255, 0.2); }\n\n.start:active {\n    box-shadow: 0 0 0.03125em 0.03125em rgba(0, 0, 0, 0.6), 0 0.09375em 0.125em -0.03125em rgba(0, 0, 0, 0.15); }\n\n.start:active::before {\n    box-shadow: inset 0 -0.03125em 0.0625em rgba(0, 0, 0, 0.5), inset 0 0.03125em rgba(255, 255, 255, 0.2), 0 0 0.03125em 0.03125em rgba(0, 0, 0, 0.6), 0 0.09375em 0.125em -0.03125em rgba(0, 0, 0, 0.15); }\n\n.capture {\n  position: absolute;\n  bottom: 2.875em;\n  right: 0.8125em;\n  width: 0.6875em;\n  height: 0.6875em;\n  background-color: #444;\n  border-radius: 0.09375em;\n  box-shadow: inset 0 0.25em 0.5em -0.0625em rgba(255, 255, 255, 0.1), inset 0 0.015625em 0.03125em -0.015625em rgba(255, 255, 255, 0.5), inset 0 0 0.03125em black, 0 0.015625em 0 0.03125em rgba(0, 0, 0, 0.75);\n  cursor: pointer; }\n\n.capture::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 70%;\n    Height: 70%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background-color: #3b3f40;\n    border-radius: 50%;\n    box-shadow: inset 0 0.0625em 0.0625em -0.03125em rgba(0, 0, 0, 0.75), inset 0 -0.03125em 0.03125em -0.03125em rgba(255, 255, 255, 0.5); }\n\n.capture:active {\n    box-shadow: inset 0 0.25em 0.5em -0.0625em rgba(255, 255, 255, 0.1), inset 0 0.015625em 0.03125em -0.015625em rgba(255, 255, 255, 0.5), inset 0 0 0.03125em black, 0 0.015625em 0 0.03125em rgba(0, 0, 0, 0.5); }\n\n.home {\n  position: absolute;\n  bottom: 2.8125em;\n  left: 0.75em;\n  width: 0.875em;\n  height: 0.875em;\n  background-color: #444;\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 0.09375em #83868d, inset 0 0.25em 0.5em -0.0625em rgba(255, 255, 255, 0.1), inset 0 0.015625em 0.03125em -0.015625em rgba(255, 255, 255, 0.5), inset 0 0 0.03125em black, 0 0.015625em 0.03125em 0.0625em rgba(0, 0, 0, 0.65);\n  cursor: pointer; }\n\n.home::before, .home::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\n.home::before {\n    width: 0.3125em;\n    height: 0.25em;\n    margin-top: 0.03125em;\n    background-color: #444;\n    box-shadow: inset 0 0 0 0.078125em #111, inset 0.109375em 0 0 #111, inset -0.109375em 0 0 #111, 0 0.0625em 0 -0.03125em rgba(255, 255, 255, 0.08); }\n\n.home::after {\n    margin-top: -0.125em;\n    border-right: 0.21875em solid transparent;\n    border-left: 0.21875em solid transparent;\n    border-bottom: 0.1875em solid #111; }\n\n.home:active {\n    box-shadow: inset 0 0 0 0.09375em #83868d, inset 0 0.25em 0.5em -0.0625em rgba(255, 255, 255, 0.1), inset 0 0.015625em 0.03125em -0.015625em rgba(255, 255, 255, 0.5), inset 0 0 0.03125em black, 0 0 0.015625em 0.0625em rgba(0, 0, 0, 0.6); }\n\n.shoulder {\n  position: absolute;\n  z-index: -1;\n  top: -0.125em;\n  display: block;\n  width: 5.5em;\n  height: 2.5em;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-size: 100%;\n  border-radius: 5em 5em 0 0;\n  cursor: pointer; }\n\n.shoulder.l {\n    left: -0.125em;\n    background-image: radial-gradient(circle at 3em 0.125em, #0f0f0f 0.125em, rgba(15, 15, 15, 0) 0.15125em), radial-gradient(circle at 0.34375em 1.5em, #0f0f0f 0.125em, rgba(15, 15, 15, 0) 0.15125em), radial-gradient(circle at 0.875em -0.625em, #444444 1.75em, #0f0f0f 2.15625em, rgba(15, 15, 15, 0) 2.1875em); }\n\n.shoulder.l:active {\n      top: -0.0625em;\n      left: -0.0625em; }\n\n.shoulder.r {\n    right: -0.125em;\n    background-image: radial-gradient(circle at 2.5em 0.125em, #0f0f0f 0.125em, rgba(15, 15, 15, 0) 0.15125em), radial-gradient(circle at 5.1875em 1.5em, #0f0f0f 0.125em, rgba(15, 15, 15, 0) 0.15125em), radial-gradient(circle at 4.5em -0.625em, #444444 1.75em, #0f0f0f 2.15625em, rgba(15, 15, 15, 0) 2.1875em); }\n\n.shoulder.r:active {\n      top: -0.0625em;\n      right: -0.0625em; }\n"

/***/ }),

/***/ "./src/app/gaming/gaming.component.ts":
/*!********************************************!*\
  !*** ./src/app/gaming/gaming.component.ts ***!
  \********************************************/
/*! exports provided: GamingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamingComponent", function() { return GamingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamingComponent = /** @class */ (function () {
    function GamingComponent() {
    }
    GamingComponent.prototype.ngOnInit = function () {
    };
    GamingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gaming',
            template: __webpack_require__(/*! ./gaming.component.html */ "./src/app/gaming/gaming.component.html"),
            styles: [__webpack_require__(/*! ./gaming.component.scss */ "./src/app/gaming/gaming.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToBottom"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [])
    ], GamingComponent);
    return GamingComponent;
}());



/***/ }),

/***/ "./src/app/gif.service.ts":
/*!********************************!*\
  !*** ./src/app/gif.service.ts ***!
  \********************************/
/*! exports provided: GifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifService", function() { return GifService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GifService = /** @class */ (function () {
    function GifService(_HttpClient) {
        this._HttpClient = _HttpClient;
        this.trendingUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=jmJFGQx32Mt6etpKr7aTpjXmn977kSYi&limit=10&rating=G';
    }
    GifService.prototype.retrieveGifData = function () {
        return this._HttpClient.get(this.trendingUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    GifService.prototype.errorHandler = function (error) {
        console.error(error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || 'Error!');
    };
    GifService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GifService);
    return GifService;
}());



/***/ }),

/***/ "./src/app/gif/gif.component.html":
/*!****************************************!*\
  !*** ./src/app/gif/gif.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"giphy-body\">\n<h1 [@routerTransition]>Top 10 Trending GIF's</h1>\n\n<ng-container *ngIf=\"gif\">\n\n    <div id=\"giphy-container\" [@routerTransitionRight]>\n      <ng-container *ngFor= \"let gd of gif.data\">\n            <div class=\"giphy-posts\">\n                <img class=\"giphy-img\" [src]=\"gd.images.downsized.url\" >\n            </div>\n        </ng-container>\n      </div>\n      </ng-container>\n  </div>\n\t"

/***/ }),

/***/ "./src/app/gif/gif.component.scss":
/*!****************************************!*\
  !*** ./src/app/gif/gif.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#giphy-container {\n  display: flex;\n  flex-flow: row wrap; }\n\n.giphy-body {\n  background-color: pink;\n  font: arial;\n  font-size: 2.5em;\n  height: 100vh; }\n\n.giphy-posts {\n  width: 20%; }\n\n.giphy-posts img {\n    max-width: 100%;\n    width: 100%;\n    height: 100%; }\n\nh1 {\n  text-align: center;\n  font-size: 2em; }\n"

/***/ }),

/***/ "./src/app/gif/gif.component.ts":
/*!**************************************!*\
  !*** ./src/app/gif/gif.component.ts ***!
  \**************************************/
/*! exports provided: GifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifComponent", function() { return GifComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gif_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gif.service */ "./src/app/gif.service.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GifComponent = /** @class */ (function () {
    function GifComponent(_gifService) {
        this._gifService = _gifService;
    }
    GifComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._gifService.retrieveGifData().subscribe(function (data) {
            _this.gif = data;
            console.log(_this.gif.data);
        });
    };
    GifComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gif',
            template: __webpack_require__(/*! ./gif.component.html */ "./src/app/gif/gif.component.html"),
            styles: [__webpack_require__(/*! ./gif.component.scss */ "./src/app/gif/gif.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["slideToLeft"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["slideToRight"])()]
        }),
        __metadata("design:paramtypes", [_gif_service__WEBPACK_IMPORTED_MODULE_1__["GifService"]])
    ], GifComponent);
    return GifComponent;
}());



/***/ }),

/***/ "./src/app/hobbies-home/hobbies-home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/hobbies-home/hobbies-home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"hobbies-wrapper\">\r\n    <h1 [@routerTransition]>HOBBIES</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hobbies-home/hobbies-home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/hobbies-home/hobbies-home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hobbies-wrapper {\n  background-color: #60be86;\n  height: 100vh;\n  text-align: center; }\n\nh1 {\n  font-size: 5em;\n  padding-top: 20%; }\n"

/***/ }),

/***/ "./src/app/hobbies-home/hobbies-home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hobbies-home/hobbies-home.component.ts ***!
  \********************************************************/
/*! exports provided: HobbiesHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesHomeComponent", function() { return HobbiesHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HobbiesHomeComponent = /** @class */ (function () {
    function HobbiesHomeComponent() {
    }
    HobbiesHomeComponent.prototype.ngOnInit = function () {
    };
    HobbiesHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hobbies-home',
            template: __webpack_require__(/*! ./hobbies-home.component.html */ "./src/app/hobbies-home/hobbies-home.component.html"),
            styles: [__webpack_require__(/*! ./hobbies-home.component.scss */ "./src/app/hobbies-home/hobbies-home.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToLeft"])()]
        }),
        __metadata("design:paramtypes", [])
    ], HobbiesHomeComponent);
    return HobbiesHomeComponent;
}());



/***/ }),

/***/ "./src/app/hobbies/hobbies.component.css":
/*!***********************************************!*\
  !*** ./src/app/hobbies/hobbies.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hobbies/hobbies.component.html":
/*!************************************************!*\
  !*** ./src/app/hobbies/hobbies.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/hobbies/hobbies.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hobbies/hobbies.component.ts ***!
  \**********************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
    }
    HobbiesComponent.prototype.ngOnInit = function () {
    };
    HobbiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/app/hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.css */ "./src/app/hobbies/hobbies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\r\n        <h1 [@routerTransition] class=\"home-page-title\">{{myName}}</h1>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page-title {\n  text-align: center;\n  font-size: 5em;\n  padding-top: 15%; }\n\n.home-wrapper {\n  background: #f2f2f2;\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.myName = 'Sam Egger';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToLeft"])()]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        Sam Egger\n      </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse show\" [ngClass]=\"{ 'show': navbarOpen }\" >\n<ul class=\"navbar-nav mr-auto\">\n  <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-item\"> <!-- the routerLinkActiveOptions means the url has to be exactly matching the router link, prevents Home always being highlighted-->\n    <a class=\"nav-link\" routerLink=\"\">Home</a>\n  </li>\n  <li routerLinkActive=\"active\" class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"about\">About Me</a>\n  </li>\n  <li routerLinkActive=\"active\" class=\"nav-item dropdown\">\n    <a  class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" routerLink=\"hobbies\">Hobbies</a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n      <a class=\"dropdown-item\" routerLinkActive=\"active\"  routerLink=\"hobbies/piano\">Piano</a>\n      <div class=\"dropdown-divider\"></div>\n      <a class=\"dropdown-item\" routerLinkActive=\"active\"  routerLink=\"hobbies/coding\">Coding</a>\n      <div class=\"dropdown-divider\"></div>\n      <a class=\"dropdown-item\" routerLinkActive=\"active\" routerLink=\"hobbies/gaming\">Gaming</a>\n    </div>\n  </li>\n  <li routerLinkActive=\"active\"  class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"gif\">Trending Gifs</a>\n  </li>\n  <li routerLinkActive=\"active\"  class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"contact\">Contact</a>\n  </li>\n</ul>\n</div>\n</nav>"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
        this.navbarOpen = false;
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavigationBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/navigation-bar/navigation-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/piano/piano.component.html":
/*!********************************************!*\
  !*** ./src/app/piano/piano.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"piano-wrapper\">\n\n\t<h1 [@routerTransitionDown]>Piano</h1>\n\t<div [@routerTransitionUp]>\n\t\t\t<div class=\"accordion\" id=\"accordionExample\">\n\t\t\t\t\t<div class=\"card card-image1\">\n\t\t\t\t\t\t<div class=\"card-header\" id=\"headingOne\">\n\t\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n\t\t\t\t\t\t\t\t\tLudovico Einaudi - Elegy For The Arctic\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t<div class=\"card-body embed-responsive embed-responsive-16by9\">\n\t\t\t\t\t\t\t\t<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Qffn_88Lsvo\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card card-image2\">\n\t\t\t\t\t\t<div class=\"card-header\" id=\"headingTwo\">\n\t\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n\t\t\t\t\t\t\t\t\tChopin Op 64 no1 - Minute Waltz\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t<div class=\"card-body embed-responsive embed-responsive-16by9\">\n\t\t\t\t\t\t\t\t<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6TruE3rsgvg\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card card-image3\">\n\t\t\t\t\t\t<div class=\"card-header\" id=\"headingThree\">\n\t\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n\t\t\t\t\t\t\t\t\tChopin Op 64 no2 - Waltz in C# Minor\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t<div class=\"card-body embed-responsive embed-responsive-16by9\">\n\t\t\t\t\t\t\t\t<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/bgllE7KwYOs\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card card-image4\">\n\t\t\t\t\t\t\t<div class=\"card-header\" id=\"headingFour\">\n\t\t\t\t\t\t\t\t<h5 class=\"mb-0\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n\t\t\t\t\t\t\t\t\t\tRachmaninoff - Prelude in C# Minor\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"collapseFour\" class=\"collapse\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample\">\n\t\t\t\t\t\t\t\t<div class=\"card-body embed-responsive embed-responsive-16by9\">\n\t\t\t\t\t\t\t\t\t<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/UWcm7AGAgzM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t</div>\n\t\t\t\t\n</div>"

/***/ }),

/***/ "./src/app/piano/piano.component.scss":
/*!********************************************!*\
  !*** ./src/app/piano/piano.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".piano-wrapper {\n  background-color: #60be86;\n  height: 100vh;\n  text-align: center; }\n\nh1 {\n  font-size: 5em;\n  padding-top: 5%;\n  padding-bottom: 5%; }\n"

/***/ }),

/***/ "./src/app/piano/piano.component.ts":
/*!******************************************!*\
  !*** ./src/app/piano/piano.component.ts ***!
  \******************************************/
/*! exports provided: PianoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianoComponent", function() { return PianoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PianoComponent = /** @class */ (function () {
    function PianoComponent() {
    }
    PianoComponent.prototype.ngOnInit = function () {
    };
    PianoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piano',
            template: __webpack_require__(/*! ./piano.component.html */ "./src/app/piano/piano.component.html"),
            styles: [__webpack_require__(/*! ./piano.component.scss */ "./src/app/piano/piano.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToBottom"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["slideToTop"])()]
        }),
        __metadata("design:paramtypes", [])
    ], PianoComponent);
    return PianoComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, routerTransitionRight, routerTransitionDown, routerTransitionUp, slideToLeft, slideToRight, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransitionRight", function() { return routerTransitionRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransitionDown", function() { return routerTransitionDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransitionUp", function() { return routerTransitionUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return slideToLeft();
}
function routerTransitionRight() {
    return slideToRight();
}
function routerTransitionDown() {
    return slideToBottom();
}
function routerTransitionUp() {
    return slideToTop();
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-80%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransitionUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ])
    ]);
}


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

module.exports = __webpack_require__(/*! C:\Work\Training\PersonalWebsiteAngular\PersonalSite\Angular-Website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map