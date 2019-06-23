(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/filter.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/filter */ "./node_modules/rxjs-compat/_esm5/operator/filter.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.filter = _operator_filter__WEBPACK_IMPORTED_MODULE_1__["filter"];
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/operator/mergeMap.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.mergeMap = _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__["mergeMap"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.flatMap = _operator_mergeMap__WEBPACK_IMPORTED_MODULE_1__["mergeMap"];
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/mergeMap.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/mergeMap.js ***!
  \*************************************************************/
/*! exports provided: mergeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // a0
 * // b0
 * // c0
 * // a1
 * // b1
 * // c1
 * // continues to list a,b,c with respective ascending integers
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
function mergeMap(project, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(project, concurrent)(this);
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"],
        children: [
            { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
            { path: 'accordion', loadChildren: './component/accordion/accordion.module#AccordionModule' },
            { path: 'alert', loadChildren: './component/alert/alert.module#NgAlertModule' },
            { path: 'carousel', loadChildren: './component/carousel/carousel.module#ButtonsModule' },
            { path: 'datepicker', loadChildren: './component/datepicker/datepicker.module#DatepickerModule' },
            { path: 'dropdown', loadChildren: './component/dropdown-collapse/dropdown-collapse.module#DropdownModule' },
            { path: 'modal', loadChildren: './component/modal/modal.module#ModalModule' },
            { path: 'pagination', loadChildren: './component/pagination/pagination.module#paginationModule' },
            { path: 'poptool', loadChildren: './component/popover-tooltip/popover-tooltip.module#PopoverTooltipModule' },
            { path: 'progressbar', loadChildren: './component/progressbar/progressbar.module#progressbarModule' },
            { path: 'rating', loadChildren: './component/rating/rating.module#RatingModule' },
            { path: 'tabs', loadChildren: './component/tabs/tabs.module#TabsModule' },
            { path: 'timepicker', loadChildren: './component/timepicker/timepicker.module#TimepickerModule' },
            { path: 'typehead', loadChildren: './component/typehead/typehead.module#TypeheadModule' }
        ]
    }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Main wrapper - style you can find in pages.scss -->\n<!-- ============================================================== -->\n<div id=\"main-wrapper\">\n  <!-- ============================================================== -->\n  <!-- Topbar header - style you can find in pages.scss -->\n  <!-- ============================================================== -->\n  <ap-navigation></ap-navigation>\n  <!-- ============================================================== -->\n  <!-- Left Sidebar - style you can find in sidebar.scss  -->\n  <!-- ============================================================== -->\n  <ap-sidebar></ap-sidebar>\n  <!-- ============================================================== -->\n  <!-- End Left Sidebar - style you can find in sidebar.scss  -->\n  <!-- ============================================================== -->\n  <!-- ============================================================== -->\n  <!-- Page wrapper  -->\n  <!-- ============================================================== -->\n  <div class=\"page-wrapper\">\n    <!-- ============================================================== -->\n    <!-- Container fluid  -->\n    <!-- ============================================================== -->\n    <div class=\"container-fluid\">\n      <app-breadcrumb></app-breadcrumb>\n      <!-- ============================================================== -->\n      <!-- Start Page Content -->\n      <!-- ============================================================== -->\n      <router-outlet></router-outlet>\n      <!-- ============================================================== -->\n      <!-- End Start Page Content -->\n      <!-- ============================================================== -->\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Container fluid  -->\n    <!-- ============================================================== -->\n    <!-- ============================================================== -->\n    <!-- footer -->\n    <!-- ============================================================== -->\n    <footer class=\"footer text-center\"> 2018 &copy; Elite Admin brought to you by themedesigner.in </footer>\n    <!-- ============================================================== -->\n    <!-- End footer -->\n    <!-- ============================================================== -->\n  </div>\n  <!-- ============================================================== -->\n  <!-- End Page wrapper  -->\n  <!-- ============================================================== -->\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageComponent = /** @class */ (function () {
    function PageComponent(router) {
        this.router = router;
    }
    PageComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/starter']);
        }
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/sidebar.directive */ "./src/app/shared/sidebar.directive.ts");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]
            ],
            declarations: [
                _pages_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"],
                _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
                _shared_sidebar_directive__WEBPACK_IMPORTED_MODULE_4__["SIDEBAR_TOGGLE_DIRECTIVES"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->\n<div class=\"row page-titles\">\n    <div class=\"col-md-5 align-self-center\">\n        <h4 class=\"m-b-0 m-t-0\">{{pageInfo?.title}}</h4>\n    </div>\n</div>\n<!-- ============================================================== -->\n<!-- End Bread crumb and right sidebar toggle -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, activatedRoute, titleService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            _this.titleService.setTitle(event['title']);
            _this.pageInfo = event;
        });
    }
    BreadcrumbComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "layout", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/shared/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\n    <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n        <!-- ============================================================== -->\n        <!-- Logo -->\n        <!-- ============================================================== -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"index.html\">\n                <!-- Logo icon -->\n                <b>\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n                    <!-- Dark Logo icon -->\n                    <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n                    <!-- Light Logo icon -->\n                    <img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" />\n                </b>\n                <!--End Logo icon -->\n                <!-- Logo text -->\n                <span>\n                    <!-- dark Logo text -->\n                    <img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                    <!-- Light Logo text -->    \n                    <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" />\n                </span> \n            </a>\n        </div>\n        <!-- ============================================================== -->\n        <!-- End Logo -->\n        <!-- ============================================================== -->\n        <div class=\"navbar-collapse\">\n            <!-- ============================================================== -->\n            <!-- toggle and nav items -->\n            <!-- ============================================================== -->\n            <ul class=\"navbar-nav mr-auto mt-md-0\">\n                <!-- This is  -->\n                <li class=\"nav-item\"> <a class=\"nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\"><i class=\"icon-arrow-left-circle ti-menu\"></i></a> </li>\n                \n                <li>\n                    <form role=\"search\" class=\"app-search hidden-sm-down\">\n                        <input type=\"text\" placeholder=\"Search...\" class=\"form-control\"> <a href=\"\"><i class=\"fa fa-search\"></i></a> </form>\n                </li>\n            </ul>\n            <!-- ============================================================== -->\n            <!-- User profile and search -->\n            <!-- ============================================================== -->\n            <ul class=\"navbar-nav my-lg-0\">\n                <li class=\"nav-item\"> <a href=\"https://wrappixel.com/templates/elite-angular-admin/\" target=\"_blank\" class=\"btn btn-info text-white\">Upgrade To Pro</a> </li>\n            </ul>\n        </div>\n    </nav>\n</header>"

