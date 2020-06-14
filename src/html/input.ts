import { clickInput, focusInput, getInput } from './util'

export function enterInput(id: string, message: string) {
    const input = getInput(id);
    input.clear()
    input.type(message)
}

export function validateInputContents(id: string, expected: string) {
    const input = getInput(id);
    return input.contains(expected);
}

export { clickInput, focusInput, getInput }