"use strict";
var core_1 = require('@angular/core');
var kendo_draggable_1 = require('@telerik/kendo-draggable');
/**
 * @hidden
 */
var KendoDraggableDirective = (function () {
    function KendoDraggableDirective(ngEl) {
        var _this = this;
        this.kendo = {
            drag: new core_1.EventEmitter(),
            press: new core_1.EventEmitter(),
            release: new core_1.EventEmitter()
        };
        if (typeof document !== 'undefined') {
            this.draggable = new kendo_draggable_1.default({
                drag: function (e) { return _this.kendo.drag.next(e); },
                press: function (e) { return _this.kendo.press.next(e); },
                release: function (e) { return _this.kendo.release.next(e); }
            });
            this.draggable.bindTo(ngEl.nativeElement);
        }
    }
    KendoDraggableDirective.prototype.ngOnDestroy = function () {
        if (typeof document !== 'undefined') {
            this.draggable.destroy();
        }
    };
    KendoDraggableDirective.decorators = [
        { type: core_1.Directive, args: [{
                    outputs: ['kendo.press', 'kendo.drag', 'kendo.release'],
                    selector: '[kendoDraggable]'
                },] },
    ];
    /** @nocollapse */
    KendoDraggableDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    return KendoDraggableDirective;
}());
exports.KendoDraggableDirective = KendoDraggableDirective;
