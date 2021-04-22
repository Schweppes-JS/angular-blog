(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Yip":
/*!**********************************************************!*\
  !*** ./src/app/shared/modules/loading/loading.module.ts ***!
  \**********************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/loading/components/loading/loading.component */ "adgX");




class LoadingModule {
}
LoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoadingModule });
LoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LoadingModule_Factory(t) { return new (t || LoadingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoadingModule, { declarations: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
                exports: [src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "+aif":
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/modules/backendErrorMessages/components/backendErrorMessages.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BackendErrorMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendErrorMessagesComponent", function() { return BackendErrorMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BackendErrorMessagesComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const errorMessage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](errorMessage_r1);
} }
class BackendErrorMessagesComponent {
    ngOnInit() {
        this.errorMessages = Object.keys(this.backendErrors).map((name) => {
            const messages = this.backendErrors[name].join(', ');
            return `${name} ${messages}`;
        });
    }
}
BackendErrorMessagesComponent.ɵfac = function BackendErrorMessagesComponent_Factory(t) { return new (t || BackendErrorMessagesComponent)(); };
BackendErrorMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackendErrorMessagesComponent, selectors: [["mc-backend-error-messages"]], inputs: { backendErrors: "backendErrors" }, decls: 2, vars: 1, consts: [[1, "error-messages"], [4, "ngFor", "ngForOf"]], template: function BackendErrorMessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BackendErrorMessagesComponent_li_1_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errorMessages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["<ul[_ngcontent-%COMP%]   class=\"error-messages\"[_ngcontent-%COMP%] > <li[_ngcontent-%COMP%]   *ngFor=\"let errorMessage of errorMessages\"[_ngcontent-%COMP%] > {{errorMessage}}</li>\r\n</ul>"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendErrorMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-backend-error-messages",
                templateUrl: "./backendErrorMessages.component.html",
                styleUrls: ["./backendErrorMessages.component.html"]
            }]
    }], null, { backendErrors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "/BXF":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/modules/articleForm/components/articleForm/articleForm.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ArticleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFormComponent", function() { return ArticleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages.component */ "+aif");





function ArticleFormComponent_mc_backend_error_messages_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", ctx_r0.errorsProps);
} }
class ArticleFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.articleSubmitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    ngOnInit() {
        this.initializeForm();
    }
    initializeForm() {
        this.form = this.fb.group({
            title: this.initialValuesProps.title,
            description: this.initialValuesProps.description,
            body: this.initialValuesProps.body,
            tagList: this.initialValuesProps.tagList.join(' ')
        });
    }
    onSubmit() {
        this.articleSubmitEvent.emit(this.form.value);
    }
}
ArticleFormComponent.ɵfac = function ArticleFormComponent_Factory(t) { return new (t || ArticleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ArticleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleFormComponent, selectors: [["mc-article-form"]], inputs: { initialValuesProps: ["initialValues", "initialValuesProps"], isSubmittingProps: ["isSubmitting", "isSubmittingProps"], errorsProps: ["errors", "errorsProps"] }, outputs: { articleSubmitEvent: "articleSubmit" }, decls: 18, vars: 3, consts: [[1, "editor-page"], [1, "container", "page"], [1, "row"], [1, "col-md-10", "offset-md-1", "col-xs-12"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Article title", "formControlName", "title", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "What is this article about?", "formControlName", "description", 1, "form-control", "form-control-lg"], ["rows", "8", "placeholder", "Write your article (in markdown)", "formControlName", "body", 1, "form-control", "form-control-lg"], ["type", "text", "placeholder", "Enter tags", "formControlName", "tagList", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "pull-xs-right", "btn-primary", 3, "disabled"], [3, "backendErrors"]], template: function ArticleFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleFormComponent_mc_backend_error_messages_4_Template, 1, 1, "mc-backend-error-messages", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ArticleFormComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Publish article ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorsProps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid || ctx.isSubmittingProps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_3__["BackendErrorMessagesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-article-form",
                templateUrl: "./articleForm.component.html"
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { initialValuesProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["initialValues"]
        }], isSubmittingProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["isSubmitting"]
        }], errorsProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["errors"]
        }], articleSubmitEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["articleSubmit"]
        }] }); })();


/***/ }),

/***/ "/TBE":
/*!**********************************************************!*\
  !*** ./src/app/shared/modules/tagList/tagList.module.ts ***!
  \**********************************************************/
/*! exports provided: TagListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListModule", function() { return TagListModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/tagList/components/tagList/tagList.component */ "9CQT");




class TagListModule {
}
TagListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TagListModule });
TagListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TagListModule_Factory(t) { return new (t || TagListModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TagListModule, { declarations: [src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]],
                exports: [src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_2__["TagListComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "/XYW":
/*!*******************************************!*\
  !*** ./src/app/auth/store/sync.action.ts ***!
  \*******************************************/
/*! exports provided: logoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "EGNd");


const logoutAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGOUT);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\angular\angular-blog\src\main.ts */"zUnb");


/***/ }),

/***/ "08Do":
/*!************************************************************!*\
  !*** ./src/app/shared/services/authInterceprot.service.ts ***!
  \************************************************************/
/*! exports provided: AuthInterceprot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceprot", function() { return AuthInterceprot; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/persistence.service */ "q3xw");



class AuthInterceprot {
    constructor(persistanceService) {
        this.persistanceService = persistanceService;
    }
    intercept(request, next) {
        const token = this.persistanceService.get("accessToken");
        request = request.clone({
            setHeaders: {
                Authorization: token ? `Token ${token}` : ""
            }
        });
        return next.handle(request);
    }
}
AuthInterceprot.ɵfac = function AuthInterceprot_Factory(t) { return new (t || AuthInterceprot)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["PersistanceService"])); };
AuthInterceprot.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceprot, factory: AuthInterceprot.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceprot, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["PersistanceService"] }]; }, null); })();


/***/ }),

/***/ "0UP4":
/*!**************************************************!*\
  !*** ./src/app/createArticle/store/selectors.ts ***!
  \**************************************************/
/*! exports provided: createArticleFeatureSelector, isSubmittingSelector, validationErrorsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticleFeatureSelector", function() { return createArticleFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function() { return isSubmittingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function() { return validationErrorsSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const createArticleFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("createArticle");
const isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(createArticleFeatureSelector, (createArticleState) => createArticleState.isSubmitting);
const validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(createArticleFeatureSelector, (createArticleState) => createArticleState.validationErrors);


/***/ }),

/***/ "0aJT":
/*!**************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/store/reducers.ts ***!
  \**************************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/popularTags/store/actions/getPopularTags.action */ "KaLh");


const initialState = {
    data: null,
    isLoading: false,
    error: null
};
const popularTagsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__["getPopularTagsAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__["getPopularTagsSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isLoading: false, data: action.popularTags }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_1__["getPopularTagsFailureAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: false }))));
function reducers(state, action) {
    return popularTagsReducer(state, action);
}


/***/ }),

/***/ "1rjF":
/*!*************************************************************!*\
  !*** ./src/app/editArticle/services/editArticle.service.ts ***!
  \*************************************************************/
/*! exports provided: EditArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleService", function() { return EditArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class EditArticleService {
    constructor(http) {
        this.http = http;
    }
    updateArticle(slug, articleInput) {
        const fullUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/articles/${slug}`;
        return this.http.put(fullUrl, articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.article));
    }
}
EditArticleService.ɵfac = function EditArticleService_Factory(t) { return new (t || EditArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
EditArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditArticleService, factory: EditArticleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "2zcQ":
/*!*************************************************************!*\
  !*** ./src/app/auth/store/actions/getCurrentUser.action.ts ***!
  \*************************************************************/
/*! exports provided: getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUserAction", function() { return getCurrentUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUserSuccessAction", function() { return getCurrentUserSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUserFailureAction", function() { return getCurrentUserFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/store/actionTypes */ "EGNd");


const getCurrentUserAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_CURRENT_USER);
const getCurrentUserSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_CURRENT_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getCurrentUserFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_CURRENT_USER_FAILURE);


/***/ }),

/***/ "3+4A":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/feedToggler/feedToggler.module.ts ***!
  \******************************************************************/
/*! exports provided: FeedTogglerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedTogglerModule", function() { return FeedTogglerModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */ "FcJo");





class FeedTogglerModule {
}
FeedTogglerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeedTogglerModule });
FeedTogglerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function FeedTogglerModule_Factory(t) { return new (t || FeedTogglerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeedTogglerModule, { declarations: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__["FeedTogglerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__["FeedTogglerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FeedTogglerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
                declarations: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__["FeedTogglerComponent"]],
                exports: [src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__["FeedTogglerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "3MHH":
/*!********************************************************!*\
  !*** ./src/app/shared/modules/banner/banner.module.ts ***!
  \********************************************************/
/*! exports provided: BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/banner/components/banner/banner.component */ "yxoP");




class BannerModule {
}
BannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BannerModule });
BannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BannerModule_Factory(t) { return new (t || BannerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BannerModule, { declarations: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BannerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]],
                exports: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "3fUE":
/*!********************************************************************!*\
  !*** ./src/app/userProfile/store/effects/getUserProfile.effect.ts ***!
  \********************************************************************/
/*! exports provided: GetUserProfileEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfileEffect", function() { return GetUserProfileEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/userProfile/store/actions/getUserProfile.action */ "Bu8E");
/* harmony import */ var src_app_userProfile_services_userProfile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/userProfile/services/userProfile.service */ "OBCc");








class GetUserProfileEffect {
    constructor(actions$, userProfileService) {
        this.actions$ = actions$;
        this.userProfileService = userProfileService;
        this.getUserProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__["getUserProfileAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ slug }) => {
            return this.userProfileService.getUserProfile(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((userProfile) => {
                return Object(src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__["getUserProfileSuccessAction"])({ userProfile });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_4__["getUserProfileFailureAction"])());
            }));
        })));
    }
}
GetUserProfileEffect.ɵfac = function GetUserProfileEffect_Factory(t) { return new (t || GetUserProfileEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_userProfile_services_userProfile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"])); };
GetUserProfileEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetUserProfileEffect, factory: GetUserProfileEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetUserProfileEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_userProfile_services_userProfile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileService"] }]; }, null); })();


/***/ }),

/***/ "3nAO":
/*!*****************************************************************!*\
  !*** ./src/app/createArticle/services/createArticle.service.ts ***!
  \*****************************************************************/
/*! exports provided: CreateArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleService", function() { return CreateArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CreateArticleService {
    constructor(http) {
        this.http = http;
    }
    createArticle(articleInput) {
        const fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/articles";
        return this.http.post(fullUrl, articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.article));
    }
}
CreateArticleService.ɵfac = function CreateArticleService_Factory(t) { return new (t || CreateArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CreateArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateArticleService, factory: CreateArticleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4CtW":
/*!****************************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/services/popularTags.service.ts ***!
  \****************************************************************************/
/*! exports provided: PopularTagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularTagsService", function() { return PopularTagsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PopularTagsService {
    constructor(http) {
        this.http = http;
    }
    getPopularTags() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tags';
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return response.tags.filter(tag => !tag.includes("\u200C"));
        }));
    }
}
PopularTagsService.ɵfac = function PopularTagsService_Factory(t) { return new (t || PopularTagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PopularTagsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PopularTagsService, factory: PopularTagsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularTagsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4OAQ":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/modules/addToFavorites/store/effects/addToFavorite.effect.ts ***!
  \*************************************************************************************/
/*! exports provided: AddToFavoritesEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToFavoritesEffect", function() { return AddToFavoritesEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action */ "dVyE");
/* harmony import */ var src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/services/addToFavorites.service */ "6B3d");








class AddToFavoritesEffect {
    constructor(actions$, addToFavoritesService) {
        this.actions$ = actions$;
        this.addToFavoritesService = addToFavoritesService;
        this.addToFavorites$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__["addToFavoritesActions"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ isFavorited, slug }) => {
            const article$ = isFavorited ?
                this.addToFavoritesService.removeFromFavorites(slug) :
                this.addToFavoritesService.addToFavorites(slug);
            return article$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((article) => {
                return Object(src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__["addToFavoritesSuccessAction"])({ article });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_4__["addToFavoritesFailureAction"])());
            }));
        })));
    }
}
AddToFavoritesEffect.ɵfac = function AddToFavoritesEffect_Factory(t) { return new (t || AddToFavoritesEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesService"])); };
AddToFavoritesEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddToFavoritesEffect, factory: AddToFavoritesEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToFavoritesEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesService"] }]; }, null); })();


/***/ }),

/***/ "56OU":
/*!*************************************************!*\
  !*** ./src/app/globalFeed/globalFeed.module.ts ***!
  \*************************************************/
/*! exports provided: GlobalFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFeedModule", function() { return GlobalFeedModule; });
/* harmony import */ var _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/modules/feedToggler/feedToggler.module */ "3+4A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/globalFeed/components/globalFeed/globalFeed.component */ "t/Al");
/* harmony import */ var src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/banner/banner.module */ "3MHH");
/* harmony import */ var src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/feed/feed.module */ "yiK6");
/* harmony import */ var src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modules/popularTags/popularTags.module */ "YUxg");










