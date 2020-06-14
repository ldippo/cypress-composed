import { getSelect, focusSelect } from './util'

export function selectSelect(id: string, itemToSelect: string) {
    const el = getSelect(id);
    el.select(itemToSelect)
} 

export function keyThroughSelect(id: string) {
    const el = focusSelect(id);


}