"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyThroughSelect = exports.selectSelect = void 0;
var util_1 = require("./util");
var keyPress_1 = require("../global/keyPress");
function selectSelect(id, itemToSelect) {
    var el = util_1.getSelect(id);
    el.select(itemToSelect);
}
exports.selectSelect = selectSelect;
function keyThroughSelect(id, n) {
    util_1.focusSelect(id);
    for (var i = 0; i <= n; i++) {
        keyPress_1.keypressCommands("select[data-test-id=\"" + id + "\"]").KEY_DOWN();
        cy.wait(50);
    }
}
exports.keyThroughSelect = keyThroughSelect;
