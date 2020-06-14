/// <reference types="cypress" />
export declare type Keys = 'KEY_CANCEL' | 'KEY_HELP' | 'KEY_BACK_SPACE' | 'KEY_TAB' | 'KEY_CLEAR' | 'KEY_RETURN' | 'KEY_SHIFT' | 'KEY_CONTROL' | 'KEY_ALT' | 'KEY_PAUSE' | 'KEY_CAPS_LOCK' | 'KEY_ESCAPE' | 'KEY_SPACE' | 'KEY_PAGE_UP' | 'KEY_PAGE_DOWN' | 'KEY_END' | 'KEY_HOME' | 'KEY_LEFT' | 'KEY_UP' | 'KEY_RIGHT' | 'KEY_DOWN' | 'KEY_PRINTSCREEN' | 'KEY_INSERT' | 'KEY_DELETE' | 'KEY_0' | 'KEY_1' | 'KEY_2' | 'KEY_3' | 'KEY_4' | 'KEY_5' | 'KEY_6' | 'KEY_7' | 'KEY_8' | 'KEY_9' | 'KEY_A' | 'KEY_B' | 'KEY_C' | 'KEY_D' | 'KEY_E' | 'KEY_F' | 'KEY_G' | 'KEY_H' | 'KEY_I' | 'KEY_J' | 'KEY_K' | 'KEY_L' | 'KEY_M' | 'KEY_N' | 'KEY_O' | 'KEY_P' | 'KEY_Q' | 'KEY_R' | 'KEY_S' | 'KEY_T' | 'KEY_U' | 'KEY_V' | 'KEY_W' | 'KEY_X' | 'KEY_Y' | 'KEY_Z' | 'KEY_LEFT_CMD' | 'KEY_RIGHT_CMD' | 'KEY_CONTEXT_MENU' | 'KEY_NUMPAD0' | 'KEY_NUMPAD1' | 'KEY_NUMPAD2' | 'KEY_NUMPAD3' | 'KEY_NUMPAD4' | 'KEY_NUMPAD5' | 'KEY_NUMPAD6' | 'KEY_NUMPAD7' | 'KEY_NUMPAD8' | 'KEY_NUMPAD9' | 'KEY_MULTIPLY' | 'KEY_ADD' | 'KEY_SUBTRACT' | 'KEY_DECIMAL' | 'KEY_DIVIDE' | 'KEY_F1' | 'KEY_F2' | 'KEY_F3' | 'KEY_F4' | 'KEY_F5' | 'KEY_F6' | 'KEY_F7' | 'KEY_F8' | 'KEY_F9' | 'KEY_F10' | 'KEY_F11' | 'KEY_F12' | 'KEY_F13' | 'KEY_F14' | 'KEY_F15' | 'KEY_F16' | 'KEY_F17' | 'KEY_F18' | 'KEY_F19' | 'KEY_F20' | 'KEY_F21' | 'KEY_F22' | 'KEY_F23' | 'KEY_F24' | 'KEY_NUM_LOCK' | 'KEY_SCROLL_LOCK' | 'KEY_SEMICOLON' | 'KEY_EQUALS' | 'KEY_COMMA' | 'KEY_DASH' | 'KEY_PERIOD' | 'KEY_SLASH' | 'KEY_BACK_QUOTE' | 'KEY_OPEN_BRACKET' | 'KEY_BACK_SLASH' | 'KEY_CLOSE_BRACKET' | 'KEY_QUOTE' | 'KEY_FIREFOX_ENTER' | 'KEY_FIREFOX_SEMICOLON' | 'KEY_FIREFOX_EQUALS' | 'KEY_FIREFOX_SEPARATOR' | 'KEY_FIREFOX_META';
declare type KeyPressEventMap = {
    [K in Keys]: () => Cypress.Chainable;
};
export declare const keyholdCommands: KeyPressEventMap;
export declare const keydownCommands: KeyPressEventMap;
export declare const keypressCommands: KeyPressEventMap;
export declare const keyupCommands: KeyPressEventMap;
export {};
