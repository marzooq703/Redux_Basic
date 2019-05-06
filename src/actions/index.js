export const ADD_CHARECTER = 'ADD-CHARECTER';
export const REMOVE_CHARECTER = 'REMOVE-CHARECTER';

export function addCharecterById(id) {
    const action = {
        type: ADD_CHARECTER,
        id
    }
    return action;
}

export function removeCharecterById(id) {
    const action = {
        type: REMOVE_CHARECTER,
        id
    }
    return action;
}