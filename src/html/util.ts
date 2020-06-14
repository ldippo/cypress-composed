/// <reference types="cypress" />

type ElementTypes = 'div' | 'button' | 'input' | 'select' | 'a' |'span' | 'ol' |'ul' |'li' |'radio'
const elementList: ElementTypes[] = ["div", "button", "input", "select", "a", "span", "ol", "ul", "li", "radio"];
const testAttribute = process.env.TEST_ATTRBUTE || 'data-test-id'
const getFactory = (el: string) => (id: string) => cy.get(`${el}[${testAttribute}="${id}"]`)
type GetFunc = (id: string) => ReturnType<typeof cy.get>
type GetCommands = { [K in ElementTypes]: GetFunc }
const getCommands: GetCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: getFactory(el)
}), {} as GetCommands);

export const {  
    div: getDiv,
    button: getButton,
    input: getInput,
    select: getSelect,
    a: getLink,
    span: getSpan,
    ol: getOrderedList,
    ul: getUnorderedList,
    li: getListItem,
    radio: getRadioButton 
} = getCommands;


const clickFactory = (getFunc: GetFunc) => (id: string) => getFunc(id).click()
type ClickCommands = { [K in ElementTypes]: (id: string) => Cypress.Chainable };
const clickCommands: ClickCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: clickFactory(getCommands[el])
}), {} as ClickCommands);

export const {  
    div: clickDiv,
    button: clickButton,
    input: clickInput,
    select: clickSelect,
    a: clickLink,
    span: clickSpan,
    ol: clickOrderedList,
    ul: clickUnorderedList,
    li: clickListItem,
    radio: clickRadioButton 
} = clickCommands;

const rightClickFactory = (getFunc: GetFunc) => (id: string) => getFunc(id).rightclick()
type RightClickCommands = { [K in ElementTypes]: (id: string) => Cypress.Chainable };
const rightClickCommands: RightClickCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: rightClickFactory(getCommands[el])
}), {} as RightClickCommands);

export const {  
    div: rightClickDiv,
    button: rightClickButton,
    input: rightClickInput,
    select: rightClickSelect,
    a: rightClickLink,
    span: rightClickSpan,
    ol: rightClickOrderedList,
    ul: rightClickUnorderedList,
    li: rightClickListItem,
    radio: rightClickRadioButton 
} = rightClickCommands;

const doubleClickFactory = (getFunc: GetFunc) => (id: string) => getFunc(id).dblclick()
type DoubleClickCommands = { [K in ElementTypes]: (id: string) => Cypress.Chainable };
const doubleClickCommands: DoubleClickCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: doubleClickFactory(getCommands[el])
}), {} as DoubleClickCommands);

export const {  
    div: doubleClickDiv,
    button: doubleClickButton,
    input: doubleClickInput,
    select: doubleClickSelect,
    a: doubleClickLink,
    span: doubleClickSpan,
    ol: doubleClickOrderedList,
    ul: doubleClickUnorderedList,
    li: doubleClickListItem,
    radio: doubleClickRadioButton 
} = doubleClickCommands;


const focusFactory = (getFunc: GetFunc) => (id: string) => getFunc(id).focus()
type FocusCommands = { [K in ElementTypes]: (id: string) => Cypress.Chainable };
const focusCommands: FocusCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: focusFactory(getCommands[el])
}), {} as FocusCommands);

export const {  
    div: focusDiv,
    button: focusButton,
    input: focusInput,
    select: focusSelect,
    a: focusLink,
    span: focusSpan,
    ol: focusOrderedList,
    ul: focusUnorderedList,
    li: focusListItem,
    radio: focusRadioButton 
} = focusCommands;

const blurFactory = (getFunc: GetFunc) => (id: string) => getFunc(id).blur()
type BlurCommands = { [K in ElementTypes]: (id: string) => Cypress.Chainable };
const blurCommands: BlurCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: blurFactory(getCommands[el])
}), {} as BlurCommands);

export const {  
    div: blurDiv,
    button: blurButton,
    input: blurInput,
    select: blurSelect,
    a: blurLink,
    span: blurSpan,
    ol: blurOrderedList,
    ul: blurUnorderedList,
    li: blurListItem,
    radio: blurRadioButton 
} = blurCommands;

const elementContainsFactory = (getFunc: GetFunc) => (id: string, content: string | number | RegExp) => getFunc(id).contains(content)
type ElementContainsCommands = { [K in ElementTypes]: (id: string) => Cypress.Chainable };
const elementContainsCommands: ElementContainsCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: elementContainsFactory(getCommands[el])
}), {} as ElementContainsCommands);

export const {  
    div: elementContainsDiv,
    button: elementContainsButton,
    input: elementContainsInput,
    select: elementContainsSelect,
    a: elementContainsLink,
    span: elementContainsSpan,
    ol: elementContainsOrderedList,
    ul: elementContainsUnorderedList,
    li: elementContainsListItem,
    radio: elementContainsRadioButton 
} = elementContainsCommands;

const parentContainsFactory = (getFunc: GetFunc) => (id: string, content: string | number | RegExp) => getFunc(id).parent().contains(content)

const parentContainsCommands: ElementContainsCommands = elementList.reduce((getMap, el) => ({ 
    ...getMap, 
    [el]: parentContainsFactory(getCommands[el])
}), {} as ElementContainsCommands);

export const {  
    div: parentContainsDiv,
    button: parentContainsButton,
    input: parentContainsInput,
    select: parentContainsSelect,
    a: parentContainsLink,
    span: parentContainsSpan,
    ol: parentContainsOrderedList,
    ul: parentContainsUnorderedList,
    li: parentContainsListItem,
    radio: parentContainsRadioButton 
} = elementContainsCommands;

