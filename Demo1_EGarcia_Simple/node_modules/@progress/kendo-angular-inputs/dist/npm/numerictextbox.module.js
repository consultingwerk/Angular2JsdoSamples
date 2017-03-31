"use strict";
var core_1 = require('@angular/core');
var numerictextbox_component_1 = require('./numerictextbox/numerictextbox.component');
var common_1 = require('@angular/common');
var kendo_angular_intl_1 = require('@progress/kendo-angular-intl');
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the NumericTextBox component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the NumericTextBox module
 * import { NumericTextBoxModule } from '@progress/kendo-angular-inputs';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * @@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, NumericTextBoxModule], // import NumericTextBox module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var NumericTextBoxModule = (function () {
    function NumericTextBoxModule() {
    }
    NumericTextBoxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [numerictextbox_component_1.NumericTextBoxComponent],
                    exports: [numerictextbox_component_1.NumericTextBoxComponent],
                    imports: [common_1.CommonModule],
                    providers: [
                        { provide: kendo_angular_intl_1.IntlService, useClass: kendo_angular_intl_1.CldrIntlService }
                    ]
                },] },
    ];
    /** @nocollapse */
    NumericTextBoxModule.ctorParameters = function () { return []; };
    return NumericTextBoxModule;
}());
exports.NumericTextBoxModule = NumericTextBoxModule;