const routes = [
    {
        path: "",
        component: src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_4__["GlobalFeedComponent"]
    }
];
class GlobalFeedModule {
}
GlobalFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GlobalFeedModule });
GlobalFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function GlobalFeedModule_Factory(t) { return new (t || GlobalFeedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_6__["FeedModule"],
            src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"],
            src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_7__["PopularTagsModule"],
            _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GlobalFeedModule, { declarations: [src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_4__["GlobalFeedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_6__["FeedModule"],
        src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"],
        src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_7__["PopularTagsModule"],
        _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GlobalFeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_6__["FeedModule"],
                    src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__["BannerModule"],
                    src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_7__["PopularTagsModule"],
                    _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]
                ],
                declarations: [src_app_globalFeed_components_globalFeed_globalFeed_component__WEBPACK_IMPORTED_MODULE_4__["GlobalFeedComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "5Bl2":
/*!****************************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/store/effects/getPopularTags.ts ***!
  \****************************************************************************/
/*! exports provided: GetPopularTagsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPopularTagsEffect", function() { return GetPopularTagsEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/popularTags/store/actions/getPopularTags.action */ "KaLh");
/* harmony import */ var src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/popularTags/services/popularTags.service */ "4CtW");








class GetPopularTagsEffect {
    constructor(actions$, popularTagsService) {
        this.actions$ = actions$;
        this.popularTagsService = popularTagsService;
        this.getPopularTags$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__["getPopularTagsAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.popularTagsService.getPopularTags().pipe(
            // filter((tag: any) => {
            //   console.log(tag);
            //   return !!tag
            // }),
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((popularTags) => {
                return Object(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__["getPopularTagsSuccessAction"])({ popularTags });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_4__["getPopularTagsFailureAction"])());
            }));
        })));
    }
}
GetPopularTagsEffect.ɵfac = function GetPopularTagsEffect_Factory(t) { return new (t || GetPopularTagsEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_5__["PopularTagsService"])); };
GetPopularTagsEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetPopularTagsEffect, factory: GetPopularTagsEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetPopularTagsEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_5__["PopularTagsService"] }]; }, null); })();


/***/ }),

/***/ "5h3v":
/*!***************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/store/selectors.ts ***!
  \***************************************************************/
/*! exports provided: popularTagsFeatureSelector, popularTagsSelector, isLoadingSelector, errorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popularTagsFeatureSelector", function() { return popularTagsFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popularTagsSelector", function() { return popularTagsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function() { return isLoadingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSelector", function() { return errorSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const popularTagsFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('popularTags');
const popularTagsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(popularTagsFeatureSelector, (popularTagState) => popularTagState.data);
const isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(popularTagsFeatureSelector, (popularTagState) => popularTagState.isLoading);
const errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(popularTagsFeatureSelector, (popularTagState) => popularTagState.error);


/***/ }),

/***/ "6B3d":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/modules/addToFavorites/services/addToFavorites.service.ts ***!
  \**********************************************************************************/
/*! exports provided: AddToFavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToFavoritesService", function() { return AddToFavoritesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AddToFavoritesService {
    constructor(http) {
        this.http = http;
    }
    addToFavorites(slug) {
        const url = this.getUrl(slug);
        return this.http.post(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getArticle));
    }
    removeFromFavorites(slug) {
        const url = this.getUrl(slug);
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getArticle));
    }
    getUrl(slug) {
        return `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/articles/${slug}/favorite`;
    }
    getArticle(response) {
        return response.article;
    }
    ;
}
AddToFavoritesService.ɵfac = function AddToFavoritesService_Factory(t) { return new (t || AddToFavoritesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AddToFavoritesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddToFavoritesService, factory: AddToFavoritesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToFavoritesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6Vdu":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/articleForm/articleForm.module.ts ***!
  \******************************************************************/
/*! exports provided: ArticleFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFormModule", function() { return ArticleFormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/articleForm/components/articleForm/articleForm.component */ "/BXF");
/* harmony import */ var src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/backendErrorMessages/backendErrorMessages.module */ "i4ku");






class ArticleFormModule {
}
ArticleFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ArticleFormModule });
ArticleFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ArticleFormModule_Factory(t) { return new (t || ArticleFormModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_4__["BackendErrorMessagesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ArticleFormModule, { declarations: [src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_3__["ArticleFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_4__["BackendErrorMessagesModule"]], exports: [src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_3__["ArticleFormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_4__["BackendErrorMessagesModule"]],
                declarations: [src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_3__["ArticleFormComponent"]],
                exports: [src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_3__["ArticleFormComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "7EpO":
/*!*********************************************************************!*\
  !*** ./src/app/createArticle/store/effects/createArticle.effect.ts ***!
  \*********************************************************************/
/*! exports provided: CreateArticleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleEffect", function() { return CreateArticleEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/createArticle/store/actions/createArticle.action */ "Js+y");
/* harmony import */ var src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/createArticle/services/createArticle.service */ "3nAO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");










class CreateArticleEffect {
    constructor(actions$, createArticleService, router) {
        this.actions$ = actions$;
        this.createArticleService = createArticleService;
        this.router = router;
        this.createArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ articleInput }) => {
            return this.createArticleService.createArticle(articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((article) => {
                return Object(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleSuccessAction"])({ article });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorResponse) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleFailureAction"])({ errors: errorResponse.error.errors }));
            }));
        })));
        this.redirectAfterCreate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["createArticleSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ article }) => {
            this.router.navigate(['/articles', article.slug]);
        })), { dispatch: false });
    }
}
CreateArticleEffect.ɵfac = function CreateArticleEffect_Factory(t) { return new (t || CreateArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__["CreateArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CreateArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CreateArticleEffect, factory: CreateArticleEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_5__["CreateArticleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/settings/components/settings/settings.component */ "8Gin");
/* harmony import */ var src_app_settings_store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/settings/store/reducers */ "vUo0");
/* harmony import */ var _shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/modules/backendErrorMessages/backendErrorMessages.module */ "i4ku");











const routes = [
    {
        path: "settings",
        component: src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]
    }
];
class SettingsModule {
}
SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("settings", src_app_settings_store_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_7__["BackendErrorMessagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_7__["BackendErrorMessagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("settings", src_app_settings_store_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_7__["BackendErrorMessagesModule"]
                ],
                declarations: [src_app_settings_components_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "8Gin":
/*!********************************************************************!*\
  !*** ./src/app/settings/components/settings/settings.component.ts ***!
  \********************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/store/actions/updateCurrentUser.action */ "Isqp");
/* harmony import */ var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/selectors */ "m7sG");
/* harmony import */ var src_app_auth_store_sync_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/store/sync.action */ "/XYW");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/selectors */ "OWQ+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages.component */ "+aif");












function SettingsComponent_div_0_mc_backend_error_messages_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r1.backendErrors$));
} }
function SettingsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsComponent_div_0_mc_backend_error_messages_6_Template, 2, 3, "mc-backend-error-messages", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_0_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fieldset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Update settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Or click here to logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r0.backendErrors$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.form.invalid || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 5, ctx_r0.isSubmitting$));
} }
class SettingsComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
    }
    ngOnInit() {
        this.initializeListeners();
        this.initializeValues();
    }
    ngOnDestroy() {
        this.currentUserSubscription.unsubscribe();
    }
    initializeValues() {
        this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_6__["isSubmittingSelector"]));
        this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_6__["validationErrorsSelector"]));
    }
    initializeListeners() {
        this.currentUserSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__["currentUserSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((currentUser) => currentUser !== null))
            .subscribe((currentUser) => {
            this.currentUser = currentUser;
            this.initializeForm();
        });
    }
    initializeForm() {
        this.form = this.fb.group({
            image: this.currentUser.image,
            username: this.currentUser.username,
            bio: this.currentUser.bio,
            email: this.currentUser.email,
            password: ""
        });
    }
    submit() {
        const currentUserInput = Object.assign(Object.assign({}, this.currentUser), this.form.value);
        this.store.dispatch(Object(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_3__["updateCurrentUserAction"])({ currentUserInput }));
    }
    logout() {
        this.store.dispatch(Object(src_app_auth_store_sync_action__WEBPACK_IMPORTED_MODULE_5__["logoutAction"])());
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["mc-settings"]], decls: 1, vars: 1, consts: [["class", "settings-page", 4, "ngIf"], [1, "settings-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "image", "placeholder", "URL of profile picture", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "username", "placeholder", "Username", 1, "form-control", "form-control-lg"], ["formControlName", "bio", "placeholder", "Short bio about you", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control", "form-control-lg"], ["type", "text", "formControlName", "password", "placeholder", "Password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [1, "btn", "btn-outline-danger", 3, "click"], [3, "backendErrors"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SettingsComponent_div_0_Template, 26, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_9__["BackendErrorMessagesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-settings",
                templateUrl: "./settings.component.html"
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "9CQT":
/*!********************************************************************************!*\
  !*** ./src/app/shared/modules/tagList/components/tagList/tagList.component.ts ***!
  \********************************************************************************/
/*! exports provided: TagListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListComponent", function() { return TagListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TagListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
} }
class TagListComponent {
}
TagListComponent.ɵfac = function TagListComponent_Factory(t) { return new (t || TagListComponent)(); };
TagListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagListComponent, selectors: [["mc-tag-list"]], inputs: { tagsProps: ["tags", "tagsProps"] }, decls: 2, vars: 1, consts: [[1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", "tag-outline"]], template: function TagListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagListComponent_li_1_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tagsProps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-tag-list",
                templateUrl: "./tagList.component.html",
            }]
    }], null, { tagsProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tags']
        }] }); })();


/***/ }),

/***/ "9TuU":
/*!***************************************************!*\
  !*** ./src/app/userProfile/userProfile.module.ts ***!
  \***************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/feed/feed.module */ "yiK6");
/* harmony import */ var src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/userProfile/components/userProfile/userProfile.component */ "LmIy");
/* harmony import */ var src_app_userProfile_services_userProfile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/userProfile/services/userProfile.service */ "OBCc");
/* harmony import */ var src_app_userProfile_store_effects_getUserProfile_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/userProfile/store/effects/getUserProfile.effect */ "3fUE");
/* harmony import */ var src_app_userProfile_store_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/userProfile/store/reducer */ "Ggk0");














const routes = [
    {
        path: "profiles/:slug",
        component: src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
    },
    {
        path: "profiles/:slug/favorites",
        component: src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]
    }
];
class UserProfileModule {
}
UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserProfileModule });
UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); }, providers: [src_app_userProfile_services_userProfile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_userProfile_store_effects_getUserProfile_effect__WEBPACK_IMPORTED_MODULE_8__["GetUserProfileEffect"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("userProfile", src_app_userProfile_store_reducer__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
            src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_userProfile_store_effects_getUserProfile_effect__WEBPACK_IMPORTED_MODULE_8__["GetUserProfileEffect"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("userProfile", src_app_userProfile_store_reducer__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                    src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"]
                ],
                declarations: [src_app_userProfile_components_userProfile_userProfile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"]],
                providers: [src_app_userProfile_services_userProfile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9Z4A":
/*!*************************************************************!*\
  !*** ./src/app/auth/store/effects/getCurrentUser.effect.ts ***!
  \*************************************************************/
/*! exports provided: GetCurrentUserEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCurrentUserEffect", function() { return GetCurrentUserEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/actions/getCurrentUser.action */ "2zcQ");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/persistence.service */ "q3xw");









class GetCurrentUserEffect {
    constructor(actions$, authService, persistanceService) {
        this.actions$ = actions$;
        this.authService = authService;
        this.persistanceService = persistanceService;
        this.getCurrentUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            const token = this.persistanceService.get('accessToken');
            if (!token) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserFailureAction"])());
            }
            return this.authService.getCurrentUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((currentUser) => {
                return Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserSuccessAction"])({ currentUser });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["getCurrentUserFailureAction"])());
            }));
        })));
    }
}
GetCurrentUserEffect.ɵfac = function GetCurrentUserEffect_Factory(t) { return new (t || GetCurrentUserEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"])); };
GetCurrentUserEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetCurrentUserEffect, factory: GetCurrentUserEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetCurrentUserEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"] }]; }, null); })();


/***/ }),

/***/ "AcQo":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddToFavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToFavoritesComponent", function() { return AddToFavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action */ "dVyE");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a2, a3) { return { "btn": true, "btn-sm": true, "btn-primary": a2, "btn-outline-primary": a3 }; };
class AddToFavoritesComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.favoritesCount = this.favoritesCountProps;
        this.isFavorited = this.isFavoritedProps;
    }
    handleLike() {
        this.store.dispatch(Object(src_app_shared_modules_addToFavorites_store_actions_addToFavorites_action__WEBPACK_IMPORTED_MODULE_1__["addToFavoritesActions"])({ isFavorited: this.isFavorited, slug: this.articleSlugProps }));
        if (this.isFavorited) {
            this.favoritesCount = this.favoritesCount - 1;
        }
        else {
            this.favoritesCount = this.favoritesCount + 1;
        }
        this.isFavorited = !this.isFavorited;
    }
}
AddToFavoritesComponent.ɵfac = function AddToFavoritesComponent_Factory(t) { return new (t || AddToFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AddToFavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddToFavoritesComponent, selectors: [["mc-add-to-favorites"]], inputs: { isFavoritedProps: ["isFavorited", "isFavoritedProps"], favoritesCountProps: ["favoritesCount", "favoritesCountProps"], articleSlugProps: ["articleSlug", "articleSlugProps"] }, decls: 4, vars: 5, consts: [[3, "ngClass", "click"], [1, "ion-heart"]], template: function AddToFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddToFavoritesComponent_Template_button_click_0_listener() { return ctx.handleLike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.isFavorited, !ctx.isFavorited));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0 ", ctx.favoritesCount, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddToFavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-add-to-favorites",
                templateUrl: "./addToFavorites.component.html"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { isFavoritedProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["isFavorited"]
        }], favoritesCountProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["favoritesCount"]
        }], articleSlugProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["articleSlug"]
        }] }); })();


/***/ }),

/***/ "AnrA":
/*!**************************************************************!*\
  !*** ./src/app/shared/modules/feed/services/feed.service.ts ***!
  \**************************************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FeedService {
    constructor(http) {
        this.http = http;
    }
    getFeed(url) {
        const fullUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + url;
        return this.http.get(fullUrl);
    }
}
FeedService.ɵfac = function FeedService_Factory(t) { return new (t || FeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedService, factory: FeedService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: true,
    apiUrl: "https://conduit.productionready.io/api",
    limit: 10,
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

/***/ "Bu8E":
/*!********************************************************************!*\
  !*** ./src/app/userProfile/store/actions/getUserProfile.action.ts ***!
  \********************************************************************/
/*! exports provided: getUserProfileAction, getUserProfileSuccessAction, getUserProfileFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfileAction", function() { return getUserProfileAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfileSuccessAction", function() { return getUserProfileSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProfileFailureAction", function() { return getUserProfileFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_userProfile_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/userProfile/store/actionTypes */ "ok1D");


const getUserProfileAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_userProfile_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_USER_PROFILE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserProfileSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_userProfile_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_USER_PROFILE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserProfileFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_userProfile_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_USER_PROFILE_FAILURE);


/***/ }),

/***/ "DjVl":
/*!********************************************!*\
  !*** ./src/app/article/store/selectors.ts ***!
  \********************************************/
/*! exports provided: articleFeatureSelector, isLoadingSelector, errorSelector, articleSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleFeatureSelector", function() { return articleFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function() { return isLoadingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSelector", function() { return errorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleSelector", function() { return articleSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const articleFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('article');
const isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(articleFeatureSelector, (articleState) => articleState.isLoading);
const errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(articleFeatureSelector, (articleState) => articleState.error);
const articleSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(articleFeatureSelector, (articleState) => articleState.data);


/***/ }),

/***/ "EBBL":
/*!****************************************************************!*\
  !*** ./src/app/shared/modules/pagination/pagination.module.ts ***!
  \****************************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/pagination/components/pagination/pagination.component */ "Jhn3");
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/utils.service */ "kh7C");






class PaginationModule {
}
PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, providers: [src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                declarations: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
                exports: [src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
                providers: [src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "EGNd":
/*!*******************************************!*\
  !*** ./src/app/auth/store/actionTypes.ts ***!
  \*******************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["REGISTER"] = "[Auth] Register";
    ActionTypes["REGISTER_SUCCESS"] = "[Auth] Register success";
    ActionTypes["REGISTER_FAILURE"] = "[Auth] Register failure";
    ActionTypes["LOGIN"] = "[Auth] Login";
    ActionTypes["LOGIN_SUCCESS"] = "[Auth] Login success";
    ActionTypes["LOGIN_FAILURE"] = "[Auth] Login failure";
    ActionTypes["GET_CURRENT_USER"] = "[Auth] Get current user";
    ActionTypes["GET_CURRENT_USER_SUCCESS"] = "[Auth] Get current user success";
    ActionTypes["GET_CURRENT_USER_FAILURE"] = "[Auth] Get current user failure";
    ActionTypes["UPDATE_CURRENT_USER"] = "[Auth] Update current user";
    ActionTypes["UPDATE_CURRENT_USER_SUCCESS"] = "[Auth] Update current user success";
    ActionTypes["UPDATE_CURRENT_USER_FAILURE"] = "[Auth] Update current user failure";
    ActionTypes["LOGOUT"] = "[Auth] Logout";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "FAMj":
/*!************************************************************************!*\
  !*** ./src/app/shared/modules/addToFavorites/addToFavorites.module.ts ***!
  \************************************************************************/
/*! exports provided: AddToFavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToFavoritesModule", function() { return AddToFavoritesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component */ "AcQo");
/* harmony import */ var src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/services/addToFavorites.service */ "6B3d");
/* harmony import */ var src_app_shared_modules_addToFavorites_store_effects_addToFavorite_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/store/effects/addToFavorite.effect */ "4OAQ");








class AddToFavoritesModule {
}
AddToFavoritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddToFavoritesModule });
AddToFavoritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AddToFavoritesModule_Factory(t) { return new (t || AddToFavoritesModule)(); }, providers: [src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_4__["AddToFavoritesService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([src_app_shared_modules_addToFavorites_store_effects_addToFavorite_effect__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesEffect"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddToFavoritesModule, { declarations: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_3__["AddToFavoritesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"]], exports: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_3__["AddToFavoritesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddToFavoritesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([src_app_shared_modules_addToFavorites_store_effects_addToFavorite_effect__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesEffect"]])],
                declarations: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_3__["AddToFavoritesComponent"]],
                exports: [src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_3__["AddToFavoritesComponent"]],
                providers: [src_app_shared_modules_addToFavorites_services_addToFavorites_service__WEBPACK_IMPORTED_MODULE_4__["AddToFavoritesService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FcJo":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FeedTogglerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedTogglerComponent", function() { return FeedTogglerComponent; });
/* harmony import */ var _auth_store_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../auth/store/selectors */ "m7sG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function () { return ["/feed"]; };
function FeedTogglerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Your feed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a1) { return ["/tags", a1]; };
function FeedTogglerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r1.tagNameProps));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.tagNameProps, " ");
} }
const _c2 = function () { return ["/"]; };
const _c3 = function () { return { exact: true }; };
class FeedTogglerComponent {
    constructor(store) {
        this.store = store;
    }
    initializeValue() {
        this.isLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_store_selectors__WEBPACK_IMPORTED_MODULE_0__["isLoggedInSelector"]));
    }
    ngOnInit() {
        this.initializeValue();
    }
}
FeedTogglerComponent.ɵfac = function FeedTogglerComponent_Factory(t) { return new (t || FeedTogglerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
FeedTogglerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FeedTogglerComponent, selectors: [["mc-feed-toggler"]], inputs: { tagNameProps: ["tagName", "tagNameProps"] }, decls: 8, vars: 8, consts: [[1, "feed-toggle"], [1, "nav", "nav-pills", "outline-active"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "ion-pound"]], template: function FeedTogglerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FeedTogglerComponent_li_2_Template, 3, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Global feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FeedTogglerComponent_li_7_Template, 4, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tagNameProps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FeedTogglerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "mc-feed-toggler",
                templateUrl: "./feedToggler.component.html"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, { tagNameProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ["tagName"]
        }] }); })();


/***/ }),

/***/ "FgEI":
/*!***********************************************!*\
  !*** ./src/app/editArticle/store/reducers.ts ***!
  \***********************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/article/store/actions/getArticle.action */ "JP5K");
/* harmony import */ var src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/editArticle/store/actions/createArticle.action */ "Q0Tb");



const intialState = {
    isLoading: false,
    article: null,
    isSubmitting: false,
    validationErrors: null
};
const editArticleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(intialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_2__["updateArticleAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_2__["updateArticleSuccessAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_2__["updateArticleFailureAction"], (state, action) => (Object.assign(Object.assign({}, state), { isSubmitting: false, validationErrors: action.errors }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_1__["getArticleAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_1__["getArticleSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isLoading: false, article: action.article }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_1__["getArticleFailureAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: false }))));
const reducers = (state, action) => {
    return editArticleReducer(state, action);
};


/***/ }),

/***/ "Ggk0":
/*!**********************************************!*\
  !*** ./src/app/userProfile/store/reducer.ts ***!
  \**********************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/userProfile/store/actions/getUserProfile.action */ "Bu8E");


const initialState = {
    isLoading: false,
    error: null,
    data: null
};
const userProfileReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__["getUserProfileAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__["getUserProfileSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isLoading: false, data: action.userProfile }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_1__["getUserProfileFailureAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: false }))));
function reducers(state, action) {
    return userProfileReducer(state, action);
}


/***/ }),

/***/ "Iole":
/*!*****************************************************************************!*\
  !*** ./src/app/editArticle/components/editArticle/editArticle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleComponent", function() { return EditArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/article/store/actions/getArticle.action */ "JP5K");
/* harmony import */ var src_app_createArticle_store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/createArticle/store/selectors */ "0UP4");
/* harmony import */ var src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/editArticle/store/actions/createArticle.action */ "Q0Tb");
/* harmony import */ var src_app_editArticle_store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/editArticle/store/selectors */ "crZO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/loading/components/loading/loading.component */ "adgX");
/* harmony import */ var src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/articleForm/components/articleForm/articleForm.component */ "/BXF");













function EditArticleComponent_mc_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
} }
function EditArticleComponent_mc_article_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-article-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("articleSubmit", function EditArticleComponent_mc_article_form_3_Template_mc_article_form_articleSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r1.initialValues$))("isSubmitting", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r1.isSubmitting$))("errors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r1.backendErrors$));
} }
class EditArticleComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        this.initializeValues();
        this.fetchData();
    }
    initializeValues() {
        this.slug = this.route.snapshot.paramMap.get("slug");
        this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_createArticle_store_selectors__WEBPACK_IMPORTED_MODULE_4__["isSubmittingSelector"]));
        this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_createArticle_store_selectors__WEBPACK_IMPORTED_MODULE_4__["validationErrorsSelector"]));
        this.initialValues$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_editArticle_store_selectors__WEBPACK_IMPORTED_MODULE_6__["articleSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((article) => article !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((article) => {
            return {
                title: article.title,
                description: article.description,
                body: article.body,
                tagList: article.tagList
            };
        }));
    }
    fetchData() {
        this.store.dispatch(Object(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_3__["getArticleAction"])({ slug: this.slug }));
    }
    onSubmit(articleInput) {
        this.store.dispatch(Object(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_5__["updateArticleAction"])({ articleInput, slug: this.slug }));
    }
}
EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) { return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
EditArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditArticleComponent, selectors: [["mc-edit-article"]], decls: 5, vars: 6, consts: [[4, "ngIf"], [3, "initialValues", "isSubmitting", "errors", "articleSubmit", 4, "ngIf"], [3, "initialValues", "isSubmitting", "errors", "articleSubmit"]], template: function EditArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Create Article\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditArticleComponent_mc_loading_1_Template, 1, 0, "mc-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditArticleComponent_mc_article_form_3_Template, 4, 9, "mc-article-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.initialValues$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_10__["ArticleFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-edit-article",
                templateUrl: "./editArticle.component.html"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Isqp":
/*!****************************************************************!*\
  !*** ./src/app/auth/store/actions/updateCurrentUser.action.ts ***!
  \****************************************************************/
/*! exports provided: updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserAction", function() { return updateCurrentUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserSuccessAction", function() { return updateCurrentUserSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCurrentUserFailureAction", function() { return updateCurrentUserFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/store/actionTypes */ "EGNd");


const updateCurrentUserAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_CURRENT_USER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCurrentUserSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_CURRENT_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateCurrentUserFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_CURRENT_USER_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "JP5K":
/*!************************************************************!*\
  !*** ./src/app/article/store/actions/getArticle.action.ts ***!
  \************************************************************/
/*! exports provided: getArticleAction, getArticleSuccessAction, getArticleFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleAction", function() { return getArticleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleSuccessAction", function() { return getArticleSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleFailureAction", function() { return getArticleFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "g8ju");


const getArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_ARTICLE_FAILURE);


/***/ }),

/***/ "Jhn3":
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/modules/pagination/components/pagination/pagination.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/utils.service */ "kh7C");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a0) { return { active: a0 }; };
const _c1 = function (a0) { return { page: a0 }; };
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.currentPageProps === page_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.urlProps)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, page_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r1, " ");
} }
class PaginationComponent {
    constructor(utilsService) {
        this.utilsService = utilsService;
    }
    ngOnInit() {
        this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
        this.pages = this.utilsService.range(1, this.pagesCount);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["mc-pagination"]], inputs: { totalProps: ["total", "totalProps"], limitProps: ["limit", "limitProps"], currentPageProps: ["currentPage", "currentPageProps"], urlProps: ["url", "urlProps"] }, decls: 2, vars: 1, consts: [[1, "pagination"], ["class", "page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass"], [1, "page-link", 3, "routerLink", "queryParams"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-pagination",
                templateUrl: "./pagination.component.html",
                styleUrls: ["./pagination.component.scss"]
            }]
    }], function () { return [{ type: src_app_shared_services_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }]; }, { totalProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["total"]
        }], limitProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["limit"]
        }], currentPageProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["currentPage"]
        }], urlProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["url"]
        }] }); })();


/***/ }),

/***/ "Js+y":
/*!*********************************************************************!*\
  !*** ./src/app/createArticle/store/actions/createArticle.action.ts ***!
  \*********************************************************************/
/*! exports provided: createArticleAction, createArticleSuccessAction, createArticleFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticleAction", function() { return createArticleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticleSuccessAction", function() { return createArticleSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticleFailureAction", function() { return createArticleFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_createArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/createArticle/store/actionTypes */ "Ql90");


const createArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_createArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CREATE_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_createArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CREATE_ARTICLE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_createArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CREATE_ARTICLE_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "KaLh":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/store/actions/getPopularTags.action.ts ***!
  \***********************************************************************************/
/*! exports provided: getPopularTagsAction, getPopularTagsSuccessAction, getPopularTagsFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularTagsAction", function() { return getPopularTagsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularTagsSuccessAction", function() { return getPopularTagsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularTagsFailureAction", function() { return getPopularTagsFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/popularTags/store/actionTypes */ "t2Z8");


const getPopularTagsAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_POPULAR_TASGS);
const getPopularTagsSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_POPULAR_TASGS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPopularTagsFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_popularTags_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_POPULAR_TASGS_FAILURE);


/***/ }),

/***/ "LiC5":
/*!****************************************!*\
  !*** ./src/app/auth/store/reducers.ts ***!
  \****************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/store/actions/getCurrentUser.action */ "2zcQ");
/* harmony import */ var src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/store/actions/login.action */ "wM+c");
/* harmony import */ var src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/store/actions/register.action */ "zALH");
/* harmony import */ var src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/actions/updateCurrentUser.action */ "Isqp");
/* harmony import */ var _sync_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sync.action */ "/XYW");






const initialState = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
};
const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: true, validationErrors: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isSubmitting: false, isLoggedIn: true, currentUser: action.currentUser }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerFailureAction"], (state, action) => (Object.assign(Object.assign({}, state), { isSubmitting: false, validationErrors: action.errors }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__["loginAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: true, validationErrors: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__["loginSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isSubmitting: false, currentUser: action.currentUser, isLoggedIn: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__["loginFailureAction"], (state, action) => (Object.assign(Object.assign({}, state), { isSubmitting: false, validationErrors: action.errors }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isLoading: false, isLoggedIn: true, currentUser: action.currentUser }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserFailureAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: false, isLoggedIn: false, currentUser: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { currentUser: action.currentUser }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_sync_action__WEBPACK_IMPORTED_MODULE_5__["logoutAction"], () => (Object.assign(Object.assign({}, initialState), { isLoggedIn: false }))));
function reducers(state, action) {
    return authReducer(state, action);
}


/***/ }),

