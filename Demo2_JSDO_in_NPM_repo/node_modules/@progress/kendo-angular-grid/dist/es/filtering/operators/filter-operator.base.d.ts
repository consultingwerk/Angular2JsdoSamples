/**
 * @hidden
 */
export declare const toJSON: (xs: FilterOperatorBase[]) => {
    text: string;
    value: string;
}[];
/**
 * @hidden
 */
export declare class FilterOperatorBase {
    protected operator: string;
    /**
     * The text to be displayed in the DropDownList.
     * @readonly
     * @type {string}
     * @memberOf FilterOperatorBase
     */
    /**
     *
     */
    text: string;
    private _text;
    constructor(operator: string);
    /**
     * @hidden
     */
    toJSON(): {
        text: string;
        value: string;
    };
}
