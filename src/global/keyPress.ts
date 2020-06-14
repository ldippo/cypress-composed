/// <reference types="cypress" />

import * as keycode from 'keycode-js'
import { Keys } from './keycodes'

type KeyPressEventMap = { [K in Keys]: () => Cypress.Chainable }
const keyPressFactory = (eventName: string) => (Object.entries(keycode) as [keyof Keys, string][]).reduce((acc, [key, keyCode]) => ({
    ...acc,
    [key]: () => cy.get('body').trigger(eventName, { keyCode })
}), {} as KeyPressEventMap);

export const keyholdCommands = (Object.entries(keycode) as [keyof Keys, string][]).reduce((acc, [key, keyCode]) => ({
    ...acc,
    [key]: (waitDuration: number) => {
        cy.get('body').trigger('keydown', { keyCode });
        cy.wait(waitDuration)
        cy.get('body').trigger('keyup', { keyCode, release: false });
    }
}), {} as KeyPressEventMap);


export const keydownCommands = keyPressFactory('keydown');
export const keypressCommands = keyPressFactory('keypress');
export const keyupCommands = keyPressFactory('keyup');