/***/ "LmIy":
/*!*****************************************************************************!*\
  !*** ./src/app/userProfile/components/userProfile/userProfile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/selectors */ "m7sG");
/* harmony import */ var src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/userProfile/store/actions/getUserProfile.action */ "Bu8E");
/* harmony import */ var src_app_userProfile_store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/userProfile/store/selectors */ "aMDZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/feed/components/feed/feed.component */ "rJr/");












const _c0 = function () { return ["/settings"]; };
function UserProfileComponent_div_0_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit profile Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a1) { return ["/profiles", a1]; };
const _c2 = function () { return { exact: true }; };
const _c3 = function (a1) { return ["/profiles", a1, "favorites"]; };
function UserProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " FOLLOW USER BUTTON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserProfileComponent_div_0_a_12_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " My Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Favorites Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mc-feed", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.userProfile.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userProfile.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userProfile.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, ctx_r0.isCurrentUserProfile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r0.userProfile.username))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, ctx_r0.userProfile.username))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx_r0.getApiUrl());
} }
class UserProfileComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.initializeValues();
        this.initializeListeners();
    }
    ngOnDestroy() {
        this.userProfileSubscription.unsubscribe();
    }
    initializeListeners() {
        this.userProfileSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_userProfile_store_selectors__WEBPACK_IMPORTED_MODULE_6__["userProfileSelector"])).subscribe((userProfile) => {
            this.userProfile = userProfile;
        });
        this.route.params.subscribe((params) => {
            this.slug = params.slug;
            this.fetchUserProfile();
            console.log(params);
        });
    }
    initializeValues() {
        const isFavorites = this.router.url.includes("favorites");
        this.slug = this.route.snapshot.paramMap.get("slug");
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_userProfile_store_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoadingSelector"]));
        this.apiUrl = isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
        this.isCurrentUserProfile$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__["currentUserSelector"])),
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_userProfile_store_selectors__WEBPACK_IMPORTED_MODULE_6__["userProfileSelector"]))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([currentUser, userProfile]) => {
            return (currentUser === null || currentUser === void 0 ? void 0 : currentUser.username) === (userProfile === null || userProfile === void 0 ? void 0 : userProfile.username);
        }));
    }
    fetchUserProfile() {
        this.store.dispatch(Object(src_app_userProfile_store_actions_getUserProfile_action__WEBPACK_IMPORTED_MODULE_5__["getUserProfileAction"])({ slug: this.slug }));
    }
    getApiUrl() {
        const isFavorites = this.router.url.includes("favorites");
        return this.apiUrl = isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["mc-user-profile"]], decls: 1, vars: 1, consts: [["class", "profile-page", 4, "ngIf"], [1, "profile-page"], [1, "user-info"], [1, "container"], [1, "row"], [1, "col-cs-12", "col-md-10", "offset-md-1"], ["src", "user-image", 3, "src"], ["class", "btn btn-sm btn-outline-secondary action-btn", 3, "routerLink", 4, "ngIf"], [1, "col-xs-12", "col-md-10", "offset-md-1"], [1, "articles-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [3, "apiUrl"], [1, "btn", "btn-sm", "btn-outline-secondary", "action-btn", 3, "routerLink"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserProfileComponent_div_0_Template, 26, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-user-profile",
                templateUrl: "./userProfile.component.html"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AuthService {
    constructor(http) {
        this.http = http;
    }
    getUser(response) {
        return response.user;
    }
    register(data) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users";
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
    }
    login(data) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/login";
        return this.http.post(url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
    }
    getCurrentUser() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/user";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
    }
    updateCurrentUser(currentUserInput) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/user";
        return this.http.put(url, currentUserInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.getUser));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NABr":
/*!***************************************************************!*\
  !*** ./src/app/article/store/actions/deleteArticle.action.ts ***!
  \***************************************************************/
/*! exports provided: deleteArticleAction, deleteArticleSuccessAction, deleteArticleFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleAction", function() { return deleteArticleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleSuccessAction", function() { return deleteArticleSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteArticleFailureAction", function() { return deleteArticleFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionTypes */ "g8ju");


const deleteArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE_ARTICLE_SUCCESS);
const deleteArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].DELETE_ARTICLE_FAILURE);


/***/ }),

/***/ "OBCc":
/*!*************************************************************!*\
  !*** ./src/app/userProfile/services/userProfile.service.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UserProfileService {
    constructor(http) {
        this.http = http;
    }
    getUserProfile(slug) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/profiles/${slug}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.profile));
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return new (t || UserProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OCph":
/*!***********************************************************************************!*\
  !*** ./src/app/createArticle/components/createArticle/createArticle.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CreateArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleComponent", function() { return CreateArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/createArticle/store/actions/createArticle.action */ "Js+y");
/* harmony import */ var src_app_createArticle_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/createArticle/store/selectors */ "0UP4");
/* harmony import */ var src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/articleForm/components/articleForm/articleForm.component */ "/BXF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








class CreateArticleComponent {
    constructor(store) {
        this.store = store;
        this.initialValues = {
            title: "",
            description: "",
            body: "",
            tagList: []
        };
    }
    ngOnInit() {
        this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_createArticle_store_selectors__WEBPACK_IMPORTED_MODULE_3__["isSubmittingSelector"]));
        this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_createArticle_store_selectors__WEBPACK_IMPORTED_MODULE_3__["validationErrorsSelector"]));
    }
    onSubmit(articleInput) {
        this.store.dispatch(Object(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_2__["createArticleAction"])({ articleInput }));
    }
}
CreateArticleComponent.ɵfac = function CreateArticleComponent_Factory(t) { return new (t || CreateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
CreateArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateArticleComponent, selectors: [["mc-create-article"]], decls: 3, vars: 7, consts: [[3, "initialValues", "isSubmitting", "errors", "articleSubmit"]], template: function CreateArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-article-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("articleSubmit", function CreateArticleComponent_Template_mc_article_form_articleSubmit_0_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValues", ctx.initialValues)("isSubmitting", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.isSubmitting$))("errors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx.backendErrors$));
    } }, directives: [src_app_shared_modules_articleForm_components_articleForm_articleForm_component__WEBPACK_IMPORTED_MODULE_4__["ArticleFormComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-create-article",
                templateUrl: "./createArticle.component.html"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "OWQ+":
/*!*********************************************!*\
  !*** ./src/app/settings/store/selectors.ts ***!
  \*********************************************/
/*! exports provided: settingsFeatureSelector, isSubmittingSelector, validationErrorsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsFeatureSelector", function() { return settingsFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function() { return isSubmittingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function() { return validationErrorsSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const settingsFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('settings');
const isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(settingsFeatureSelector, (settingsState) => settingsState.isSubmitting);
const validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(settingsFeatureSelector, (settingsState) => settingsState.validationErrors);


/***/ }),

/***/ "OeC1":
/*!*****************************************************!*\
  !*** ./src/app/article/services/article.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ArticleService {
    constructor(http) {
        this.http = http;
    }
    deleteArticle(slug) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/articles/${slug}`;
        return this.http.delete(url);
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OuDC":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/store/actions/login.action */ "wM+c");
/* harmony import */ var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/store/selectors */ "m7sG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages.component */ "+aif");











function LoginComponent_mc_backend_error_messages_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.backendErrors$));
} }
const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(fb, store, authService) {
        this.fb = fb;
        this.store = store;
        this.authService = authService;
    }
    ngOnInit() {
        this.initializeForm();
        this.initializeValues();
    }
    initializeValues() {
        this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_3__["isSubmittingSelector"]));
        this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_3__["validationErrorsSelector"]));
    }
    initializeForm() {
        this.form = this.fb.group({
            email: '',
            password: ''
        });
    }
    onSubmit() {
        const request = {
            user: this.form.value
        };
        this.store.dispatch(Object(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_2__["loginAction"])({ request }));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["mc-login"]], decls: 20, vars: 9, consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "backendErrors"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sigh Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Need an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mc_backend_error_messages_9_Template, 2, 3, "mc-backend-error-messages", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.backendErrors$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 6, ctx.isSubmitting$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_8__["BackendErrorMessagesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.scss"]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "PBbO":
/*!*******************************************************!*\
  !*** ./src/app/createArticle/createArticle.module.ts ***!
  \*******************************************************/
/*! exports provided: CreateArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArticleModule", function() { return CreateArticleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/createArticle/components/createArticle/createArticle.component */ "OCph");
/* harmony import */ var src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/createArticle/services/createArticle.service */ "3nAO");
/* harmony import */ var src_app_createArticle_store_effects_createArticle_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/createArticle/store/effects/createArticle.effect */ "7EpO");
/* harmony import */ var src_app_createArticle_store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/createArticle/store/reducers */ "ydLu");
/* harmony import */ var src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/articleForm/articleForm.module */ "6Vdu");














const routes = [
    {
        path: "articles/new",
        component: src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_5__["CreateArticleComponent"]
    }
];
class CreateArticleModule {
}
CreateArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CreateArticleModule });
CreateArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CreateArticleModule_Factory(t) { return new (t || CreateArticleModule)(); }, providers: [src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_6__["CreateArticleService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__["ArticleFormModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_createArticle_store_effects_createArticle_effect__WEBPACK_IMPORTED_MODULE_7__["CreateArticleEffect"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("createArticle", src_app_createArticle_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CreateArticleModule, { declarations: [src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_5__["CreateArticleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__["ArticleFormModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_createArticle_store_effects_createArticle_effect__WEBPACK_IMPORTED_MODULE_7__["CreateArticleEffect"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("createArticle", src_app_createArticle_store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"])
                ],
                declarations: [src_app_createArticle_components_createArticle_createArticle_component__WEBPACK_IMPORTED_MODULE_5__["CreateArticleComponent"]],
                providers: [src_app_createArticle_services_createArticle_service__WEBPACK_IMPORTED_MODULE_6__["CreateArticleService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PW9N":
/*!***************************************************************!*\
  !*** ./src/app/article/store/effects/deleteArticle.effect.ts ***!
  \***************************************************************/
/*! exports provided: DeleteArticleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteArticleEffect", function() { return DeleteArticleEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/article/store/actions/deleteArticle.action */ "NABr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/article/services/article.service */ "OeC1");









class DeleteArticleEffect {
    constructor(router, actions$, articleService) {
        this.router = router;
        this.actions$ = actions$;
        this.articleService = articleService;
        this.deleteArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ slug }) => {
            return this.articleService.deleteArticle(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
                return Object(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleSuccessAction"])();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleFailureAction"])());
            }));
        })));
        this.redirectAfterDelete$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.router.navigate(["/"]);
        })), { dispatch: false });
    }
}
DeleteArticleEffect.ɵfac = function DeleteArticleEffect_Factory(t) { return new (t || DeleteArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"])); };
DeleteArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeleteArticleEffect, factory: DeleteArticleEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "PZ/r":
/*!*****************************************************************!*\
  !*** ./src/app/tagFeed/components/tagFeed/tagFeed.component.ts ***!
  \*****************************************************************/
/*! exports provided: TagFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFeedComponent", function() { return TagFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/banner/components/banner/banner.component */ "yxoP");
/* harmony import */ var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */ "FcJo");
/* harmony import */ var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/feed/components/feed/feed.component */ "rJr/");
/* harmony import */ var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */ "zbx3");







class TagFeedComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.tagName = params.slug;
            this.apiUrl = `/articles?tag=${this.tagName}`;
        });
    }
}
TagFeedComponent.ɵfac = function TagFeedComponent_Factory(t) { return new (t || TagFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TagFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagFeedComponent, selectors: [["mc-tag-feed"]], decls: 9, vars: 2, consts: [[1, "home-page"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [3, "tagName"], [3, "apiUrl"], [1, "col-md-3"]], template: function TagFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-feed-toggler", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mc-feed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mc-popular-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tagName", ctx.tagName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx.apiUrl);
    } }, directives: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_3__["FeedTogglerComponent"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"], src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_5__["PopularTagsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWdGZWVkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-tag-feed",
                templateUrl: "./tagFeed.component.html",
                styleUrls: ["./tagFeed.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Q0Tb":
/*!*******************************************************************!*\
  !*** ./src/app/editArticle/store/actions/createArticle.action.ts ***!
  \*******************************************************************/
/*! exports provided: updateArticleAction, updateArticleSuccessAction, updateArticleFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticleAction", function() { return updateArticleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticleSuccessAction", function() { return updateArticleSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticleFailureAction", function() { return updateArticleFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_editArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/editArticle/store/actionTypes */ "QuEO");


const updateArticleAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_editArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_ARTICLE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateArticleSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_editArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_ARTICLE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateArticleFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_editArticle_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].UPDATE_ARTICLE_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "QdpK":
/*!****************************************************************!*\
  !*** ./src/app/editArticle/store/effects/getArticle.effect.ts ***!
  \****************************************************************/
/*! exports provided: UpdateArticleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateArticleEffect", function() { return UpdateArticleEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/editArticle/store/actions/createArticle.action */ "Q0Tb");
/* harmony import */ var src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/editArticle/services/editArticle.service */ "1rjF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");










