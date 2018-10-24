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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-gray{\n  background-color: #f1eded;\n}\n.btn-circle{\n  border-radius: 50%;\n}\n.btn-circle i:before{\n  -webkit-transform: scale(2);\n          transform: scale(2);\n}\n.container-data{\n  height: calc(100% - 79px);\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-white p-0\">\n  <div class=\"w-100 d-flex justify-content-between\">\n    <ul role=\"tablist\" class=\"nav nav-tabs justify-content-start\">\n      <li class=\"nav-item p-2\">\n        <a routerLink=\"/main\" class=\"navbar-brand\"><img src=\"assets/logo.png\" class=\"img-fluid\" alt=\"\"><span><strong>Find</strong> my<br/>cryosphere</span></a>\n      </li>\n      <li class=\"nav-item ml-5 d-flex\">\n        <a class=\"nav-link d-flex align-items-center\" routerLink=\"/main\" routerLinkActive=\"active\">Map View</a>\n      </li>\n      <li class=\"nav-item d-flex\">\n        <a class=\"nav-link d-flex align-items-center\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      </li>\n    </ul>\n      <!-- <form class=\"form-inline w-50 justify-content-end p-2\">\n        <input #searchEl class=\"w-50 form-control mr-sm-2\" type=\"search\" placeholder=\"Search location...\" aria-label=\"Search\">\n        <button class=\"btn btn-primary btn-circle\" type=\"submit\"><i class=\"mdi mdi-magnify\"></i></button>\n      </form> -->\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.service */ "./src/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    // @ViewChild('searchEl') searchRef;
    function AppComponent(mapService) {
        this.mapService = mapService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.mapService.getMapSubject().subscribe(function (map) {
            // if (map) {
            //   this.mapService.setGeocodingUIConf(this.searchRef.nativeElement);
            // }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_map_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_8__["Ng5SliderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["NoopAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-data bg-gray\">\n  <div class=\"row h-100\">\n    <div class=\"col-md-6 p-3 h-100\">\n      <div class=\"card p-5\">\n        <h5>Rainfall level per year <br/><small>http://www.senamhi.gob.bo/sismet</small></h5>\n        <ngx-charts-bubble-chart\n        [view]=\"[600, 450]\"\n        [results]=\"hampaturi\"\n        [showGridLines]=\"true\"\n        [legend]=\"false\"\n        >\n        </ngx-charts-bubble-chart>\n      </div>\n    </div>\n    <div class=\"col-md-6 p-3 h-100\">\n      <div class=\"card p-5\">\n        <h5>Percentage of ice per area <br/><small>http://www.senamhi.gob.bo/sismet</small></h5>\n        <ngx-charts-area-chart-stacked\n          [view]=\"[600, 450]\"\n          [scheme]=\"colorScheme\"\n          [results]=\"multi\"\n          [gradient]=\"gradient\"\n          [xAxis]=\"showXAxis\"\n          [yAxis]=\"showYAxis\"\n          [legend]=\"showLegend\"\n          [showXAxisLabel]=\"showXAxisLabel\"\n          [showYAxisLabel]=\"showYAxisLabel\"\n          [xAxisLabel]=\"'Year'\"\n          [yAxisLabel]=\"'Ammount'\">\n        </ngx-charts-area-chart-stacked>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"row h-50\">\n    <div class=\"col-md-12 p-3\">\n      <div class=\"card\">\n        <ngx-charts-area-chart-stacked\n          width=\"100%\"\n          [view]=\"view\"\n          [scheme]=\"colorScheme\"\n          [results]=\"multi\"\n          [gradient]=\"gradient\"\n          [xAxis]=\"showXAxis\"\n          [yAxis]=\"showYAxis\"\n          [legend]=\"showLegend\"\n          [showXAxisLabel]=\"showXAxisLabel\"\n          [showYAxisLabel]=\"showYAxisLabel\"\n          [xAxisLabel]=\"xAxisLabel\"\n          [yAxisLabel]=\"yAxisLabel\"\n        >\n        </ngx-charts-area-chart-stacked>\n      </div>\n    </div>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.view = [550, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#4fcfff', '#ba5706', '#7fd5d2', '#AAAAAA']
        };
        // line, area
        this.autoScale = true;
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_1__["single"], multi: _data__WEBPACK_IMPORTED_MODULE_1__["multi"], hampaturi: _data__WEBPACK_IMPORTED_MODULE_1__["hampaturi"] });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: single, multi, hampaturi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hampaturi", function() { return hampaturi; });
var single = [
    {
        "name": "Germany",
        "value": 8940000
    },
    {
        "name": "USA",
        "value": 5000000
    },
    {
        "name": "France",
        "value": 7200000
    }
];
var multi = [
    {
        "name": "Water",
        "series": [
            {
                "name": "2010",
                "value": 7300000
            },
            {
                "name": "2011",
                "value": 8940000
            }
        ]
    },
    {
        "name": "Land",
        "series": [
            {
                "name": "2010",
                "value": 7870000
            },
            {
                "name": "2011",
                "value": 8270000
            }
        ]
    },
    {
        "name": "Ice",
        "series": [
            {
                "name": "2010",
                "value": 5000002
            },
            {
                "name": "2011",
                "value": 5800000
            }
        ]
    }
];
var hampaturi = [
    {
        "name": "Datos 2000",
        "series": [
            {
                "name": "2000",
                "x": "2000",
                "y": "January",
                "r": 19
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "February",
                "r": 14
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "March",
                "r": 19
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "April",
                "r": 0
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "May",
                "r": 0
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "June",
                "r": 3
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "July",
                "r": 2
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "August",
                "r": 8
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "September",
                "r": 2
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "October",
                "r": 18
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "September",
                "r": 7
            },
            {
                "name": "2000",
                "x": "2000",
                "y": "December",
                "r": 23
            }
        ]
    },
    {
        "name": "Datos 2001",
        "series": [
            {
                "name": "2001",
                "x": "2001",
                "y": "January",
                "r": 30
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "February",
                "r": 21
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "March",
                "r": 20
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "April",
                "r": 7
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "May",
                "r": 0
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "June",
                "r": 0
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "July",
                "r": 0
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "August",
                "r": 0
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "September",
                "r": 0
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "October",
                "r": 0
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "September",
                "r": 17
            },
            {
                "name": "2001",
                "x": "2001",
                "y": "December",
                "r": 0
            }
        ]
    },
    {
        "name": "Datos 2002",
        "series": [
            {
                "name": "2002",
                "x": "2002",
                "y": "January",
                "r": 20
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "February",
                "r": 20
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "March",
                "r": 22
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "April",
                "r": 18
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "May",
                "r": 5
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "June",
                "r": 6
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "July",
                "r": 13
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "August",
                "r": 12
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "September",
                "r": 11
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "October",
                "r": 18
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "September",
                "r": 19
            },
            {
                "name": "2002",
                "x": "2002",
                "y": "December",
                "r": 23
            }
        ]
    },
    {
        "name": "Datos 2003",
        "series": [
            {
                "name": "2003",
                "x": "2003",
                "y": "January",
                "r": 24
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "February",
                "r": 21
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "March",
                "r": 26
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "April",
                "r": 14
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "May",
                "r": 4
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "June",
                "r": 1
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "July",
                "r": 2
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "August",
                "r": 5
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "September",
                "r": 13
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "October",
                "r": 8
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "September",
                "r": 15
            },
            {
                "name": "2003",
                "x": "2003",
                "y": "December",
                "r": 21
            }
        ]
    },
    {
        "name": "Datos 2004",
        "series": [
            {
                "name": "2004",
                "x": "2004",
                "y": "January",
                "r": 29
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "February",
                "r": 21
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "March",
                "r": 17
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "April",
                "r": 13
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "May",
                "r": 3
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "June",
                "r": 3
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "July",
                "r": 6
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "August",
                "r": 10
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "September",
                "r": 10
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "October",
                "r": 7
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "September",
                "r": 14
            },
            {
                "name": "2004",
                "x": "2004",
                "y": "December",
                "r": 25
            }
        ]
    },
    {
        "name": "Datos 2005",
        "series": [
            {
                "name": "2005",
                "x": "2005",
                "y": "January",
                "r": 27
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "February",
                "r": 22
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "March",
                "r": 15
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "April",
                "r": 13
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "May",
                "r": 2
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "June",
                "r": 0
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "July",
                "r": 0
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "August",
                "r": 1
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "September",
                "r": 11
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "October",
                "r": 20
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "September",
                "r": 18
            },
            {
                "name": "2005",
                "x": "2005",
                "y": "December",
                "r": 17
            }
        ]
    },
    {
        "name": "Datos 2006",
        "series": [
            {
                "name": "2006",
                "x": "2006",
                "y": "January",
                "r": 28
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "February",
                "r": 22
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "March",
                "r": 24
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "April",
                "r": 14
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "May",
                "r": 1
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "June",
                "r": 3
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "July",
                "r": 0
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "August",
                "r": 7
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "September",
                "r": 5
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "October",
                "r": 15
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "September",
                "r": 23
            },
            {
                "name": "2006",
                "x": "2006",
                "y": "December",
                "r": 26
            }
        ]
    },
    {
        "name": "Datos 2007",
        "series": [
            {
                "name": "2007",
                "x": "2007",
                "y": "January",
                "r": 22
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "February",
                "r": 21
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "March",
                "r": 27
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "April",
                "r": 17
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "May",
                "r": 5
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "June",
                "r": 0
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "July",
                "r": 5
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "August",
                "r": 2
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "September",
                "r": 19
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "October",
                "r": 12
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "September",
                "r": 17
            },
            {
                "name": "2007",
                "x": "2007",
                "y": "December",
                "r": 21
            }
        ]
    },
    {
        "name": "Datos 2008",
        "series": [
            {
                "name": "2008",
                "x": "2008",
                "y": "January",
                "r": 28
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "February",
                "r": 24
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "March",
                "r": 18
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "April",
                "r": 5
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "May",
                "r": 5
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "June",
                "r": 2
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "July",
                "r": 1
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "August",
                "r": 1
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "September",
                "r": 2
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "October",
                "r": 11
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "September",
                "r": 10
            },
            {
                "name": "2008",
                "x": "2008",
                "y": "December",
                "r": 23
            }
        ]
    },
    {
        "name": "Datos 2009",
        "series": [
            {
                "name": "2009",
                "x": "2009",
                "y": "January",
                "r": 22
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "February",
                "r": 22
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "March",
                "r": 24
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "April",
                "r": 17
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "May",
                "r": 3
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "June",
                "r": 0
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "July",
                "r": 2
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "August",
                "r": 0
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "September",
                "r": 6
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "October",
                "r": 11
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "September",
                "r": 16
            },
            {
                "name": "2009",
                "x": "2009",
                "y": "December",
                "r": 21
            }
        ]
    },
    {
        "name": "Datos 2010",
        "series": [
            {
                "name": "2010",
                "x": "2010",
                "y": "January",
                "r": 28
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "February",
                "r": 21
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "March",
                "r": 19
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "April",
                "r": 11
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "May",
                "r": 11
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "June",
                "r": 1
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "July",
                "r": 1
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "August",
                "r": 0
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "September",
                "r": 4
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "October",
                "r": 7
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "September",
                "r": 8
            },
            {
                "name": "2010",
                "x": "2010",
                "y": "December",
                "r": 24
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-data\">\n  <div class=\"row no-gutters h-100\">\n    <div class=\"col-md-4 bg-gray tabset-fixed\">\n\n      <ngb-tabset>\n        <ngb-tab title=\"Data\">\n            <ng-template ngbTabContent>\n              <div class=\"card p-3\">\n                <label>Filter By Year</label>\n                <button class=\"btn-success mb-4\" (click)=\"onSetFilterByYear()\">Generate</button>\n                <div [hidden]=\"hideFilterByYearData\">\n                  <div class=\"mb-2\">\n                    <label>Years</label>\n                    <ng5-slider [(value)]=\"value\" [options]=\"options\" (userChange)=\"onSliderChange($event)\"></ng5-slider>\n                  </div>\n                  <ngx-charts-area-chart-stacked\n                    width=\"100%\"\n                    [hidden]=\"multi.length === 0\"\n                    [view]=\"view\"\n                    [scheme]=\"colorScheme\"\n                    [results]=\"multi\"\n                    [gradient]=\"gradient\"\n                    [xAxis]=\"showXAxis\"\n                    [yAxis]=\"showYAxis\"\n                    [legend]=\"showLegend\"\n                    [showXAxisLabel]=\"showXAxisLabel\"\n                    [showYAxisLabel]=\"showYAxisLabel\"\n                    [xAxisLabel]=\"xAxisLabel\"\n                    [yAxisLabel]=\"yAxisLabel\"\n                    (select)=\"onSelect($event)\">\n                  </ngx-charts-area-chart-stacked>\n                </div>\n              </div>\n            </ng-template>\n          </ngb-tab>\n        <!-- <ngb-tab title=\"Filters\">\n          <ng-template ngbTabContent>\n            <div class=\"card p-3\">\n              <div class=\"btn-group btn-group-toggle\" ngbRadioGroup [(ngModel)]=\"countrySelected\" (ngModelChange)=\"onChangeCountry($event)\">\n                  <label ngbButtonLabel class=\"btn btn-sm btn-success\">\n                    <input ngbButton type=\"radio\" value=\"argentina\"> Argentina\n                  </label>\n                  <label ngbButtonLabel class=\"btn btn-sm btn-warning\">\n                    <input ngbButton type=\"radio\" value=\"canada\"> Canada\n                  </label>\n                  <label ngbButtonLabel class=\"btn btn-sm btn-primary\">\n                    <input ngbButton type=\"radio\" value=\"rusia\"> Rusia\n                  </label>\n                </div>\n            </div>\n          </ng-template>\n        </ngb-tab> -->\n        <ngb-tab title=\"Images\">\n          <ng-template ngbTabContent>\n            <div class=\"card\">\n              <p class=\"p-4\">The cryosphere is those portions of Earth's surface where water is in solid form, including sea ice, lake ice, river ice, snow cover, glaciers, ice caps, ice sheets, and frozen ground.</p>\n              <img width=\"100%\" height=\"auto\" src=\"https://www.nasa.gov/sites/default/files/thumbnails/image/seaicemin18_twitter_2_0.gif\"/>\n              <ngb-carousel *ngIf=\"images\">\n                <ng-template ngbSlide>\n                  <img [src]=\"images[0]\" alt=\"Random first slide\">\n                </ng-template>\n                <ng-template ngbSlide>\n                  <img [src]=\"images[1]\" alt=\"Random second slide\">\n                </ng-template>\n                <ng-template ngbSlide>\n                  <img [src]=\"images[2]\" alt=\"Random third slide\">\n                </ng-template>\n\n              </ngb-carousel>\n            </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"About\">\n          <ng-template ngbTabContent>\n            <div class=\"card p-5\">\n              <p>This project was developed for the Cryoning Devs</p>\n              <p>Enjoy!</p>\n              <h1><i class=\"mdi mdi-linux\"></i></h1>\n            </div>\n          </ng-template>\n        </ngb-tab>\n      </ngb-tabset>\n\n    </div>\n    <div class=\"col-md-8 h-100\">\n      <div class=\"btn-group btn-group-toggle fixed-layers\" ngbRadioGroup [(ngModel)]=\"countrySelected\" (ngModelChange)=\"onChangeCountry($event)\">\n          <label ngbButtonLabel class=\"btn btn-sm btn-success\">\n            <input ngbButton type=\"radio\" value=\"argentina\"> Argentina\n          </label>\n          <label ngbButtonLabel class=\"btn btn-sm btn-warning\">\n            <input ngbButton type=\"radio\" value=\"canada\"> Canada\n          </label>\n          <label ngbButtonLabel class=\"btn btn-sm btn-primary\">\n            <input ngbButton type=\"radio\" value=\"rusia\"> Rusia\n          </label>\n      </div>\n      <div class=\"btn-group btn-group-toggle fixed-layers-top\" style=\"background: #DDDDDD; border-radius: 5px; padding: 5px;\">\n        <!-- <label ngbButtonLabel class=\"btn btn-sm btn-primary\">\n          <input ngbButton type=\"radio\" value=\"SMAP_L4_Snow_Mass\"> Snow Mass\n        </label>\n        <label ngbButtonLabel class=\"btn btn-sm btn-primary\">\n          <input ngbButton type=\"radio\" value=\"MODIS_Terra_NDSI_Snow_Cover\"> Snow Cover\n        </label> -->\n        <h5 [hidden]=\"distanceInMeters == null\">Minimum distance in km: {{distanceInMeters}}</h5>\n        <!-- <label ngbButtonLabel class=\"btn btn-sm btn-primary\">\n          <input ngbButton type=\"radio\" value=\"SMAP_L4_Frozen_Area\"> Frozen Area\n        </label> -->\n      </div>\n      <app-map [dataLayerSelected]=\"dataLayerSelected\"></app-map>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/web.service */ "./src/app/services/web.service.ts");
/* harmony import */ var _map_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../map/map.service */ "./src/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { single, multi } from '../data';
var MainComponent = /** @class */ (function () {
    function MainComponent(mapService, webService) {
        this.mapService = mapService;
        this.webService = webService;
        this.countrySelected = '';
        this.dataLayerSelected = 'SMAP_L4_Frozen_Area';
        this.distanceInMeters = null;
        this.hideFilterByYearData = true;
        this.layersByYear = [];
        this.title = 'cryosphere-frontend';
        this.value = 10;
        this.years = [];
        this.options = {
            floor: 0,
            ceil: 100,
            showTicks: true
        };
        this.images = [1, 2, 3].map(function () { return "https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/2018-07-09/250m/6/13/" + Math.floor((Math.random() * 40) + 1) + ".jpg"; });
        this.multi = [];
        this.view = [470, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Area Percentage';
        this.colorScheme = {
            domain: ['#8F73F1', '#D56F59', '#A5D4FF']
        };
        // line, area
        this.autoScale = true;
    }
    MainComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent.prototype.ngOnChanges = function (changes) { };
    MainComponent.prototype.onChangeCountry = function ($event) {
        var _this = this;
        this.mapService.getNearestCryosphreByUserLocation($event).then(function (data) {
            _this.distanceInMeters = data;
        });
    };
    MainComponent.prototype.onSetFilterByYear = function () {
        var _this = this;
        this.mapService.getMapSubject().subscribe(function (mapObj) {
            if (mapObj) {
                _this.mapService.getMapOverlay().clear();
                _this.mapService.clearGeoCodingMarkers();
                _this.mapService.clearShortestPolylines();
                _this.mapService.setImageLayerDataByYears();
                _this.setSliderValuesByYear();
                // this.saveLayersForAPI().then((data) => {
                // if (data) {
                _this.sendCryosphereDataByYear();
                // }
                // });
                _this.hideFilterByYearData = false;
            }
        });
    };
    MainComponent.prototype.onSliderChange = function (changeContext) {
        var _this = this;
        var overlays = this.mapService.getMapOverlay().getArray();
        overlays.forEach(function (val, idx) {
            if (_this.years.indexOf(changeContext.value) === idx) {
                val.setOpacity(0.5);
            }
            else {
                val.setOpacity(0);
            }
        });
    };
    MainComponent.prototype.saveLayersForAPI = function () {
        return this.mapService.saveDataLayerForAPI();
    };
    MainComponent.prototype.sendCryosphereDataByYear = function () {
        var _this = this;
        this.webService.sendCryosphereDataByYear().toPromise().then(function (response) {
            console.log('Processed successfully');
            var data = JSON.parse(response['_body']).data;
            _this.multi = data;
        });
    };
    MainComponent.prototype.setSliderValuesByYear = function () {
        var _this = this;
        this.years = this.mapService.getYearSet();
        this.value = this.years[0];
        if (this.optionTimer) {
            clearTimeout(this.optionTimer);
        }
        this.optionTimer = setTimeout(function () {
            var newOptions = Object.assign({}, _this.options);
            newOptions.floor = _this.years[0];
            newOptions.ceil = _this.years[_this.years.length - 1];
            newOptions.maxLimit = newOptions.ceil;
            _this.options = newOptions;
        });
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_map_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"], _services_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #map id=\"map\" class=\"w-100 h-100\"></div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.service */ "./src/app/map/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = /** @class */ (function () {
    function MapComponent(gmapService) {
        this.gmapService = gmapService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapProm = this.gmapService.initMap(this.gmapElement.nativeElement, {
            center: { lat: -16.5214, lng: -67.253 },
            scrollwheel: true,
            zoom: 5,
            maxZoom: 10
        });
        this.mapProm.then(function () {
            _this.map = _this.gmapService.getMap();
            // this.gmapService.setMapClickEv();
            _this.gmapService.setImageLayer(_this.dataLayerSelected);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "dataLayerSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapComponent.prototype, "gmapElement", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/map.service.ts":
/*!************************************!*\
  !*** ./src/app/map/map.service.ts ***!
  \************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/web.service */ "./src/app/services/web.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var getScriptSrc = function (callbackName) {
    return "https://maps.googleapis.com/maps/api/js?key=AIzaSyDx92iaKUnowpTZOLt1FGAJqi98picikH8" +
        ("&libraries=places,geometry&callback=" + callbackName);
};
var MapService = /** @class */ (function () {
    function MapService(webService, mapService) {
        var _this = this;
        this.webService = webService;
        this.mapService = mapService;
        this.mapSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.layerConf = {
            'SMAP_L4_Snow_Mass': {
                gMapsLevel: 'GoogleMapsCompatible_Level6'
            },
            'MODIS_Terra_NDSI_Snow_Cover': {
                gMapsLevel: 'GoogleMapsCompatible_Level8'
            },
            'SMAP_L4_Frozen_Area': {
                gMapsLevel: 'GoogleMapsCompatible_Level6',
                minDate: '2015/04/13'
            }
        };
        this.markers = [
            // Canada
            {
                name: 'canada',
                userCoor: [49.02147022636165, -106.33994195686506],
                mapBBCoor: [[29.75101149258984, -129.133139588701], [56.93657550056194, -74.78789422737287]]
            },
            // Rusia
            {
                name: 'rusia',
                userCoor: [67.9047751553543, 104.27632993158204],
                mapBBCoor: [[59.66743389230126, 75.6823510497461], [73.61522579262414, 130.02759641107423]]
            },
            // Argentina
            {
                name: 'argentina',
                userCoor: [-29.613533047982706, -68.58363456147652],
                mapBBCoor: [[-37.71648323826961, -77.87085837739448], [-22.083171630144744, -50.69823569673042]]
            }
        ];
        this.geoCodingMarkers = [];
        this.yearSet = [];
        this.layersByYear = [];
        this.loadScriptLoadingPromise();
        this.onReady().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
    }
    MapService.prototype.onReady = function () {
        return this.scriptLoadingPromise;
    };
    MapService.prototype.clearGeoCodingMarkers = function () {
        // Clear out the old markers.
        this.geoCodingMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.geoCodingMarkers = [];
    };
    MapService.prototype.clearShortestPolylines = function () {
        if (this.shortestLine) {
            this.shortestLine.setMap(null);
        }
    };
    MapService.prototype.initMap = function (mapHtmlElement, options) {
        var _this = this;
        return this.onReady().then(function () {
            _this.map = new google.maps.Map(mapHtmlElement, options);
            _this.mapSubject.next(_this.map);
            return _this.map;
        });
    };
    MapService.prototype.getNearestCryosphreByUserLocation = function (country) {
        var _this = this;
        var countryData = this.markers.filter(function (val) { return val.name === country; })[0];
        var mapBBCoor = countryData.mapBBCoor, userCoor = countryData.userCoor, name = countryData.name;
        var data = {
            boundingBox: mapBBCoor,
            userLocation: userCoor,
            image: { imageName: name }
        };
        this.clearGeoCodingMarkers();
        this.clearShortestPolylines();
        this.getMapOverlay().clear();
        this.setImageLayer('SMAP_L4_Frozen_Area');
        var latLng = new google.maps.LatLng(userCoor[0], userCoor[1]);
        this.geoCodingMarkers.push(new google.maps.Marker({
            position: latLng,
            map: this.map
        }));
        this.map.setCenter(latLng);
        return this.webService.sendCryosphereData(data).toPromise().then(function (response) {
            var point = JSON.parse(response['_body']).data;
            _this.drawLineBetweenTwoPoints(userCoor, point);
            return _this.getDistanceTwoPoints(userCoor, point);
        });
    };
    MapService.prototype.getCurrentDateStringFormat = function () {
        var currentDate = new Date();
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
        var monthVal = currentDate.getMonth() + 1;
        var monthText = monthVal < 10 ? "0" + monthVal : monthVal;
        return currentDate.getFullYear() + '-' + monthText + '-' + '07';
    };
    MapService.prototype.getMapSubject = function () {
        return this.mapSubject.asObservable();
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    MapService.prototype.getMapBounds = function () {
        return this.map.getBounds();
    };
    MapService.prototype.getMapOverlay = function () {
        return this.map.overlayMapTypes;
    };
    MapService.prototype.getUserMarker = function () {
        return this.geoCodingMarkers.length > 0 ? this.geoCodingMarkers[0] : null;
    };
    MapService.prototype.getTileUrl = function (layerConf, date) {
        var type = layerConf.name;
        var gMapsLevel = layerConf.gMapsLevel;
        return function (tile, zoom) {
            return "//gibs.earthdata.nasa.gov/wmts/epsg3857/best/" + type + "/default/" + date +
                ("/" + gMapsLevel + "/" + zoom + "/" + tile.y + "/" + tile.x + ".png");
        };
    };
    MapService.prototype.getYearSet = function () {
        return this.yearSet;
    };
    MapService.prototype.radians = function (x) {
        return x * Math.PI / 180;
    };
    MapService.prototype.getDistanceTwoPoints = function (p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.radians(p2[0] - p1[0]);
        var dLong = this.radians(p2[1] - p1[1]);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.radians(p1[0])) * Math.cos(this.radians(p2[0])) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return ((R * c) / 1000).toFixed(2);
    };
    MapService.prototype.drawLineBetweenTwoPoints = function (p1, p2) {
        this.shortestLine = new google.maps.Polyline({
            path: [new google.maps.LatLng(p1[0], p1[1]), new google.maps.LatLng(p2[0], p2[1])],
            strokeColor: '#000000',
            strokeOpacity: 1.0,
            strokeWeight: 10,
            geodesic: true,
            map: this.map
        });
    };
    MapService.prototype.sendNearestCryosphereData = function () {
        var userLocation = this.getUserMarker();
        var userCoor = [userLocation.position.lat(), userLocation.position.lng()];
        var mapBBox = this.getMapBounds();
        var mapBBoxNE = mapBBox.getNorthEast();
        var mapBBoxSW = mapBBox.getSouthWest();
        var mapBBCoor = [[mapBBoxSW.lat(), mapBBoxSW.lng()], [mapBBoxNE.lat(), mapBBoxNE.lng()]];
        this.setImageLayer('SMAP_L4_Frozen_Area');
        // this.saveDataLayerForAPI().then(data => {
        // this.webService.sendCryosphereData(userCoor, mapBBCoor).toPromise().then((data) => {
        // console.log(data);
        // console.log('Processed Succesfully');
        // });
        // });
    };
    MapService.prototype.saveDataLayerForAPI = function () {
        var _this = this;
        this.layersByYear = [];
        return new Promise(function (resolve, reject) {
            var overlays = _this.getMapOverlay().getArray();
            overlays.forEach(function (val, idx, arr) {
                val.setOpacity(1);
                setTimeout(function () {
                    html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(document.getElementById('map')).then(function (canvas) {
                        var layerData = {
                            imageName: idx,
                            encodedImage: canvas.toDataURL('image/png'),
                            dateImage: _this.yearSet[idx]
                        };
                        _this.layersByYear.push(layerData);
                        val.setOpacity(0);
                        if (idx === arr.length - 1) {
                            resolve(_this.layersByYear);
                        }
                    });
                }, 3000);
            });
        });
    };
    MapService.prototype.setImageLayer = function (dataLayer, dateString, isDateRange) {
        var layerInfo = {
            name: dataLayer,
            gMapsLevel: this.layerConf[dataLayer].gMapsLevel
        };
        dateString = dateString || this.getCurrentDateStringFormat();
        var getTileUrl = this.getTileUrl(layerInfo, dateString);
        var layerOptions = {
            alt: dataLayer,
            getTileUrl: getTileUrl,
            maxZoom: 10,
            minZoom: 1,
            name: dataLayer,
            tileSize: new google.maps.Size(256, 256),
            opacity: 0.5
        };
        var imageMapType = new google.maps.ImageMapType(layerOptions);
        if (!isDateRange) {
            this.map.overlayMapTypes.clear();
        }
        else {
            var overlays = this.getMapOverlay().getArray();
            overlays.forEach(function (val, idx) {
                if (idx > 0) {
                    val.setOpacity(0);
                }
                else {
                    val.setOpacity(0.5);
                }
            });
        }
        this.map.overlayMapTypes.push(imageMapType);
    };
    MapService.prototype.setGeoJSONData = function (geoData) {
        this.map.data.loadGeoJson(geoData);
    };
    MapService.prototype.setGeoJSONStylesData = function (options) {
        this.map.data.setStyle(options);
    };
    MapService.prototype.setGeocodingUIConf = function (inputEl) {
        var _this = this;
        this.searchBox = new google.maps.places.SearchBox(inputEl);
        this.map.addListener('bounds_changed', function () {
            _this.searchBox.setBounds(_this.map.getBounds());
        });
        this.searchBox.addListener('places_changed', function () {
            var places = _this.searchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            _this.clearGeoCodingMarkers();
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log('Returned place contains no geometry');
                    return;
                }
                // Create a marker for each place.
                // this.geoCodingMarkers.push(new google.maps.Marker({
                //   map: this.map,
                //   title: place.name,
                //   position: place.geometry.location
                // }));
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                }
                else {
                    bounds.extend(place.geometry.location);
                }
            });
            _this.map.fitBounds(bounds);
            // this.sendNearestCryosphereData();
        });
    };
    MapService.prototype.setImageLayerDataByYears = function () {
        var layerName = 'SMAP_L4_Frozen_Area';
        var minDateStr = this.layerConf[layerName].minDate;
        var validDatStr = minDateStr.split('/').join('-');
        var minDate = new Date(validDatStr + "T00:00:00");
        var currentDate = new Date();
        currentDate.setDate(7);
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);
        this.yearSet = [];
        while (minDate < currentDate) {
            var year = minDate.getFullYear();
            this.yearSet.push(year);
            if (year === currentDate.getFullYear()) {
                minDate.setDate(currentDate.getDate());
                minDate.setMonth(currentDate.getMonth());
            }
            var monthVal = minDate.getMonth() + 1;
            var monthText = monthVal < 10 ? "0" + monthVal : monthVal;
            var dateVal = minDate.getDate();
            var dateTxt = dateVal < 10 ? "0" + dateVal : dateVal;
            var dateStr = minDate.getFullYear() + '-' + monthText + '-' + dateTxt;
            this.setImageLayer(layerName, dateStr, true);
            minDate.setFullYear(year + 1);
        }
    };
    MapService.prototype.setMapClickEv = function () {
        var _this = this;
        this.map.addListener('click', function (ev) {
            var latLng = ev.latLng;
            _this.clearGeoCodingMarkers();
            _this.geoCodingMarkers.push(new google.maps.Marker({
                map: _this.map,
                position: latLng
            }));
            _this.sendNearestCryosphereData();
        });
    };
    MapService.prototype.loadScriptLoadingPromise = function () {
        var script = window.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        var callbackName = 'initMap';
        script.src = getScriptSrc(callbackName);
        this.scriptLoadingPromise = new Promise(function (resolve, reject) {
            window[callbackName] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        window.document.body.appendChild(script);
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_web_service__WEBPACK_IMPORTED_MODULE_3__["WebService"], MapService])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/web.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/web.service.ts ***!
  \*****************************************/
/*! exports provided: WebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebService", function() { return WebService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebService = /** @class */ (function () {
    function WebService(http) {
        this.http = http;
        this.baseUrl = 'http://172.26.40.87:8080/cryosphere/rest';
    }
    WebService.prototype.sendCryosphereData = function (data) {
        var url = this.baseUrl + "/maps/getNearestCryosphere";
        return this.http.post(url, data);
    };
    WebService.prototype.sendCryosphereDataByYear = function () {
        var url = this.baseUrl + "/maps/calculatePercentages";
        return this.http.get(url);
    };
    WebService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], WebService);
    return WebService;
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

module.exports = __webpack_require__(/*! /home/joel/projects/nasa/cryosphere-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map