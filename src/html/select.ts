import { getSelect, focusSelect } from './util'
import {keypressCommands} from '../global/keyPress'
export function selectSelect(id: string, itemToSelect: string) {
    const el = getSelect(id);
    el.select(itemToSelect)
} 

export function keyThroughSelect(id: string, n: number) {
    focusSelect(id);
    for(let i = 0; i <= n; i++) {
        keypressCommands(`select[data-test-id="${id}"]`).KEY_DOWN()
        cy.wait(50)
    }
}