class UpdateArticleEffect {
    constructor(actions$, editArticleService, router) {
        this.actions$ = actions$;
        this.editArticleService = editArticleService;
        this.router = router;
        this.updateArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ articleInput, slug }) => {
            return this.editArticleService.updateArticle(slug, articleInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((article) => {
                return Object(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleSuccessAction"])({ article });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorResponse) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleFailureAction"])({ errors: errorResponse.error.errors }));
            }));
        })));
        this.redirectAfterUpdate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_editArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_4__["updateArticleSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ article }) => {
            this.router.navigate(['/articles', article.slug]);
        })), { dispatch: false });
    }
}
UpdateArticleEffect.ɵfac = function UpdateArticleEffect_Factory(t) { return new (t || UpdateArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_5__["EditArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
UpdateArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UpdateArticleEffect, factory: UpdateArticleEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_5__["EditArticleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "Ql90":
/*!****************************************************!*\
  !*** ./src/app/createArticle/store/actionTypes.ts ***!
  \****************************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["CREATE_ARTICLE"] = "[Create Article] Create Article";
    ActionTypes["CREATE_ARTICLE_SUCCESS"] = "[Create Article] Create Article success";
    ActionTypes["CREATE_ARTICLE_FAILURE"] = "[Create Article] Create Article failure";
    ActionTypes["UPADATE_ARTICLE"] = "UPADATE_ARTICLE";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "QnWJ":
/*!*****************************************************************!*\
  !*** ./src/app/article/components/article/article.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/article/store/actions/deleteArticle.action */ "NABr");
/* harmony import */ var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/article/store/actions/getArticle.action */ "JP5K");
/* harmony import */ var src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/article/store/selectors */ "DjVl");
/* harmony import */ var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/store/selectors */ "m7sG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/loading/components/loading/loading.component */ "adgX");
/* harmony import */ var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */ "aOen");
/* harmony import */ var src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/tagList/components/tagList/tagList.component */ "9CQT");















const _c0 = function (a1) { return ["/articles", a1, "edit"]; };
function ArticleComponent_div_2_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleComponent_div_2_span_11_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteArticle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete Article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r4.article.slug));
} }
const _c1 = function (a1) { return ["/profiles", a1]; };
function ArticleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ArticleComponent_div_2_span_11_Template, 6, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.article.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r0.article.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.article.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r0.article.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.author.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.article.createdAt, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx_r0.isAuthor$));
} }
function ArticleComponent_mc_loading_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
} }
function ArticleComponent_mc_error_message_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-error-message");
} }
function ArticleComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-tag-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.article.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", ctx_r3.article.tagList);
} }
class ArticleComponent {
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        this.initializeValues();
        this.initializeListeners();
        this.fetchData();
    }
    ngOnDestroy() {
        this.articleSubscription.unsubscribe();
    }
    initializeValues() {
        this.slug = this.route.snapshot.paramMap.get("slug");
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoadingSelector"]));
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_6__["errorSelector"]));
        this.isAuthor$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_6__["articleSelector"])), this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_7__["currentUserSelector"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([article, currentUser]) => {
            if (!article || !currentUser) {
                return false;
            }
            return currentUser.username === article.author.username;
        }));
    }
    initializeListeners() {
        this.articleSubscription = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_article_store_selectors__WEBPACK_IMPORTED_MODULE_6__["articleSelector"])).subscribe((article) => {
            this.article = article;
        });
    }
    fetchData() {
        this.store.dispatch(Object(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_5__["getArticleAction"])({ slug: this.slug }));
    }
    deleteArticle() {
        this.store.dispatch(Object(src_app_article_store_actions_deleteArticle_action__WEBPACK_IMPORTED_MODULE_4__["deleteArticleAction"])({ slug: this.slug }));
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["mc-article"]], decls: 9, vars: 8, consts: [[1, "article-page"], [1, "banner"], ["class", "container", 4, "ngIf"], [1, "container", "page"], [4, "ngIf"], ["class", "row article-content", 4, "ngIf"], [1, "container"], [1, "article-meta"], [3, "routerLink"], [3, "src"], [1, "info"], [1, "data"], [1, "btn", "btn-outline-secondary", "btn-sm", 3, "routerLink"], [1, "ion-edit"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "row", "article-content"], [1, "col-xs-12"], [3, "tags"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleComponent_div_2_Template, 13, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleComponent_mc_loading_4_Template, 1, 0, "mc-loading", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleComponent_mc_error_message_6_Template, 1, 0, "mc-error-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ArticleComponent_div_8_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_11__["ErrorMessageComponent"], src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__["TagListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-article",
                templateUrl: "./article.component.html",
                styleUrls: ["./article.component.scss"]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "QuEO":
/*!**************************************************!*\
  !*** ./src/app/editArticle/store/actionTypes.ts ***!
  \**************************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["UPDATE_ARTICLE"] = "[Edit Article] Update Article";
    ActionTypes["UPDATE_ARTICLE_SUCCESS"] = "[Edit Article] Update Article success";
    ActionTypes["UPDATE_ARTICLE_FAILURE"] = "[Edit Article] Update Article failure";
    ActionTypes["GET_ARTICLE"] = "[Edit Article] Get Article";
    ActionTypes["GET_ARTICLE_SUCCESS"] = "[Edit Article] Get Article success";
    ActionTypes["GET_ARTICLE_FAILURE"] = "[Edit Article] Get Article failure";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "R9ZR":
/*!*********************************************!*\
  !*** ./src/app/yourFeed/yourFeed.module.ts ***!
  \*********************************************/
/*! exports provided: YourFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourFeedModule", function() { return YourFeedModule; });
/* harmony import */ var _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/modules/feedToggler/feedToggler.module */ "3+4A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/banner/banner.module */ "3MHH");
/* harmony import */ var src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/feed/feed.module */ "yiK6");
/* harmony import */ var src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/popularTags/popularTags.module */ "YUxg");
/* harmony import */ var src_app_yourFeed_components_yourFeed_youtFeed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/yourFeed/components/yourFeed/youtFeed.component */ "r6/w");










const routes = [
    {
        path: "feed",
        component: src_app_yourFeed_components_yourFeed_youtFeed_component__WEBPACK_IMPORTED_MODULE_7__["YourFeedComponent"]
    }
];
class YourFeedModule {
}
YourFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: YourFeedModule });
YourFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function YourFeedModule_Factory(t) { return new (t || YourFeedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"],
            src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__["BannerModule"],
            src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"],
            _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](YourFeedModule, { declarations: [src_app_yourFeed_components_yourFeed_youtFeed_component__WEBPACK_IMPORTED_MODULE_7__["YourFeedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"],
        src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__["BannerModule"],
        src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"],
        _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](YourFeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"],
                    src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__["BannerModule"],
                    src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"],
                    _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]
                ],
                declarations: [src_app_yourFeed_components_yourFeed_youtFeed_component__WEBPACK_IMPORTED_MODULE_7__["YourFeedComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ssb1":
/*!*******************************************!*\
  !*** ./src/app/tagFeed/tagFeed.module.ts ***!
  \*******************************************/
/*! exports provided: TagFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFeedModule", function() { return TagFeedModule; });
/* harmony import */ var _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/modules/feedToggler/feedToggler.module */ "3+4A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/banner/banner.module */ "3MHH");
/* harmony import */ var src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/feed/feed.module */ "yiK6");
/* harmony import */ var src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/popularTags/popularTags.module */ "YUxg");
/* harmony import */ var src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/tagFeed/components/tagFeed/tagFeed.component */ "PZ/r");










const routes = [
    {
        path: "tags/:slug",
        component: src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_7__["TagFeedComponent"]
    }
];
class TagFeedModule {
}
TagFeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TagFeedModule });
TagFeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TagFeedModule_Factory(t) { return new (t || TagFeedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"],
            src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__["BannerModule"],
            src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"],
            _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TagFeedModule, { declarations: [src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_7__["TagFeedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"],
        src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__["BannerModule"],
        src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"],
        _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TagFeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_5__["FeedModule"],
                    src_app_shared_modules_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__["BannerModule"],
                    src_app_shared_modules_popularTags_popularTags_module__WEBPACK_IMPORTED_MODULE_6__["PopularTagsModule"],
                    _shared_modules_feedToggler_feedToggler_module__WEBPACK_IMPORTED_MODULE_0__["FeedTogglerModule"]
                ],
                declarations: [src_app_tagFeed_components_tagFeed_tagFeed_component__WEBPACK_IMPORTED_MODULE_7__["TagFeedComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/store/actions/getCurrentUser.action */ "2zcQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/topBar/components/topBar/topBar.component */ "oJKk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(Object(src_app_auth_store_actions_getCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["getCurrentUserAction"])());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-topBar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "T3VF":
/*!****************************************************!*\
  !*** ./src/app/auth/store/effects/login.effect.ts ***!
  \****************************************************/
/*! exports provided: LoginEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEffect", function() { return LoginEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/actions/login.action */ "wM+c");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/persistence.service */ "q3xw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");











class LoginEffect {
    constructor(actions$, authService, persistanceService, router) {
        this.actions$ = actions$;
        this.authService = authService;
        this.persistanceService = persistanceService;
        this.router = router;
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ request }) => {
            return this.authService.login(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((currentUser) => {
                this.persistanceService.set('accessToken', currentUser.token);
                return Object(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginSuccessAction"])({ currentUser });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorResponse) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginFailureAction"])({ errors: errorResponse.error.errors }));
            }));
        })));
        this.redirectAfterSubmit$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_login_action__WEBPACK_IMPORTED_MODULE_4__["loginSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.router.navigateByUrl('/');
        })), { dispatch: false });
    }
}
LoginEffect.ɵfac = function LoginEffect_Factory(t) { return new (t || LoginEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
LoginEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginEffect, factory: LoginEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "U4/U":
/*!**********************************************************!*\
  !*** ./src/app/shared/modules/feed/store/actionTypes.ts ***!
  \**********************************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_FEED"] = "[Feed] Get feed";
    ActionTypes["GET_FEED_SUCCESS"] = "[Feed] Get feed success";
    ActionTypes["GET_FEED_FAILURE"] = "[Feed] Get feed failure";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "UKsx":
/*!***************************************************!*\
  !*** ./src/app/editArticle/editArticle.module.ts ***!
  \***************************************************/
/*! exports provided: EditArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditArticleModule", function() { return EditArticleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_editArticle_store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/editArticle/store/reducers */ "FgEI");
/* harmony import */ var src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/editArticle/services/editArticle.service */ "1rjF");
/* harmony import */ var src_app_editArticle_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/editArticle/store/effects/getArticle.effect */ "QdpK");
/* harmony import */ var src_app_editArticle_store_effects_updateArticle_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/editArticle/store/effects/updateArticle.effect */ "VI94");
/* harmony import */ var src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/articleForm/articleForm.module */ "6Vdu");
/* harmony import */ var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/article.service */ "fTDj");
/* harmony import */ var src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/loading/loading.module */ "+Yip");
/* harmony import */ var src_app_editArticle_components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/editArticle/components/editArticle/editArticle.component */ "Iole");

















const routes = [
    {
        path: "articles/:slug/edit",
        component: src_app_editArticle_components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_12__["EditArticleComponent"]
    }
];
class EditArticleModule {
}
EditArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EditArticleModule });
EditArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function EditArticleModule_Factory(t) { return new (t || EditArticleModule)(); }, providers: [src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_6__["EditArticleService"], src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_10__["ArticleService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__["ArticleFormModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_editArticle_store_effects_updateArticle_effect__WEBPACK_IMPORTED_MODULE_8__["GetArticleEffect"], src_app_editArticle_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_7__["UpdateArticleEffect"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("editArticle", src_app_editArticle_store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
            src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditArticleModule, { declarations: [src_app_editArticle_components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_12__["EditArticleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__["ArticleFormModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_shared_modules_articleForm_articleForm_module__WEBPACK_IMPORTED_MODULE_9__["ArticleFormModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_editArticle_store_effects_updateArticle_effect__WEBPACK_IMPORTED_MODULE_8__["GetArticleEffect"], src_app_editArticle_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_7__["UpdateArticleEffect"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("editArticle", src_app_editArticle_store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
                    src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"]
                ],
                declarations: [src_app_editArticle_components_editArticle_editArticle_component__WEBPACK_IMPORTED_MODULE_12__["EditArticleComponent"]],
                providers: [src_app_editArticle_services_editArticle_service__WEBPACK_IMPORTED_MODULE_6__["EditArticleService"], src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_10__["ArticleService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "VI94":
/*!*******************************************************************!*\
  !*** ./src/app/editArticle/store/effects/updateArticle.effect.ts ***!
  \*******************************************************************/
/*! exports provided: GetArticleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArticleEffect", function() { return GetArticleEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/article/store/actions/getArticle.action */ "JP5K");
/* harmony import */ var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/article.service */ "fTDj");








class GetArticleEffect {
    constructor(actions$, sharedArticleService) {
        this.actions$ = actions$;
        this.sharedArticleService = sharedArticleService;
        this.getArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ slug }) => {
            return this.sharedArticleService.getArticle(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((article) => {
                return Object(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleSuccessAction"])({ article });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleFailureAction"])());
            }));
        })));
    }
}
GetArticleEffect.ɵfac = function GetArticleEffect_Factory(t) { return new (t || GetArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"])); };
GetArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetArticleEffect, factory: GetArticleEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "WHHk":
/*!********************************************************************!*\
  !*** ./src/app/shared/modules/addToFavorites/store/actionTypes.ts ***!
  \********************************************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_TO_FAVORITES"] = "[Add to favorites] Add to favorites";
    ActionTypes["ADD_TO_FAVORITES_SUCCESS"] = "[Add to favorites] Add to favorites success";
    ActionTypes["ADD_TO_FAVORITES_FAILURE"] = "[Add to favorites] Add to favorites failure";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "YUxg":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/popularTags.module.ts ***!
  \******************************************************************/
/*! exports provided: PopularTagsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularTagsModule", function() { return PopularTagsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/errorMessage/errorMessage.module */ "n3Mi");
/* harmony import */ var src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/loading/loading.module */ "+Yip");
/* harmony import */ var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */ "zbx3");
/* harmony import */ var src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/popularTags/services/popularTags.service */ "4CtW");
/* harmony import */ var src_app_shared_modules_popularTags_store_effects_getPopularTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/popularTags/store/effects/getPopularTags */ "5Bl2");
/* harmony import */ var src_app_shared_modules_popularTags_store_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/popularTags/store/reducers */ "0aJT");














