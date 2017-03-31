import { NgModule } from '@angular/core';
import { NumericTextBoxComponent } from './numerictextbox/numerictextbox.component';
import { CommonModule } from '@angular/common';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
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
export var NumericTextBoxModule = (function () {
    function NumericTextBoxModule() {
    }
    NumericTextBoxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NumericTextBoxComponent],
                    exports: [NumericTextBoxComponent],
                    imports: [CommonModule],
                    providers: [
                        { provide: IntlService, useClass: CldrIntlService }
                    ]
                },] },
    ];
    /** @nocollapse */
    NumericTextBoxModule.ctorParameters = function () { return []; };
    return NumericTextBoxModule;
}());
