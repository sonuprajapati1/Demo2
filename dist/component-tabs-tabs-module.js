(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-tabs-tabs-module"],{

/***/ "./src/app/pages/component/tabs/tabs.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/component/tabs/tabs.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Default Tabset</h3>\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\n                <ngb-tabset>\n                  <ngb-tab title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Pills</h3>\n                <h6 class=\"card-subtitle\">This is Pills demo</h6>\n                <ngb-tabset type=\"pills\">\n                  <ngb-tab title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab>\n                    <ng-template ngbTabTitle><b>Fancy</b></ng-template>\n                    <ng-template ngbTabContent>\n                      <p  class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"Disabled\" [disabled]=\"true\">\n                    <ng-template ngbTabContent>\n                      <p  class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Select an active tab by id</h3>\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\n                <ngb-tabset #t=\"ngbTabset\">\n                  <ngb-tab id=\"tab-selectbyid1\" title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab id=\"tab-selectbyid2\">\n                    <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n\n                <p>\n                  <button class=\"btn btn-outline-primary\" (click)=\"t.select('tab-selectbyid2')\">Selected tab with \"tab-selectbyid2\" id</button>\n                </p>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Prevent tab change</h3>\n                <h6 class=\"card-subtitle\">This is Prevent tab change</h6>\n                <ngb-tabset  (tabChange)=\"beforeChange($event)\">\n                  <ngb-tab id=\"tab-preventchange1\" title=\"Simple\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab id=\"tab-preventchange2\" title=\"I can't be selected...\">\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table\n                      craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl\n                      cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n                      yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean\n                      shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero\n                      sint qui sapiente accusamus tattooed echo park.</p>\n                    </ng-template>\n                  </ngb-tab>\n                  <ngb-tab title=\"But I can!\" >\n                    <ng-template ngbTabContent>\n                      <p class=\"p-t-20\">Heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n                      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n                      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n                      iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                    </ng-template>\n                  </ngb-tab>\n                </ngb-tabset>\n  \t\t\t</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/component/tabs/tabs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/component/tabs/tabs.component.ts ***!
  \********************************************************/
/*! exports provided: NgbdtabsBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdtabsBasic", function() { return NgbdtabsBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdtabsBasic = /** @class */ (function () {
    function NgbdtabsBasic() {
    }
    NgbdtabsBasic.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'tab-preventchange2') {
            $event.preventDefault();
        }
    };
    ;
    NgbdtabsBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/pages/component/tabs/tabs.component.html")
        })
    ], NgbdtabsBasic);
    return NgbdtabsBasic;
}());



/***/ }),

/***/ "./src/app/pages/component/tabs/tabs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/component/tabs/tabs.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.component */ "./src/app/pages/component/tabs/tabs.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        data: {
            title: 'Tabs',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Tabs' }]
        },
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_4__["NgbdtabsBasic"]
    }];
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_4__["NgbdtabsBasic"]]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-tabs-tabs-module.js.map