class PopularTagsModule {
}
PopularTagsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PopularTagsModule });
PopularTagsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PopularTagsModule_Factory(t) { return new (t || PopularTagsModule)(); }, providers: [src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_8__["PopularTagsService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('popularTags', src_app_shared_modules_popularTags_store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_shared_modules_popularTags_store_effects_getPopularTags__WEBPACK_IMPORTED_MODULE_9__["GetPopularTagsEffect"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"],
            src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopularTagsModule, { declarations: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"],
        src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageModule"]], exports: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopularTagsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('popularTags', src_app_shared_modules_popularTags_store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_shared_modules_popularTags_store_effects_getPopularTags__WEBPACK_IMPORTED_MODULE_9__["GetPopularTagsEffect"]]),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"],
                    src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageModule"]
                ],
                providers: [src_app_shared_modules_popularTags_services_popularTags_service__WEBPACK_IMPORTED_MODULE_8__["PopularTagsService"]],
                declarations: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]],
                exports: [src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_7__["PopularTagsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/components/login/login.component */ "OuDC");
/* harmony import */ var src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/components/register/register.component */ "ysMu");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth/store/reducers */ "LiC5");
/* harmony import */ var src_app_auth_store_effects_getCurrentUser_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth/store/effects/getCurrentUser.effect */ "9Z4A");
/* harmony import */ var src_app_auth_store_effects_login_effect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/auth/store/effects/login.effect */ "T3VF");
/* harmony import */ var src_app_auth_store_effects_register_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/auth/store/effects/register.effect */ "wxBG");
/* harmony import */ var src_app_auth_store_effects_updateCurrentUser_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/auth/store/effects/updateCurrentUser.effect */ "efnd");
/* harmony import */ var src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/modules/backendErrorMessages/backendErrorMessages.module */ "i4ku");
/* harmony import */ var src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/persistence.service */ "q3xw");
/* harmony import */ var _store_effects_logout_effect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/effects/logout.effect */ "oQ+d");





















const routes = [
    {
        path: "register",
        component: src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    },
    {
        path: "login",
        component: src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }
];
class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_15__["PersistanceService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('auth', src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([
                src_app_auth_store_effects_register_effect__WEBPACK_IMPORTED_MODULE_12__["RegisterEffect"],
                src_app_auth_store_effects_login_effect__WEBPACK_IMPORTED_MODULE_11__["LoginEffect"],
                src_app_auth_store_effects_getCurrentUser_effect__WEBPACK_IMPORTED_MODULE_10__["GetCurrentUserEffect"],
                src_app_auth_store_effects_updateCurrentUser_effect__WEBPACK_IMPORTED_MODULE_13__["UpdateCurrentUserEffect"],
                _store_effects_logout_effect__WEBPACK_IMPORTED_MODULE_16__["LogoutEffect"]
            ]),
            src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_14__["BackendErrorMessagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"], src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_14__["BackendErrorMessagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('auth', src_app_auth_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([
                        src_app_auth_store_effects_register_effect__WEBPACK_IMPORTED_MODULE_12__["RegisterEffect"],
                        src_app_auth_store_effects_login_effect__WEBPACK_IMPORTED_MODULE_11__["LoginEffect"],
                        src_app_auth_store_effects_getCurrentUser_effect__WEBPACK_IMPORTED_MODULE_10__["GetCurrentUserEffect"],
                        src_app_auth_store_effects_updateCurrentUser_effect__WEBPACK_IMPORTED_MODULE_13__["UpdateCurrentUserEffect"],
                        _store_effects_logout_effect__WEBPACK_IMPORTED_MODULE_16__["LogoutEffect"]
                    ]),
                    src_app_shared_modules_backendErrorMessages_backendErrorMessages_module__WEBPACK_IMPORTED_MODULE_14__["BackendErrorMessagesModule"]
                ],
                providers: [src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_15__["PersistanceService"]],
                declarations: [src_app_auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], src_app_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ytr7":
/*!********************************************************!*\
  !*** ./src/app/shared/modules/topBar/topBar.module.ts ***!
  \********************************************************/
/*! exports provided: TopBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarModule", function() { return TopBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/topBar/components/topBar/topBar.component */ "oJKk");





class TopBarModule {
}
TopBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TopBarModule });
TopBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TopBarModule_Factory(t) { return new (t || TopBarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TopBarModule, { declarations: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TopBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                declarations: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]],
                exports: [src_app_shared_modules_topBar_components_topBar_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-routing.module */ "vY5A");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.module */ "Yj9t");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/topBar/topBar.module */ "Ytr7");
/* harmony import */ var src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/persistence.service */ "q3xw");
/* harmony import */ var src_app_shared_services_authInterceprot_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/authInterceprot.service */ "08Do");
/* harmony import */ var src_app_globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/globalFeed/globalFeed.module */ "56OU");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var src_app_yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/yourFeed/yourFeed.module */ "R9ZR");
/* harmony import */ var src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/tagFeed/tagFeed.module */ "Ssb1");
/* harmony import */ var src_app_article_article_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/article/article.module */ "rZHr");
/* harmony import */ var src_app_createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/createArticle/createArticle.module */ "PBbO");
/* harmony import */ var src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/editArticle/editArticle.module */ "UKsx");
/* harmony import */ var src_app_settings_settings_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/settings/settings.module */ "7wo0");
/* harmony import */ var src_app_userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/userProfile/userProfile.module */ "9TuU");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_11__["PersistanceService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: src_app_shared_services_authInterceprot_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceprot"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["routerReducer"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
            }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["StoreRouterConnectingModule"].forRoot(),
            src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_10__["TopBarModule"],
            src_app_globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_13__["GlobalFeedModule"],
            src_app_yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__["YourFeedModule"],
            src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__["TagFeedModule"],
            src_app_createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__["CreateArticleModule"],
            src_app_article_article_module__WEBPACK_IMPORTED_MODULE_17__["ArticleModule"],
            src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__["EditArticleModule"],
            src_app_settings_settings_module__WEBPACK_IMPORTED_MODULE_20__["SettingsModule"],
            src_app_userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__["UserProfileModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["StoreRouterConnectingModule"], src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_10__["TopBarModule"],
        src_app_globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_13__["GlobalFeedModule"],
        src_app_yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__["YourFeedModule"],
        src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__["TagFeedModule"],
        src_app_createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__["CreateArticleModule"],
        src_app_article_article_module__WEBPACK_IMPORTED_MODULE_17__["ArticleModule"],
        src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__["EditArticleModule"],
        src_app_settings_settings_module__WEBPACK_IMPORTED_MODULE_20__["SettingsModule"],
        src_app_userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__["UserProfileModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["routerReducer"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
                    }),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_14__["StoreRouterConnectingModule"].forRoot(),
                    src_app_shared_modules_topBar_topBar_module__WEBPACK_IMPORTED_MODULE_10__["TopBarModule"],
                    src_app_globalFeed_globalFeed_module__WEBPACK_IMPORTED_MODULE_13__["GlobalFeedModule"],
                    src_app_yourFeed_yourFeed_module__WEBPACK_IMPORTED_MODULE_15__["YourFeedModule"],
                    src_app_tagFeed_tagFeed_module__WEBPACK_IMPORTED_MODULE_16__["TagFeedModule"],
                    src_app_createArticle_createArticle_module__WEBPACK_IMPORTED_MODULE_18__["CreateArticleModule"],
                    src_app_article_article_module__WEBPACK_IMPORTED_MODULE_17__["ArticleModule"],
                    src_app_editArticle_editArticle_module__WEBPACK_IMPORTED_MODULE_19__["EditArticleModule"],
                    src_app_settings_settings_module__WEBPACK_IMPORTED_MODULE_20__["SettingsModule"],
                    src_app_userProfile_userProfile_module__WEBPACK_IMPORTED_MODULE_21__["UserProfileModule"]
                ],
                providers: [
                    src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_11__["PersistanceService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: src_app_shared_services_authInterceprot_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceprot"],
                        multi: true
                    }
                ],
                bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aBGW":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/feed/store/reducers.ts ***!
  \*******************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/feed/store/actions/getFeed.action */ "sKrn");



const initialState = {
    isLoading: false,
    error: null,
    data: null
};
const feedReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__["getFeedAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__["getFeedSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isLoading: false, data: action.feed }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__["getFeedFailureAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerNavigationAction"], () => initialState));
function reducers(state, action) {
    return feedReducer(state, action);
}


/***/ }),

/***/ "aMDZ":
/*!************************************************!*\
  !*** ./src/app/userProfile/store/selectors.ts ***!
  \************************************************/
/*! exports provided: userProfileFeatureSelector, isLoadingSelector, errorSelector, userProfileSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfileFeatureSelector", function() { return userProfileFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function() { return isLoadingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSelector", function() { return errorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userProfileSelector", function() { return userProfileSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const userProfileFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('userProfile');
const isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(userProfileFeatureSelector, (userProfile) => userProfile.isLoading);
const errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(userProfileFeatureSelector, (userProfile) => userProfile.error);
const userProfileSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(userProfileFeatureSelector, (userProfile) => userProfile.data);


/***/ }),

/***/ "aOen":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorMessageComponent {
    constructor() {
        this.messageProps = "Something went wrong";
    }
}
ErrorMessageComponent.ɵfac = function ErrorMessageComponent_Factory(t) { return new (t || ErrorMessageComponent)(); };
ErrorMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorMessageComponent, selectors: [["mc-error-message"]], inputs: { messageProps: ["message", "messageProps"] }, decls: 2, vars: 1, template: function ErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageProps);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-error-message",
                template: "<div>{{messageProps}}</div>",
            }]
    }], null, { messageProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['message']
        }] }); })();


/***/ }),

/***/ "adgX":
/*!********************************************************************************!*\
  !*** ./src/app/shared/modules/loading/components/loading/loading.component.ts ***!
  \********************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingComponent {
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["mc-loading"]], decls: 2, vars: 0, template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-loading",
                template: "<div>Loading...</div>",
            }]
    }], null, null); })();


/***/ }),

/***/ "crZO":
/*!************************************************!*\
  !*** ./src/app/editArticle/store/selectors.ts ***!
  \************************************************/
/*! exports provided: editArticleFeatureSelector, isSubmittingSelector, isLoadingSelector, validationErrorsSelector, articleSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editArticleFeatureSelector", function() { return editArticleFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function() { return isSubmittingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function() { return isLoadingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function() { return validationErrorsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleSelector", function() { return articleSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const editArticleFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("editArticle");
const isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, (editArticleState) => editArticleState.isSubmitting);
const isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, (editArticleState) => editArticleState.isLoading);
const validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, (editArticleState) => editArticleState.validationErrors);
const articleSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(editArticleFeatureSelector, (editArticleState) => editArticleState.article);


/***/ }),

/***/ "dVyE":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action.ts ***!
  \**************************************************************************************/
/*! exports provided: addToFavoritesActions, addToFavoritesSuccessAction, addToFavoritesFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToFavoritesActions", function() { return addToFavoritesActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToFavoritesSuccessAction", function() { return addToFavoritesSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToFavoritesFailureAction", function() { return addToFavoritesFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/store/actionTypes */ "WHHk");


const addToFavoritesActions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ADD_TO_FAVORITES, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToFavoritesSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ADD_TO_FAVORITES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToFavoritesFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_addToFavorites_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ADD_TO_FAVORITES_FAILURE);


/***/ }),

/***/ "efnd":
/*!****************************************************************!*\
  !*** ./src/app/auth/store/effects/updateCurrentUser.effect.ts ***!
  \****************************************************************/
/*! exports provided: UpdateCurrentUserEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCurrentUserEffect", function() { return UpdateCurrentUserEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/actions/updateCurrentUser.action */ "Isqp");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");








class UpdateCurrentUserEffect {
    constructor(actions$, authService) {
        this.actions$ = actions$;
        this.authService = authService;
        this.updateCurrentUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ currentUserInput }) => {
            return this.authService.updateCurrentUser(currentUserInput).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((currentUser) => {
                return Object(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserSuccessAction"])({ currentUser });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorResponse) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_4__["updateCurrentUserFailureAction"])({ errors: errorResponse.error.errors }));
            }));
        })));
    }
}
UpdateCurrentUserEffect.ɵfac = function UpdateCurrentUserEffect_Factory(t) { return new (t || UpdateCurrentUserEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
UpdateCurrentUserEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UpdateCurrentUserEffect, factory: UpdateCurrentUserEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateCurrentUserEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "fTDj":
/*!****************************************************!*\
  !*** ./src/app/shared/services/article.service.ts ***!
  \****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ArticleService {
    constructor(http) {
        this.http = http;
    }
    getArticle(slug) {
        const fullUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/articles/${slug}`;
        return this.http.get(fullUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.article));
    }
}
ArticleService.ɵfac = function ArticleService_Factory(t) { return new (t || ArticleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArticleService, factory: ArticleService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "g8ju":
/*!**********************************************!*\
  !*** ./src/app/article/store/actionTypes.ts ***!
  \**********************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_ARTICLE"] = "[Feed] Get article";
    ActionTypes["GET_ARTICLE_SUCCESS"] = "[Feed] Get article success";
    ActionTypes["GET_ARTICLE_FAILURE"] = "[Feed] Get article failure";
    ActionTypes["DELETE_ARTICLE"] = "[Feed] Delete article";
    ActionTypes["DELETE_ARTICLE_SUCCESS"] = "[Feed] Delete article success";
    ActionTypes["DELETE_ARTICLE_FAILURE"] = "[Feed] Delete article failure";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "ghdw":
/*!********************************************************!*\
  !*** ./src/app/shared/modules/feed/store/selectors.ts ***!
  \********************************************************/
/*! exports provided: feedFeatureSelector, isLoadingSelector, errorSelector, feedSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedFeatureSelector", function() { return feedFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadingSelector", function() { return isLoadingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSelector", function() { return errorSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedSelector", function() { return feedSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const feedFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('feed');
const isLoadingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(feedFeatureSelector, (feedState) => feedState.isLoading);
const errorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(feedFeatureSelector, (feedState) => feedState.error);
const feedSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(feedFeatureSelector, (feedState) => feedState.data);


/***/ }),

/***/ "h4+K":
/*!*******************************************!*\
  !*** ./src/app/article/store/reducers.ts ***!
  \*******************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/article/store/actions/getArticle.action */ "JP5K");



