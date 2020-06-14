"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = exports.focusInput = exports.clickInput = exports.validateInputContents = exports.enterInput = void 0;
var util_1 = require("./util");
Object.defineProperty(exports, "clickInput", { enumerable: true, get: function () { return util_1.clickInput; } });
Object.defineProperty(exports, "focusInput", { enumerable: true, get: function () { return util_1.focusInput; } });
Object.defineProperty(exports, "getInput", { enumerable: true, get: function () { return util_1.getInput; } });
function enterInput(id, message) {
    var input = util_1.getInput(id);
    input.clear();
    input.type(message);
}
exports.enterInput = enterInput;
function validateInputContents(id, expected) {
    var input = util_1.getInput(id);
    return input.contains(expected);
}
exports.validateInputContents = validateInputContents;
