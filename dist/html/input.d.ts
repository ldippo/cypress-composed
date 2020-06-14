/// <reference types="cypress" />
import { clickInput, focusInput, getInput } from './util';
export declare function enterInput(id: string, message: string): void;
export declare function validateInputContents(id: string, expected: string): Cypress.Chainable<unknown>;
export { clickInput, focusInput, getInput };
