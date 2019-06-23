(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-pagination-pagination-module"],{

/***/ "./src/app/pages/component/pagination/pagination.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/component/pagination/pagination.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Default pagination</h3>\n                <h6 class=\"card-subtitle\">This is basic Default pagination</h6>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n\n\t\t\t\t<div>directionLinks = false</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n\n\t\t\t\t<div>boundaryLinks = true</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<hr>\n\n\t\t\t\t<pre>Current page: {{page}}</pre>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Advanced pagination</h3>\n                <h6 class=\"card-subtitle\">This is Advanced pagination</h6>\n                <div>maxSize = 5, rotate = false</div>\n                <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<div>maxSize = 5, rotate = true</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<div>maxSize = 5, rotate = true, ellipses = false</div>\n\t\t\t\t<ngb-pagination [collectionSize]=\"120\" [(page)]=\"page2\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\n\n\t\t\t\t<hr>\n\n\t\t\t\t<pre>Current page: {{page2}}</pre>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Pagination size</h3>\n                <h6 class=\"card-subtitle\">This is Pagination size</h6>\n                <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\n\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\n\t\t\t\t<ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Disabled pagination</h3>\n                <h6 class=\"card-subtitle\">This is Disabled pagination</h6>\n                <p>Pagination control can be disabled:</p>\n\t\t\t\t<ngb-pagination [collectionSize]=\"70\" [(page)]=\"disablepage\" [disabled]='isDisabled'></ngb-pagination>\n\t\t\t\t<hr>\n\t\t\t\t<button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\n\t\t\t\t  Toggle disabled\n\t\t\t\t</button>\n  \t\t\t</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/component/pagination/pagination.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/component/pagination/pagination.component.ts ***!
  \********************************************************************/
/*! exports provided: NgbdpaginationBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdpaginationBasic", function() { return NgbdpaginationBasic; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdpaginationBasic = /** @class */ (function () {
    function NgbdpaginationBasic() {
        this.page = 4;
        this.page2 = 1;
        this.currentPage = 3;
        this.disablepage = 3;
        this.isDisabled = true;
    }
    NgbdpaginationBasic.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    NgbdpaginationBasic = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pages/component/pagination/pagination.component.html")
        })
    ], NgbdpaginationBasic);
    return NgbdpaginationBasic;
}());



/***/ }),

/***/ "./src/app/pages/component/pagination/pagination.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/component/pagination/pagination.module.ts ***!
  \*****************************************************************/
/*! exports provided: paginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginationModule", function() { return paginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.component */ "./src/app/pages/component/pagination/pagination.component.ts");
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
            title: 'Pagination',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Pagination' }]
        },
        component: _pagination_component__WEBPACK_IMPORTED_MODULE_4__["NgbdpaginationBasic"]
    }];
var paginationModule = /** @class */ (function () {
    function paginationModule() {
    }
    paginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_4__["NgbdpaginationBasic"]]
        })
    ], paginationModule);
    return paginationModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-pagination-pagination-module.js.map