/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.showHide = true;
    }
    NavigationComponent.prototype.changeShowStatus = function () {
        this.showHide = !this.showHide;
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $('.preloader').fadeOut();
        });
        var set = function () {
            var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
            var topOffset = 60;
            if (width < 1170) {
                $('body').addClass('mini-sidebar');
                $('.navbar-brand span').hide();
                $('.scroll-sidebar, .slimScrollDiv')
                    .css('overflow-x', 'visible')
                    .parent()
                    .css('overflow', 'visible');
                $('.sidebartoggler i').addClass('ti-menu');
            }
            else {
                $('body').removeClass('mini-sidebar');
                $('.navbar-brand span').show();
                $('.sidebartoggler i').removeClass('ti-menu');
            }
            var height = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1)
                height = 1;
            if (height > topOffset) {
                $('.page-wrapper').css('min-height', height + 'px');
            }
        };
        $(window).ready(set);
        $(window).on('resize', set);
        $(document).on('click', '.mega-dropdown', function (e) {
            e.stopPropagation();
        });
        $('.search-box a, .search-box .app-search .srh-btn').on('click', function () {
            $('.app-search').toggle(200);
        });
        /*(<any>$('.scroll-sidebar, .right-sidebar, .message-center')).perfectScrollbar();*/
        $('.scroll-sidebar').slimScroll({
            position: 'left',
            size: '5px',
            height: '100%',
            color: '#dcdcdc'
        });
        $('.right-sidebar').slimScroll({
            height: '100%',
            position: 'right',
            size: '5px',
            color: '#dcdcdc'
        });
        $('.message-center').slimScroll({
            position: 'right',
            size: '5px',
            color: '#dcdcdc'
        });
        $('body').trigger('resize');
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/header-navigation/navigation.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/sidebar.directive.ts ***!
  \*********************************************/
/*! exports provided: MobileSidebarToggleDirective, RightSidebarToggleDirective, SIDEBAR_TOGGLE_DIRECTIVES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarToggleDirective", function() { return MobileSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarToggleDirective", function() { return RightSidebarToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDEBAR_TOGGLE_DIRECTIVES", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
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

/**
 * Allows the sidebar to be toggled via click.
 */
