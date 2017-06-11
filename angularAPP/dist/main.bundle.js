webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 137;


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(152);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(213),
        styles: [__webpack_require__(206)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__medium_editor_medium_editor_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__text_area_text_area_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_new_work_new_work_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editor_editor_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__medium_editor_medium_editor_component__["a" /* MediumEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__text_area_text_area_component__["a" /* TextAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_new_work_new_work_component__["a" /* NewWorkComponent */],
            __WEBPACK_IMPORTED_MODULE_11__editor_editor_component__["a" /* EditorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_editor_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

//import { AuthGuard } from './auth.guard';
//import {AuthService} from './services/auth.service';



var appRoutes = [
    //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] /*, canActivate: [AuthGuard]*/ },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_2__editor_editor_component__["a" /* EditorComponent */] /*, canActivate: [AuthGuard]*/ },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: '' }
];
/*
export const appRoutingProviders: any[] = [
  AuthGuard,
  AuthService


];
*/
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewWorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewWorkComponent = (function () {
    function NewWorkComponent() {
    }
    NewWorkComponent.prototype.ngOnInit = function () {
    };
    return NewWorkComponent;
}());
NewWorkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new-work',
        template: __webpack_require__(215),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [])
], NewWorkComponent);

//# sourceMappingURL=new-work.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediumEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediumEditorComponent = (function () {
    function MediumEditorComponent() {
        this.editorId = "editor-" + Math.floor(Math.random() * 10000);
    }
    MediumEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = {
            //skin_url: 'assets/skins/lightgray',
            //selector: '#' + this.editorId,
            setup: function (editor) {
                _this.editor = editor;
                /*
                        this.editor.on('change', () => {
                          const newContent = editor.getContent();
                          this.editorChange.emit(newContent);
                        });
                
                        this.getEditor.emit(this.editor);*/
            }
        };
        //Object.assign(options, this.editorOptions);
        this.editor = new MediumEditor('.editable', options);
        this.editor.subscribe('editableInput', function (event, editable) {
            // Do some work
            //console.log(event);
            console.log(editable);
        });
    };
    MediumEditorComponent.prototype.ngOnDestroy = function () {
        //tinymce.remove(this.editor);
    };
    MediumEditorComponent.prototype.ngOnInit = function () {
    };
    return MediumEditorComponent;
}());
MediumEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-medium-editor',
        template: __webpack_require__(218),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], MediumEditorComponent);

//# sourceMappingURL=medium-editor.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = (function () {
    function TestService(http) {
        this.http = http;
        this.apiUrl = 'https://easy-peasy.herokuapp.com/analyze';
    }
    TestService.prototype.getTextAnalysis = function (data) {
        console.log(data);
        var obj = {};
        obj['text'] = data;
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestMethod */].Post,
            url: this.apiUrl,
            body: obj
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestoptions))
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAreaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextAreaComponent = (function () {
    function TextAreaComponent(textService) {
        //console.log(words);
        this.textService = textService;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TextAreaComponent.prototype.ngAfterViewInit = function () {
    };
    TextAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentSubject.subscribe(function (event) {
            // called when the notifyChildren method is
            // called in the parent component
            var text = jQuery('#textarea').val();
            _this.textService.getTextAnalysis(text).subscribe(function (data) {
                // jQuery('#feedback').empty();
                _this.notify.emit(data);
                console.log(data);
                console.log(data.filter(function (elem) {
                    if (elem.problem == "NotFoundInCommonList") {
                        return elem;
                    }
                }).map(function (elem) { return elem.word; }));
                jQuery('.string-example').highlightWithinTextarea({
                    highlight: [
                        {
                            highlight: data.filter(function (elem) {
                                if (elem.problem == "NotFoundInCommonList") {
                                    return elem;
                                }
                            }).map(function (elem) { return elem.word; }),
                            className: 'blue',
                        },
                        {
                            highlight: data.filter(function (elem) {
                                if (elem.problem == "SpellingError") {
                                    return elem;
                                }
                            }).map(function (elem) { return elem.word; }),
                            className: 'red'
                        },
                    ]
                });
            });
        });
    };
    TextAreaComponent.prototype.myMethod = function (event) {
        /*
        let listOfWords = event.replace( /\n/g, " " ).split( " " );
        let unknowWords =[];
        listOfWords.forEach((item)=>{
          if(words.indexOf(item)===-1){
            unknowWords.push(item);
          }
        });
        console.log(unknowWords);*/
        return event;
        //  console.log(event.replace( /\n/g, " " ).split( " " ));
    };
    TextAreaComponent.prototype.checkButton = function () {
        console.log('button');
    };
    TextAreaComponent.prototype.initializePolling = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .interval(10000)
            .flatMap(function () {
            var text = jQuery('#textarea').val();
            return _this.textService.getTextAnalysis(text);
        });
    };
    return TextAreaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], TextAreaComponent.prototype, "notify", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]) === "function" && _b || Object)
], TextAreaComponent.prototype, "parentSubject", void 0);
TextAreaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-text-area',
        template: __webpack_require__(219),
        styles: [__webpack_require__(212)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__test_service__["a" /* TestService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__test_service__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__test_service__["a" /* TestService */]) === "function" && _c || Object])
], TextAreaComponent);

