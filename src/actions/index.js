export const ADD_CHARECTER = 'ADD-CHARECTER';

export function addCharecterById(id) {
    const action = {
        type: ADD_CHARECTER,
        id
    }
    return action;
}