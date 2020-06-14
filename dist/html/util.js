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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parentContainsRadioButton = exports.parentContainsListItem = exports.parentContainsUnorderedList = exports.parentContainsOrderedList = exports.parentContainsSpan = exports.parentContainsLink = exports.parentContainsSelect = exports.parentContainsInput = exports.parentContainsButton = exports.parentContainsDiv = exports.elementContainsRadioButton = exports.elementContainsListItem = exports.elementContainsUnorderedList = exports.elementContainsOrderedList = exports.elementContainsSpan = exports.elementContainsLink = exports.elementContainsSelect = exports.elementContainsInput = exports.elementContainsButton = exports.elementContainsDiv = exports.blurRadioButton = exports.blurListItem = exports.blurUnorderedList = exports.blurOrderedList = exports.blurSpan = exports.blurLink = exports.blurSelect = exports.blurInput = exports.blurButton = exports.blurDiv = exports.focusRadioButton = exports.focusListItem = exports.focusUnorderedList = exports.focusOrderedList = exports.focusSpan = exports.focusLink = exports.focusSelect = exports.focusInput = exports.focusButton = exports.focusDiv = exports.doubleClickRadioButton = exports.doubleClickListItem = exports.doubleClickUnorderedList = exports.doubleClickOrderedList = exports.doubleClickSpan = exports.doubleClickLink = exports.doubleClickSelect = exports.doubleClickInput = exports.doubleClickButton = exports.doubleClickDiv = exports.rightClickRadioButton = exports.rightClickListItem = exports.rightClickUnorderedList = exports.rightClickOrderedList = exports.rightClickSpan = exports.rightClickLink = exports.rightClickSelect = exports.rightClickInput = exports.rightClickButton = exports.rightClickDiv = exports.clickRadioButton = exports.clickListItem = exports.clickUnorderedList = exports.clickOrderedList = exports.clickSpan = exports.clickLink = exports.clickSelect = exports.clickInput = exports.clickButton = exports.clickDiv = exports.getRadioButton = exports.getListItem = exports.getUnorderedList = exports.getOrderedList = exports.getSpan = exports.getLink = exports.getSelect = exports.getInput = exports.getButton = exports.getDiv = void 0;
var elementList = ["div", "button", "input", "select", "a", "span", "ol", "ul", "li", "radio"];
var testAttribute = process.env.TEST_ATTRBUTE || 'data-test-id';
var getFactory = function (el) { return function (id) { return cy.get(el + "[" + testAttribute + "=\"" + id + "\"]"); }; };
var getCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = getFactory(el), _a)));
}, {});
exports.getDiv = getCommands.div, exports.getButton = getCommands.button, exports.getInput = getCommands.input, exports.getSelect = getCommands.select, exports.getLink = getCommands.a, exports.getSpan = getCommands.span, exports.getOrderedList = getCommands.ol, exports.getUnorderedList = getCommands.ul, exports.getListItem = getCommands.li, exports.getRadioButton = getCommands.radio;
var clickFactory = function (getFunc) { return function (id) { return getFunc(id).click(); }; };
var clickCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = clickFactory(getCommands[el]), _a)));
}, {});
exports.clickDiv = clickCommands.div, exports.clickButton = clickCommands.button, exports.clickInput = clickCommands.input, exports.clickSelect = clickCommands.select, exports.clickLink = clickCommands.a, exports.clickSpan = clickCommands.span, exports.clickOrderedList = clickCommands.ol, exports.clickUnorderedList = clickCommands.ul, exports.clickListItem = clickCommands.li, exports.clickRadioButton = clickCommands.radio;
var rightClickFactory = function (getFunc) { return function (id) { return getFunc(id).rightclick(); }; };
var rightClickCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = rightClickFactory(getCommands[el]), _a)));
}, {});
exports.rightClickDiv = rightClickCommands.div, exports.rightClickButton = rightClickCommands.button, exports.rightClickInput = rightClickCommands.input, exports.rightClickSelect = rightClickCommands.select, exports.rightClickLink = rightClickCommands.a, exports.rightClickSpan = rightClickCommands.span, exports.rightClickOrderedList = rightClickCommands.ol, exports.rightClickUnorderedList = rightClickCommands.ul, exports.rightClickListItem = rightClickCommands.li, exports.rightClickRadioButton = rightClickCommands.radio;
var doubleClickFactory = function (getFunc) { return function (id) { return getFunc(id).dblclick(); }; };
var doubleClickCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = doubleClickFactory(getCommands[el]), _a)));
}, {});
exports.doubleClickDiv = doubleClickCommands.div, exports.doubleClickButton = doubleClickCommands.button, exports.doubleClickInput = doubleClickCommands.input, exports.doubleClickSelect = doubleClickCommands.select, exports.doubleClickLink = doubleClickCommands.a, exports.doubleClickSpan = doubleClickCommands.span, exports.doubleClickOrderedList = doubleClickCommands.ol, exports.doubleClickUnorderedList = doubleClickCommands.ul, exports.doubleClickListItem = doubleClickCommands.li, exports.doubleClickRadioButton = doubleClickCommands.radio;
var focusFactory = function (getFunc) { return function (id) { return getFunc(id).focus(); }; };
var focusCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = focusFactory(getCommands[el]), _a)));
}, {});
exports.focusDiv = focusCommands.div, exports.focusButton = focusCommands.button, exports.focusInput = focusCommands.input, exports.focusSelect = focusCommands.select, exports.focusLink = focusCommands.a, exports.focusSpan = focusCommands.span, exports.focusOrderedList = focusCommands.ol, exports.focusUnorderedList = focusCommands.ul, exports.focusListItem = focusCommands.li, exports.focusRadioButton = focusCommands.radio;
var blurFactory = function (getFunc) { return function (id) { return getFunc(id).blur(); }; };
var blurCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = blurFactory(getCommands[el]), _a)));
}, {});
exports.blurDiv = blurCommands.div, exports.blurButton = blurCommands.button, exports.blurInput = blurCommands.input, exports.blurSelect = blurCommands.select, exports.blurLink = blurCommands.a, exports.blurSpan = blurCommands.span, exports.blurOrderedList = blurCommands.ol, exports.blurUnorderedList = blurCommands.ul, exports.blurListItem = blurCommands.li, exports.blurRadioButton = blurCommands.radio;
var elementContainsFactory = function (getFunc) { return function (id, content) { return getFunc(id).contains(content); }; };
var elementContainsCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = elementContainsFactory(getCommands[el]), _a)));
}, {});
exports.elementContainsDiv = elementContainsCommands.div, exports.elementContainsButton = elementContainsCommands.button, exports.elementContainsInput = elementContainsCommands.input, exports.elementContainsSelect = elementContainsCommands.select, exports.elementContainsLink = elementContainsCommands.a, exports.elementContainsSpan = elementContainsCommands.span, exports.elementContainsOrderedList = elementContainsCommands.ol, exports.elementContainsUnorderedList = elementContainsCommands.ul, exports.elementContainsListItem = elementContainsCommands.li, exports.elementContainsRadioButton = elementContainsCommands.radio;
var parentContainsFactory = function (getFunc) { return function (id, content) { return getFunc(id).parent().contains(content); }; };
var parentContainsCommands = elementList.reduce(function (getMap, el) {
    var _a;
    return (__assign(__assign({}, getMap), (_a = {}, _a[el] = parentContainsFactory(getCommands[el]), _a)));
}, {});
exports.parentContainsDiv = elementContainsCommands.div, exports.parentContainsButton = elementContainsCommands.button, exports.parentContainsInput = elementContainsCommands.input, exports.parentContainsSelect = elementContainsCommands.select, exports.parentContainsLink = elementContainsCommands.a, exports.parentContainsSpan = elementContainsCommands.span, exports.parentContainsOrderedList = elementContainsCommands.ol, exports.parentContainsUnorderedList = elementContainsCommands.ul, exports.parentContainsListItem = elementContainsCommands.li, exports.parentContainsRadioButton = elementContainsCommands.radio;
