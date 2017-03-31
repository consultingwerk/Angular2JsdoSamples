import { EventEmitter, ElementRef, Directive } from '@angular/core';
import Draggable from '@telerik/kendo-draggable';
/**
 * @hidden
 */
export var KendoDraggableDirective = (function () {
    function KendoDraggableDirective(ngEl) {
        var _this = this;
        this.kendo = {
            drag: new EventEmitter(),
            press: new EventEmitter(),
            release: new EventEmitter()
        };
        if (typeof document !== 'undefined') {
            this.draggable = new Draggable({
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
        { type: Directive, args: [{
                    outputs: ['kendo.press', 'kendo.drag', 'kendo.release'],
                    selector: '[kendoDraggable]'
                },] },
    ];
    /** @nocollapse */
    KendoDraggableDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return KendoDraggableDirective;
}());
