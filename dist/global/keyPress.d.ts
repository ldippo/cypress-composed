/// <reference types="cypress" />
import { Keys } from './keycodes';
declare type KeyPressEventMap = {
    [K in Keys]: () => Cypress.Chainable;
};
export declare const keyholdCommands: KeyPressEventMap;
export declare const keydownCommands: KeyPressEventMap;
export declare const keypressCommands: KeyPressEventMap;
export declare const keyupCommands: KeyPressEventMap;
export {};
