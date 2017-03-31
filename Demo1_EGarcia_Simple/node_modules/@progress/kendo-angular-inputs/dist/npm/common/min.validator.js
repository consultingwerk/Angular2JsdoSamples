"use strict";
/**
 * @hidden
 */
exports.createMinValidator = function (minValue) {
    return function (c) {
        var err = {
            minError: {
                minValue: minValue,
                value: c.value
            }
        };
        return (c.value < minValue) ? err : null;
    };
};