const initialState = {
    isLoading: false,
    error: null,
    data: null
};
const articleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { isLoading: false, data: action.article }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_2__["getArticleFailureAction"], (state) => (Object.assign(Object.assign({}, state), { isLoading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerNavigationAction"], () => initialState));
function reducers(state, action) {
    return articleReducer(state, action);
}


/***/ }),

/***/ "hrgH":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/feed/store/effects/getFeed.effect.ts ***!
  \*********************************************************************/
/*! exports provided: GetFeedEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFeedEffect", function() { return GetFeedEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/feed/store/actions/getFeed.action */ "sKrn");
/* harmony import */ var src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/feed/services/feed.service */ "AnrA");








class GetFeedEffect {
    constructor(actions$, feedService) {
        this.actions$ = actions$;
        this.feedService = feedService;
        this.getFeed$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__["getFeedAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ url }) => {
            return this.feedService.getFeed(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((feed) => {
                return Object(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__["getFeedSuccessAction"])({ feed });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_4__["getFeedFailureAction"])());
            }));
        })));
    }
}
GetFeedEffect.ɵfac = function GetFeedEffect_Factory(t) { return new (t || GetFeedEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"])); };
GetFeedEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetFeedEffect, factory: GetFeedEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetFeedEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] }]; }, null); })();


/***/ }),

/***/ "i4ku":
/*!************************************************************************************!*\
  !*** ./src/app/shared/modules/backendErrorMessages/backendErrorMessages.module.ts ***!
  \************************************************************************************/
/*! exports provided: BackendErrorMessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendErrorMessagesModule", function() { return BackendErrorMessagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages.component */ "+aif");




class BackendErrorMessagesModule {
}
BackendErrorMessagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BackendErrorMessagesModule });
BackendErrorMessagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BackendErrorMessagesModule_Factory(t) { return new (t || BackendErrorMessagesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BackendErrorMessagesModule, { declarations: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackendErrorMessagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]],
                exports: [src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_2__["BackendErrorMessagesComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jaLj":
/*!************************************************************!*\
  !*** ./src/app/article/store/effects/getArticle.effect.ts ***!
  \************************************************************/
/*! exports provided: GetArticleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetArticleEffect", function() { return GetArticleEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/article/store/actions/getArticle.action */ "JP5K");
/* harmony import */ var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/article.service */ "fTDj");








class GetArticleEffect {
    constructor(actions$, sharedArticleService) {
        this.actions$ = actions$;
        this.sharedArticleService = sharedArticleService;
        this.getArticle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ slug }) => {
            return this.sharedArticleService.getArticle(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((article) => {
                return Object(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleSuccessAction"])({ article });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_article_store_actions_getArticle_action__WEBPACK_IMPORTED_MODULE_4__["getArticleFailureAction"])());
            }));
        })));
    }
}
GetArticleEffect.ɵfac = function GetArticleEffect_Factory(t) { return new (t || GetArticleEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"])); };
GetArticleEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetArticleEffect, factory: GetArticleEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetArticleEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_5__["ArticleService"] }]; }, null); })();


/***/ }),

/***/ "kh7C":
/*!**************************************************!*\
  !*** ./src/app/shared/services/utils.service.ts ***!
  \**************************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UtilService {
    range(start, end) {
        return [...Array(end).keys()].map(el => el + start);
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "m7sG":
/*!*****************************************!*\
  !*** ./src/app/auth/store/selectors.ts ***!
  \*****************************************/
/*! exports provided: authFeatureSelector, isSubmittingSelector, validationErrorsSelector, isLoggedInSelector, isAnonymousSelector, currentUserSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFeatureSelector", function() { return authFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubmittingSelector", function() { return isSubmittingSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationErrorsSelector", function() { return validationErrorsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedInSelector", function() { return isLoggedInSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnonymousSelector", function() { return isAnonymousSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserSelector", function() { return currentUserSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const authFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
const isSubmittingSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, (authState) => authState.isSubmitting);
const validationErrorsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, (authState) => authState.validationErrors);
const isLoggedInSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, (authState) => authState.isLoggedIn);
const isAnonymousSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, (authState) => authState.isLoggedIn === false);
const currentUserSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authFeatureSelector, (authState) => authState.currentUser);


/***/ }),

/***/ "n3Mi":
/*!********************************************************************!*\
  !*** ./src/app/shared/modules/errorMessage/errorMessage.module.ts ***!
  \********************************************************************/
/*! exports provided: ErrorMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageModule", function() { return ErrorMessageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */ "aOen");




class ErrorMessageModule {
}
ErrorMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ErrorMessageModule });
ErrorMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ErrorMessageModule_Factory(t) { return new (t || ErrorMessageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErrorMessageModule, { declarations: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]],
                exports: [src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "oJKk":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/modules/topBar/components/topBar/topBar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/store/selectors */ "m7sG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function () { return ["/articles/new"]; };
const _c1 = function () { return ["/settings"]; };
const _c2 = function (a1) { return ["/profiles", a1]; };
function TopBarComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 New Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, ctx_r0.currentUser$).username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r0.currentUser$).image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, ctx_r0.currentUser$).username, " ");
} }
const _c3 = function () { return ["/login"]; };
const _c4 = function () { return ["/register"]; };
function TopBarComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));
} }
const _c5 = function () { return ["/"]; };
class TopBarComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.isLoggedIn$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isLoggedInSelector"]));
        this.isAnonymous$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["isAnonymousSelector"]));
        this.currentUser$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_2__["currentUserSelector"]));
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["mc-topBar"]], decls: 12, vars: 10, consts: [[1, "navbar", "navbar-light"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [4, "ngIf"], [1, "ion-compose"], [1, "ion-gear-a"], ["alt", "user picture", 1, "user-pic", 3, "src"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopBarComponent_ng_container_8_Template, 16, 15, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopBarComponent_ng_container_10_Template, 7, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.isLoggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.isAnonymous$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BCYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-topBar",
                templateUrl: "./topBar.component.html",
                styleUrls: ["./topBar.component.scss"]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "oQ+d":
/*!*****************************************************!*\
  !*** ./src/app/auth/store/effects/logout.effect.ts ***!
  \*****************************************************/
/*! exports provided: LogoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutEffect", function() { return LogoutEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _sync_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sync.action */ "/XYW");
/* harmony import */ var src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/persistence.service */ "q3xw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");








class LogoutEffect {
    constructor(actions$, persistanceService, router) {
        this.actions$ = actions$;
        this.persistanceService = persistanceService;
        this.router = router;
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_sync_action__WEBPACK_IMPORTED_MODULE_3__["logoutAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.persistanceService.set("accessToken", "");
            this.router.navigateByUrl("/");
        })), { dispatch: false });
    }
}
LogoutEffect.ɵfac = function LogoutEffect_Factory(t) { return new (t || LogoutEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_4__["PersistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LogoutEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogoutEffect, factory: LogoutEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_4__["PersistanceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "ok1D":
/*!**************************************************!*\
  !*** ./src/app/userProfile/store/actionTypes.ts ***!
  \**************************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_USER_PROFILE"] = "['User profile'] Get user profile";
    ActionTypes["GET_USER_PROFILE_SUCCESS"] = "[User profile] Get user profile success";
    ActionTypes["GET_USER_PROFILE_FAILURE"] = "[User profile] Get user profile failure";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "q3xw":
/*!********************************************************!*\
  !*** ./src/app/shared/services/persistence.service.ts ***!
  \********************************************************/
/*! exports provided: PersistanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistanceService", function() { return PersistanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PersistanceService {
    set(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        }
        catch (error) {
            console.error('Error saving to localStorage', error);
        }
    }
    get(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (error) {
            console.error("Error getting data from localStorage", error);
            return null;
        }
    }
}
PersistanceService.ɵfac = function PersistanceService_Factory(t) { return new (t || PersistanceService)(); };
PersistanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersistanceService, factory: PersistanceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersistanceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "r6/w":
/*!********************************************************************!*\
  !*** ./src/app/yourFeed/components/yourFeed/youtFeed.component.ts ***!
  \********************************************************************/
/*! exports provided: YourFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourFeedComponent", function() { return YourFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/banner/components/banner/banner.component */ "yxoP");
/* harmony import */ var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */ "FcJo");
/* harmony import */ var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/feed/components/feed/feed.component */ "rJr/");
/* harmony import */ var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */ "zbx3");






class YourFeedComponent {
    constructor() {
        this.apiUrl = "/articles/feed";
    }
}
YourFeedComponent.ɵfac = function YourFeedComponent_Factory(t) { return new (t || YourFeedComponent)(); };
YourFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YourFeedComponent, selectors: [["mc-your-feed"]], decls: 9, vars: 1, consts: [[1, "home-page"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [3, "apiUrl"], [1, "col-md-3"]], template: function YourFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-feed-toggler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mc-feed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mc-popular-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx.apiUrl);
    } }, directives: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"], src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__["PopularTagsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5b3VyRmVlZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YourFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-your-feed",
                templateUrl: "./yourFeed.component.html",
                styleUrls: ["./yourFeed.component.scss"]
            }]
    }], null, null); })();


/***/ }),

/***/ "rJr/":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/feed/components/feed/feed.component.ts ***!
  \***********************************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/feed/store/actions/getFeed.action */ "sKrn");
/* harmony import */ var src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/feed/store/selectors */ "ghdw");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "cr+I");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/loading/components/loading/loading.component */ "adgX");
/* harmony import */ var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */ "aOen");
/* harmony import */ var src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/pagination/components/pagination/pagination.component */ "Jhn3");
/* harmony import */ var src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component */ "AcQo");
/* harmony import */ var src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/tagList/components/tagList/tagList.component */ "9CQT");















function FeedComponent_mc_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
} }
function FeedComponent_mc_error_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-error-message");
} }
const _c0 = function (a1) { return ["/profiles", a1]; };
const _c1 = function (a1) { return ["/articles", a1]; };
function FeedComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mc-add-to-favorites", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mc-tag-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, article_r4.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", article_r4.author.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, article_r4.author.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", article_r4.author.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r4.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isFavorited", article_r4.favorited)("articleSlug", article_r4.slug)("favoritesCount", article_r4.favoritesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, article_r4.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tags", article_r4.tagList);
} }
function FeedComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedComponent_div_4_div_1_Template, 17, 18, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mc-pagination", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r2.feed$)) == null ? null : tmp_0_0.articles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx_r2.feed$)) == null ? null : tmp_1_0.articlesCount)("limit", ctx_r2.limit)("url", ctx_r2.baseUrl)("currentPage", ctx_r2.currentPage);
} }
class FeedComponent {
    constructor(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.limit = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].limit;
    }
    ngOnInit() {
        this.initializeValues();
        this.initializeListeners();
    }
    ngOnDestroy() {
        this.queryParamsSubscription.unsubscribe();
    }
    ngOnChanges(changes) {
        const isApiUrlChanged = !changes.apiUrlProps.firstChange && changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue;
        if (isApiUrlChanged) {
            this.fetchFeed();
        }
    }
    initializeValues() {
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_3__["isLoadingSelector"]));
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_3__["errorSelector"]));
        this.feed$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_feed_store_selectors__WEBPACK_IMPORTED_MODULE_3__["feedSelector"]));
        this.baseUrl = this.router.url.split('?')[0];
    }
    initializeListeners() {
        this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
            this.currentPage = Number(params.page || "1");
            this.fetchFeed();
        });
    }
    fetchFeed() {
        const offset = this.currentPage * this.limit - this.limit;
        const parsedUrl = Object(query_string__WEBPACK_IMPORTED_MODULE_5__["parseUrl"])(this.apiUrlProps);
        const stringifiedParams = Object(query_string__WEBPACK_IMPORTED_MODULE_5__["stringify"])(Object.assign({ limit: this.limit, offset }, parsedUrl.query));
        const apiUrlWithParams = `${parsedUrl.url}?&${stringifiedParams}`;
        this.store.dispatch(Object(src_app_shared_modules_feed_store_actions_getFeed_action__WEBPACK_IMPORTED_MODULE_2__["getFeedAction"])({ url: apiUrlWithParams }));
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["mc-feed"]], inputs: { apiUrlProps: ["apiUrl", "apiUrlProps"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 9, consts: [[4, "ngIf"], ["class", "article-preview", 4, "ngFor", "ngForOf"], [3, "total", "limit", "url", "currentPage"], [1, "article-preview"], [1, "article-meta"], [3, "routerLink"], ["alt", "Author image", 3, "src"], [1, "info"], [1, "date"], [1, "pull-xs-right"], [3, "isFavorited", "articleSlug", "favoritesCount"], [1, "preview-link", 3, "routerLink"], [3, "tags"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FeedComponent_mc_loading_0_Template, 1, 0, "mc-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedComponent_mc_error_message_2_Template, 1, 0, "mc-error-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedComponent_div_4_Template, 5, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.feed$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], src_app_shared_modules_pagination_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], src_app_shared_modules_addToFavorites_components_addToFavorites_addToFavorites_component__WEBPACK_IMPORTED_MODULE_11__["AddToFavoritesComponent"], src_app_shared_modules_tagList_components_tagList_tagList_component__WEBPACK_IMPORTED_MODULE_12__["TagListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-feed",
                templateUrl: "./feed.component.html",
                styleUrls: ["./feed.component.scss"]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, { apiUrlProps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['apiUrl']
        }] }); })();


/***/ }),

/***/ "rZHr":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_article_components_article_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/article/components/article/article.component */ "QnWJ");
/* harmony import */ var src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/article/services/article.service */ "OeC1");
/* harmony import */ var src_app_article_store_effects_deleteArticle_effect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/article/store/effects/deleteArticle.effect */ "PW9N");
/* harmony import */ var src_app_article_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/article/store/effects/getArticle.effect */ "jaLj");
/* harmony import */ var src_app_article_store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/article/store/reducers */ "h4+K");
/* harmony import */ var src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/errorMessage/errorMessage.module */ "n3Mi");
/* harmony import */ var src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/loading/loading.module */ "+Yip");
/* harmony import */ var src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/tagList/tagList.module */ "/TBE");
/* harmony import */ var src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/article.service */ "fTDj");


















