import { ElementRef, OnDestroy } from '@angular/core';
/**
 * @hidden
 */
export declare class KendoDraggableDirective implements OnDestroy {
    kendo: any;
    private draggable;
    constructor(ngEl: ElementRef);
    ngOnDestroy(): void;
}