/*@Directive({
  selector: '.sidebartoggler',
})
export class SidebarToggleDirective {
  constructor() { }

@HostListener('click', ['$event'])
    toggleOpen($event:any) {
        $event.preventDefault();
        if(document.querySelector('body').classList.contains('mini-sidebar')) {
            document.querySelector('body').classList.remove('mini-sidebar');
        } else {
            document.querySelector('body').classList.add('mini-sidebar');
        }
    }
}*/
var MobileSidebarToggleDirective = /** @class */ (function () {
    function MobileSidebarToggleDirective() {
    }
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('show-sidebar');
        document.querySelector('.nav-toggler i').classList.toggle('ti-menu');
        document.querySelector('.nav-toggler i').classList.add('ti-close');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.nav-toggler'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

var RightSidebarToggleDirective = /** @class */ (function () {
    function RightSidebarToggleDirective() {
    }
    RightSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('.right-sidebar').classList.toggle('shw-rside');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RightSidebarToggleDirective.prototype, "toggleOpen", null);
    RightSidebarToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '.right-side-toggle'
        }),
        __metadata("design:paramtypes", [])
    ], RightSidebarToggleDirective);
    return RightSidebarToggleDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    MobileSidebarToggleDirective,
    RightSidebarToggleDirective
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n<aside class=\"left-sidebar\">\n  <!-- Sidebar scroll-->\n  <div class=\"scroll-sidebar\">\n    <!-- User profile -->\n    <div class=\"user-profile\">\n      <!-- User profile image -->\n      <div class=\"profile-img\"> <img src=\"assets/images/users/profile.png\" alt=\"user\" />\n        <!-- this is blinking heartbit-->\n        <div class=\"notify setpos\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n      </div>\n      <!-- User profile text-->\n      <div class=\"profile-text\">\n        <a href=\"#\" class=\"dropdown-toggle u-dropdown\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">Markarn\n          Doe <i class=\"fa fa-angle-down\"></i></a>\n        <div class=\"dropdown-menu animated flipInY\">\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-user\"></i> My Profile</a>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-wallet\"></i> My Balance</a>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-email\"></i> Inbox</a>\n          <!-- text-->\n          <div class=\"dropdown-divider\"></div>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-settings\"></i> Account Setting</a>\n          <!-- text-->\n          <div class=\"dropdown-divider\"></div>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i> Logout</a>\n          <!-- text-->\n        </div>\n      </div>\n    </div>\n    <!-- End User profile text-->\n    <!-- Sidebar navigation-->\n    <nav class=\"sidebar-nav\">\n      <ul id=\"sidebarnav\">\n        <li class=\"nav-devider\"></li>\n        <li class=\"nav-small-cap\">PERSONAL</li>\n        <li [class.active]=\"showMenu === 'start'\">\n          <a routerLink=\"/starter\" (click)=\"addExpandClass('start')\" [routerLinkActive]=\"['router-link-active']\"><i class=\"icon-speedometer\"></i><span\n              class=\"hide-menu\">Starter Page</span></a>\n        </li>\n        <li class=\"nav-small-cap\">UI COMPONENTS</li>\n        <li>\n          <a routerLink=\"/accordion\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-equal\"></i><span class=\"hide-menu\">Accordion</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/alert\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i class=\"mdi mdi-message-bulleted\"></i><span\n              class=\"hide-menu\">Alert</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/carousel\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-view-carousel\"></i><span class=\"hide-menu\">Carousel</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/datepicker\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-calendar-clock\"></i><span class=\"hide-menu\">Datepicker</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/dropdown\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-arrange-bring-to-front\"></i><span class=\"hide-menu\">Dropdown - Collapse</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/modal\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i class=\"mdi mdi-tablet\"></i><span\n              class=\"hide-menu\">Modal</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/pagination\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-backburger\"></i><span class=\"hide-menu\">Pagination</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/poptool\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i class=\"mdi mdi-image-filter-vintage\"></i><span\n              class=\"hide-menu\">Popover & Tooltip</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/progressbar\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-poll\"></i><span class=\"hide-menu\">Progressbar</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/rating\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i class=\"mdi mdi-bandcamp\"></i><span\n              class=\"hide-menu\">Ratings</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/tabs\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i class=\"mdi mdi-sort-variant\"></i><span\n              class=\"hide-menu\">Tabs</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/timepicker\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-calendar-clock\"></i><span class=\"hide-menu\">Timepicker</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/typehead\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-blur-radial\"></i><span class=\"hide-menu\">Typehead</span></a>\n        </li>\n\n        <li class=\"m-t-40 p-20 upgrade-btn\">\n          <a href=\"https://wrappixel.com/templates/elite-angular-admin/\" target=\"_blank\" class=\"btn btn-danger text-white\">Upgrade\n            To Pro</a>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Sidebar navigation -->\n  </div>\n  <!-- End Sidebar scroll-->\n</aside>\n<!-- ============================================================== -->\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        // this is for the open close
        this.isActive = true;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        $(function () {
            $('.sidebartoggler').on('click', function () {
                if ($('body').hasClass('mini-sidebar')) {
                    $('body').trigger('resize');
                    $('.scroll-sidebar, .slimScrollDiv')
                        .css('overflow', 'hidden')
                        .parent()
                        .css('overflow', 'visible');
                    $('body').removeClass('mini-sidebar');
                    $('.navbar-brand span').show();
                    // $(".sidebartoggler i").addClass("ti-menu");
                }
                else {
                    $('body').trigger('resize');
                    $('.scroll-sidebar, .slimScrollDiv')
                        .css('overflow-x', 'visible')
                        .parent()
                        .css('overflow', 'visible');
                    $('body').addClass('mini-sidebar');
                    $('.navbar-brand span').hide();
                    // $(".sidebartoggler i").removeClass("ti-menu");
                }
            });
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html")
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map