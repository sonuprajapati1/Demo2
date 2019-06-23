(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-popover-tooltip-popover-tooltip-module"],{

/***/ "./src/app/pages/component/popover-tooltip/popover-tooltip.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/component/popover-tooltip/popover-tooltip.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Quick and easy popovers</h3>\n                <h6 class=\"card-subtitle\">This is basic popovers</h6>\n                <div class=\"button-box\">\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\"\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\n                      Popover on top\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\"\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\n                      Popover on right\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\"\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\n                      Popover on bottom\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\"\n                            ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\n                      Popover on left\n                    </button>\n                </div>\n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">HTML and bindings in popovers</h3>\n                <h6 class=\"card-subtitle\">Popovers can contain any arbitrary HTML, Angular bindings and even directives!\n  Simply enclose desired content in a <code>&lt;ng-template&gt;</code> element.</h6>\n                <ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\n                <button type=\"button\" class=\"btn btn-secondary\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\n                  I've got markup and bindings in my popover!\n                </button>\n                \n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Custom and manual triggers</h3>\n                <h6 class=\"card-subtitle\">You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.</h6>\n                <button type=\"button\" class=\"btn btn-secondary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">  Hover over me!</button>\n                \n  \t\t\t</div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Popover visibility events</h3>\n                <h6 class=\"card-subtitle\">This is popover event</h6>\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" #popover=\"ngbPopover\"> Open Popover</button>\n                Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Quick and easy tooltips</h3>\n                <h6 class=\"card-subtitle\">This is Quick and easy tooltips</h6>\n                <div class=\"button-box\">\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                  Tooltip on top\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                  Tooltip on right\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                  Tooltip on bottom\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  Tooltip on left\n                </button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">HTML and bindings in tooltips</h3>\n                <h6 class=\"card-subtitle\">Tooltips can contain any arbitrary HTML, Angular bindings and even directives! Simply enclose desired content in a <code>ng-template</code> element.</h6>\n                <ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\n                <button type=\"button\" class=\"btn btn-secondary\" [ngbTooltip]=\"tipContent\">\n                  I've got markup and bindings in my tooltip!\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Custom and manual triggers</h3>\n                <h6 class=\"card-subtitle\">You can easily override open and close triggers by specifying event names (separated by :) in the triggers property.</h6>\n                <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\"> Click me!</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"card-title\">Popover visibility events</h3>\n                <h6 class=\"card-subtitle\">This is Disabled pagination</h6>\n                <div class=\"button-box\">\n                <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\n                  Click me to open a tooltip\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"t.close()\">\n                  Click me to close a tooltip\n                </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/component/popover-tooltip/popover-tooltip.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/component/popover-tooltip/popover-tooltip.component.ts ***!
  \******************************************************************************/
/*! exports provided: NgbdPopTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdPopTooltip", function() { return NgbdPopTooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgbdPopTooltip = /** @class */ (function () {
    function NgbdPopTooltip() {
        this.name = 'World';
    }
    NgbdPopTooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-pagination',
            template: __webpack_require__(/*! ./popover-tooltip.component.html */ "./src/app/pages/component/popover-tooltip/popover-tooltip.component.html")
        })
    ], NgbdPopTooltip);
    return NgbdPopTooltip;
}());



/***/ }),

/***/ "./src/app/pages/component/popover-tooltip/popover-tooltip.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/component/popover-tooltip/popover-tooltip.module.ts ***!
  \***************************************************************************/
/*! exports provided: PopoverTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTooltipModule", function() { return PopoverTooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _popover_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-tooltip.component */ "./src/app/pages/component/popover-tooltip/popover-tooltip.component.ts");
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
            title: 'Popover & Tooltip',
            urls: [{ title: 'Dashboard', url: '/' }, { title: 'ngComponent' }, { title: 'Popover & Tooltip' }]
        },
        component: _popover_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["NgbdPopTooltip"]
    }];
var PopoverTooltipModule = /** @class */ (function () {
    function PopoverTooltipModule() {
    }
    PopoverTooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_popover_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["NgbdPopTooltip"]]
        })
    ], PopoverTooltipModule);
    return PopoverTooltipModule;
}());



/***/ })

}]);
//# sourceMappingURL=component-popover-tooltip-popover-tooltip-module.js.map