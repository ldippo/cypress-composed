"use strict";
/// <reference types="cypress" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyupCommands = exports.keypressCommands = exports.keydownCommands = exports.keyholdCommands = void 0;
var keycode = __importStar(require("keycode-js"));
var keyPressFactory = function (eventName) { return Object(keycode).entries().reduce(function (acc, _a) {
    var _b;
    var key = _a[0], keyCode = _a[1];
    return (__assign(__assign({}, acc), (_b = {}, _b[key] = function () { return cy.get('body').trigger(eventName, { keyCode: keyCode }); }, _b)));
}, {}); };
exports.keyholdCommands = Object(keycode).entries().reduce(function (acc, _a) {
    var _b;
    var key = _a[0], keyCode = _a[1];
    return (__assign(__assign({}, acc), (_b = {}, _b[key] = function (waitDuration) {
        cy.get('body').trigger('keydown', { keyCode: keyCode });
        cy.wait(waitDuration);
        cy.get('body').trigger('keyup', { keyCode: keyCode, release: false });
    }, _b)));
}, {});
exports.keydownCommands = keyPressFactory('keydown');
exports.keypressCommands = keyPressFactory('keypress');
exports.keyupCommands = keyPressFactory('keyup');