var _a, _b, _c;
//# sourceMappingURL=text-area.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".editable:focus{\n  outline: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<!--\n<h1>\n  {{title}}\n</h1>\n\n<app-text-area></app-text-area>\n-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<app-new-work></app-new-work>\n<section class=\"archivos\">\n<div class=\"container\">\n<div class=\"mydashboard\">\n    <h2>I want to work with my texts:</h2>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n    <a href=\"#.html\">\n\n    <div class=\"card\">\n\n\n   <h4> <i class=\"fa fa-file-text-o fa-4x\" aria-hidden=\"true\"></i> Demo</h4>\n   <p>Beginner</p>\n   <p>10/06/17</p>\n\n    </div>\n      </a>\n  </div>\n  <div class=\"col-md-3\">\n      <a href=\"#.html\">\n\n    <div class=\"card\">\n\n    <h4> <i class=\"fa fa-file-text-o fa-4x\" aria-hidden=\"true\"></i> Demo2</h4>\n   <p>Beginner</p>\n   <p>10/06/17</p>\n\n    </div>\n      </a>\n  </div>\n  <div class=\"col-md-3\">\n      <a href=\"#.html\">\n\n    <div class=\"card\">\n\n    <h4> <i class=\"fa fa-file-text-o fa-4x\" aria-hidden=\"true\"></i> Demo3</h4>\n   <p>Advanced</p>\n   <p>10/06/17</p>\n\n    </div>\n      </a>\n  </div>\n</div>\n</div>\n </div>\n </section>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div class=\"blue\"></div>\n<div class=\"container\">\n    <h1>New text</h1>\n    <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\">\n            <p>Instructions </p>\n        </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-4\">\n      <p class=\"load\"> I want to write a text in </p>\n        </div>\n    <div class=\"col-md-4\">\n        <select class=\"form-control input-lg\">\n        <option value=\"German\">German</option>\n\n        </select>\n        </div>\n\n </div>\n\n<div class=\"row\">\n    <div class=\"col-md-4\">\n      <p class=\"load\"> for a  </p>\n        </div>\n    <div class=\"col-md-4\">\n        <select class=\"form-control input-lg\">\n              <option value=\"beginner\">beginners</option>\n              <option value=\"intermediate\">intermediate</option>\n              <option value=\"advance\">Advance</option>\n            </select>\n        </div>\n        <div class=\"col-md-1\">\n           <p class=\"load\"> level</p>\n        </div>\n </div>\n\n</div>\n<div class=\"row\">\n  <div class=\"col-md-3 col-md-offset-3\">\n    <a [routerLink]=\"['/editor']\"><button type=\"button\" class=\"btn btn-dark btn-lg\">GO</button></a>\n  </div>\n<div>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#.html\">Easy-Peasy</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-undo\" aria-hidden=\"true\"></i></a></li>\n\n\n\n\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h1>New article</h1>\n  </div>\n  <div class=\"col-md-6\"></div>\n  <button class=\"btn btn-default\"  (click) =\"checkButton()\" role=\"button\">Check</button>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-6\">\n    <app-text-area (notify)='onNotify($event)' [parentSubject]=\"parentSubject\" ></app-text-area>\n  </div>\n  <div style=\"padding-right:40px;\" id=\"feedback\" class=\"col-xs-6\" *ngFor=\"let word of words\">\n    <p style=\"font-size:1.5em;\"><strong>{{word.word}}</strong></p>\n    <p style=\"padding-left:10px;\">definition: {{word.definition}}</p>\n    <p style=\"padding-left:10px; margin-top:0px;\" [hidden]=\"word.suggestions>=0\"><strong>suggestions:</strong><span *ngFor=\"let suggestion of word.suggestions\">{{suggestion}}</span></p>\n    <p  style=\"padding-left:10px; margin-top:0px;\"[hidden]=\"word.suggestions<0\"><strong>no suggestions for this word</strong></p>\n    <p  style=\"padding-left:10px; margin-top:0px;\"><a href=\"word.definition_url\" target=\"_blank\"></a></p>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div class=\"editable\">\n   <p>My father’s family name being <a href=\"https://en.wikipedia.org/wiki/Pip_(Great_Expectations)\">Pirrip</a>, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.</p>\n   <p>I give Pirrip as my father’s family name, on the authority of his tombstone and my sister,—Mrs. Joe Gargery, who married the blacksmith. As I never saw my father or my mother, and never saw any likeness of either of them (for their days were long before the days of photographs), my first fancies regarding what they were like were unreasonably derived from their tombstones. The shape of the letters on my father’s, gave me an odd idea that he was a square, stout, dark man, with curly black hair. From the character and turn of the inscription, “Also Georgiana Wife of the Above,” I drew a childish conclusion that my mother was freckled and sickly. To five little stone lozenges, each about a foot and a half long, which were arranged in a neat row beside their grave, and were sacred to the memory of five little brothers of mine,—who gave up trying to get a living, exceedingly early in that universal struggle,—I am indebted for a belief I religiously entertained that they had all been born on their backs with their hands in their trousers-pockets, and had never taken them out in this state of existence.</p>\n   \n</div>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<textarea id=\"textarea\" class=\"string-example hwt-input hwt-content\" spellcheck=\"false\"\nplaceholder=\"Start writting :D.\"\nmaxlength=\"100000\" style=\"width:600px; height:1000px;\"\n  (input)=\"myMethod($event.target.value)\"\n></textarea>\n"

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(214),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorComponent = (function () {
    function EditorComponent() {
        this.parentSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.words = [];
    }
    EditorComponent.prototype.onNotify = function (message) {
        console.log(message);
        this.words = message;
        //this.words =message.map((item)=>item.word);
    };
    EditorComponent.prototype.checkButton = function () {
        this.parentSubject.next('some value');
    };
    EditorComponent.prototype.ngOnInit = function () {
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__(216),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(217),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ })

},[487]);
//# sourceMappingURL=main.bundle.js.map