const routes = [
    {
        path: "articles/:slug",
        component: src_app_article_components_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]
    }
];
class ArticleModule {
}
ArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ArticleModule });
ArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ArticleModule_Factory(t) { return new (t || ArticleModule)(); }, providers: [src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_13__["ArticleService"], src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"],
            src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_article_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_8__["GetArticleEffect"], src_app_article_store_effects_deleteArticle_effect__WEBPACK_IMPORTED_MODULE_7__["DeleteArticleEffect"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('article', src_app_article_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__["TagListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ArticleModule, { declarations: [src_app_article_components_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"],
        src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__["TagListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArticleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageModule"],
                    src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_article_store_effects_getArticle_effect__WEBPACK_IMPORTED_MODULE_8__["GetArticleEffect"], src_app_article_store_effects_deleteArticle_effect__WEBPACK_IMPORTED_MODULE_7__["DeleteArticleEffect"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('article', src_app_article_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_12__["TagListModule"]
                ],
                declarations: [src_app_article_components_article_article_component__WEBPACK_IMPORTED_MODULE_5__["ArticleComponent"]],
                exports: [],
                providers: [src_app_shared_services_article_service__WEBPACK_IMPORTED_MODULE_13__["ArticleService"], src_app_article_services_article_service__WEBPACK_IMPORTED_MODULE_6__["ArticleService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sKrn":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/feed/store/actions/getFeed.action.ts ***!
  \*********************************************************************/
/*! exports provided: getFeedAction, getFeedSuccessAction, getFeedFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedAction", function() { return getFeedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedSuccessAction", function() { return getFeedSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeedFailureAction", function() { return getFeedFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/feed/store/actionTypes */ "U4/U");


const getFeedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_FEED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getFeedSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_FEED_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getFeedFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_shared_modules_feed_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].GET_FEED_FAILURE);


/***/ }),

/***/ "t/Al":
/*!**************************************************************************!*\
  !*** ./src/app/globalFeed/components/globalFeed/globalFeed.component.ts ***!
  \**************************************************************************/
/*! exports provided: GlobalFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFeedComponent", function() { return GlobalFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/banner/components/banner/banner.component */ "yxoP");
/* harmony import */ var src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/feedToggler/components/feedToggler/feedToggler.component */ "FcJo");
/* harmony import */ var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/feed/components/feed/feed.component */ "rJr/");
/* harmony import */ var src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/popularTags/components/popularTags/popularTags.component */ "zbx3");






class GlobalFeedComponent {
    constructor() {
        this.apiUrl = "/articles";
    }
}
GlobalFeedComponent.ɵfac = function GlobalFeedComponent_Factory(t) { return new (t || GlobalFeedComponent)(); };
GlobalFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlobalFeedComponent, selectors: [["mc-global-feed"]], decls: 9, vars: 1, consts: [[1, "home-page"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [3, "apiUrl"], [1, "col-md-3"]], template: function GlobalFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mc-feed-toggler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mc-feed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mc-popular-tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("apiUrl", ctx.apiUrl);
    } }, directives: [src_app_shared_modules_banner_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], src_app_shared_modules_feedToggler_components_feedToggler_feedToggler_component__WEBPACK_IMPORTED_MODULE_2__["FeedTogglerComponent"], src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"], src_app_shared_modules_popularTags_components_popularTags_popularTags_component__WEBPACK_IMPORTED_MODULE_4__["PopularTagsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnbG9iYWxGZWVkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-global-feed",
                templateUrl: "./globalFeed.component.html",
                styleUrls: ["./globalFeed.component.scss"]
            }]
    }], null, null); })();


/***/ }),

/***/ "t2Z8":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/store/actionTypes.ts ***!
  \*****************************************************************/
/*! exports provided: ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_POPULAR_TASGS"] = "[PopularTags] Get popular tags";
    ActionTypes["GET_POPULAR_TASGS_SUCCESS"] = "[PopularTags] Get popular tags success";
    ActionTypes["GET_POPULAR_TASGS_FAILURE"] = "[PopularTags] Get popular tags failure";
})(ActionTypes || (ActionTypes = {}));


/***/ }),

/***/ "vUo0":
/*!********************************************!*\
  !*** ./src/app/settings/store/reducers.ts ***!
  \********************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/store/actions/updateCurrentUser.action */ "Isqp");


const initialState = {
    isSubmitting: false,
    validationErrors: null
};
const settingsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["updateCurrentUserAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["updateCurrentUserSuccessAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_auth_store_actions_updateCurrentUser_action__WEBPACK_IMPORTED_MODULE_1__["updateCurrentUserFailureAction"], (state, action) => (Object.assign(Object.assign({}, state), { isSubmitting: false, validationErrors: action.errors }))));
function reducers(state, action) {
    return settingsReducer(state, action);
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wM+c":
/*!****************************************************!*\
  !*** ./src/app/auth/store/actions/login.action.ts ***!
  \****************************************************/
/*! exports provided: loginAction, loginSuccessAction, loginFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/store/actionTypes */ "EGNd");


const loginAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "wxBG":
/*!*******************************************************!*\
  !*** ./src/app/auth/store/effects/register.effect.ts ***!
  \*******************************************************/
/*! exports provided: RegisterEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEffect", function() { return RegisterEffect; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/actions/register.action */ "zALH");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/persistence.service */ "q3xw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");











class RegisterEffect {
    constructor(actions$, authService, persistanceService, router) {
        this.actions$ = actions$;
        this.authService = authService;
        this.persistanceService = persistanceService;
        this.router = router;
        this.register$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_4__["registerAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ request }) => {
            return this.authService.register(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((currentUser) => {
                this.persistanceService.set('accessToken', currentUser.token);
                return Object(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_4__["registerSuccessAction"])({ currentUser });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((errorResponse) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_4__["registerFailureAction"])({ errors: errorResponse.error.errors }));
            }));
        })));
        this.redirectAfterSubmit$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_4__["registerSuccessAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.router.navigateByUrl('/');
        })), { dispatch: false });
    }
}
RegisterEffect.ɵfac = function RegisterEffect_Factory(t) { return new (t || RegisterEffect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
RegisterEffect.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterEffect, factory: RegisterEffect.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterEffect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: src_app_shared_services_persistence_service__WEBPACK_IMPORTED_MODULE_6__["PersistanceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "ydLu":
/*!*************************************************!*\
  !*** ./src/app/createArticle/store/reducers.ts ***!
  \*************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/createArticle/store/actions/createArticle.action */ "Js+y");


const intialState = {
    isSubmitting: false,
    validationErrors: null
};
const createArticleReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(intialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__["createArticleAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__["createArticleSuccessAction"], (state) => (Object.assign(Object.assign({}, state), { isSubmitting: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(src_app_createArticle_store_actions_createArticle_action__WEBPACK_IMPORTED_MODULE_1__["createArticleFailureAction"], (state, action) => (Object.assign(Object.assign({}, state), { isSubmitting: false, validationErrors: action.errors }))));
const reducers = (state, action) => {
    return createArticleReducer(state, action);
};


/***/ }),

/***/ "yiK6":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/feed/feed.module.ts ***!
  \****************************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/addToFavorites/addToFavorites.module */ "FAMj");
/* harmony import */ var src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/errorMessage/errorMessage.module */ "n3Mi");
/* harmony import */ var src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/modules/feed/components/feed/feed.component */ "rJr/");
/* harmony import */ var src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/feed/services/feed.service */ "AnrA");
/* harmony import */ var src_app_shared_modules_feed_store_effects_getFeed_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/modules/feed/store/effects/getFeed.effect */ "hrgH");
/* harmony import */ var src_app_shared_modules_feed_store_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/modules/feed/store/reducers */ "aBGW");
/* harmony import */ var src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/loading/loading.module */ "+Yip");
/* harmony import */ var src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/pagination/pagination.module */ "EBBL");
/* harmony import */ var src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/tagList/tagList.module */ "/TBE");

















class FeedModule {
}
FeedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeedModule });
FeedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FeedModule_Factory(t) { return new (t || FeedModule)(); }, providers: [src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_8__["FeedService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageModule"],
            src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
            src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_shared_modules_feed_store_effects_getFeed_effect__WEBPACK_IMPORTED_MODULE_9__["GetFeedEffect"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('feed', src_app_shared_modules_feed_store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
            src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_13__["TagListModule"],
            src_app_shared_modules_addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeedModule, { declarations: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageModule"],
        src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
        src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_13__["TagListModule"],
        src_app_shared_modules_addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesModule"]], exports: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    src_app_shared_modules_errorMessage_errorMessage_module__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageModule"],
                    src_app_shared_modules_loading_loading_module__WEBPACK_IMPORTED_MODULE_11__["LoadingModule"],
                    src_app_shared_modules_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([src_app_shared_modules_feed_store_effects_getFeed_effect__WEBPACK_IMPORTED_MODULE_9__["GetFeedEffect"]]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('feed', src_app_shared_modules_feed_store_reducers__WEBPACK_IMPORTED_MODULE_10__["reducers"]),
                    src_app_shared_modules_tagList_tagList_module__WEBPACK_IMPORTED_MODULE_13__["TagListModule"],
                    src_app_shared_modules_addToFavorites_addToFavorites_module__WEBPACK_IMPORTED_MODULE_5__["AddToFavoritesModule"]
                ],
                declarations: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"]],
                exports: [src_app_shared_modules_feed_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"]],
                providers: [src_app_shared_modules_feed_services_feed_service__WEBPACK_IMPORTED_MODULE_8__["FeedService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ysMu":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/store/actions/register.action */ "zALH");
/* harmony import */ var src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/selectors */ "m7sG");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/modules/backendErrorMessages/components/backendErrorMessages.component */ "+aif");












function RegisterComponent_mc_backend_error_messages_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-backend-error-messages", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backendErrors", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.backendErrors$));
} }
const _c0 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(fb, store, authService) {
        this.fb = fb;
        this.store = store;
        this.authService = authService;
    }
    ngOnInit() {
        this.initializeForm();
        this.initializeValues();
    }
    initializeValues() {
        this.isSubmitting$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__["isSubmittingSelector"]));
        this.backendErrors$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(src_app_auth_store_selectors__WEBPACK_IMPORTED_MODULE_4__["validationErrorsSelector"]));
    }
    initializeForm() {
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: '',
            password: ''
        });
    }
    onSubmit() {
        const request = {
            user: this.form.value
        };
        this.store.dispatch(Object(src_app_auth_store_actions_register_action__WEBPACK_IMPORTED_MODULE_3__["registerAction"])({ request }));
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["mc-register"]], decls: 22, vars: 9, consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink"], [3, "backendErrors", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Username", "formControlName", "username", 1, "form-control", "form-control-lg"], ["type", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "backendErrors"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sigh Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_mc_backend_error_messages_9_Template, 2, 3, "mc-backend-error-messages", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.backendErrors$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 6, ctx.isSubmitting$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], src_app_shared_modules_backendErrorMessages_components_backendErrorMessages_component__WEBPACK_IMPORTED_MODULE_8__["BackendErrorMessagesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-register",
                templateUrl: "./register.component.html",
                styleUrls: ["./register.component.scss"]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "yxoP":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/modules/banner/components/banner/banner.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["mc-banner"]], decls: 6, vars: 0, consts: [[1, "banner"], [1, "container"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A place to share knowladge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-banner",
                templateUrl: "./banner.component.html",
                styleUrls: ["./banner.component.scss"]
            }]
    }], null, null); })();


/***/ }),

/***/ "zALH":
/*!*******************************************************!*\
  !*** ./src/app/auth/store/actions/register.action.ts ***!
  \*******************************************************/
/*! exports provided: registerAction, registerSuccessAction, registerFailureAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAction", function() { return registerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccessAction", function() { return registerSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFailureAction", function() { return registerFailureAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/store/actionTypes */ "EGNd");


const registerAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerFailureAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(src_app_auth_store_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zbx3":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PopularTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularTagsComponent", function() { return PopularTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modules/popularTags/store/actions/getPopularTags.action */ "KaLh");
/* harmony import */ var src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/popularTags/store/selectors */ "5h3v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/loading/components/loading/loading.component */ "adgX");
/* harmony import */ var src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component */ "aOen");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










function PopularTagsComponent_mc_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-loading");
} }
function PopularTagsComponent_mc_error_message_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-error-message");
} }
const _c0 = function (a1) { return ["/tags", a1]; };
function PopularTagsComponent_div_4_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const popularTag_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, popularTag_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", popularTag_r4, " ");
} }
function PopularTagsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Popular Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopularTagsComponent_div_4_a_4_Template, 2, 4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r2.popularTags$));
} }
class PopularTagsComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.initializeValues();
        this.fetchData();
    }
    initializeValues() {
        this.popularTags$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__["popularTagsSelector"]));
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__["isLoadingSelector"]));
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_shared_modules_popularTags_store_selectors__WEBPACK_IMPORTED_MODULE_3__["errorSelector"]));
    }
    fetchData() {
        this.store.dispatch(Object(src_app_shared_modules_popularTags_store_actions_getPopularTags_action__WEBPACK_IMPORTED_MODULE_2__["getPopularTagsAction"])());
    }
}
PopularTagsComponent.ɵfac = function PopularTagsComponent_Factory(t) { return new (t || PopularTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
PopularTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopularTagsComponent, selectors: [["mc-popular-tags"]], decls: 6, vars: 9, consts: [[4, "ngIf"], ["class", "sidebar", 4, "ngIf"], [1, "sidebar"], [1, "tag-list"], ["class", "tag-default tag-pill", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "tag-default", "tag-pill", 3, "routerLink"]], template: function PopularTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopularTagsComponent_mc_loading_0_Template, 1, 0, "mc-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopularTagsComponent_mc_error_message_2_Template, 1, 0, "mc-error-message", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopularTagsComponent_div_4_Template, 6, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.isLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.popularTags$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], src_app_shared_modules_loading_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], src_app_shared_modules_errorMessage_components_errorMessage_errorMessage_component__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopularTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mc-popular-tags",
                templateUrl: "./popularTags.component.html"
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map