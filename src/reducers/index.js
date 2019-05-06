import { combineReducers } from 'redux';
import charecters_json from '../data/characters.json';
import { ADD_CHARECTER, REMOVE_CHARECTER } from '../actions';

function charecters(state = charecters_json, action) {
    switch (action.type) {
        case ADD_CHARECTER:
            let charecters = state.filter(item => item.id !== action.id);
            return charecters;
        case REMOVE_CHARECTER:
            let heroes = state.filter(item => item.id !== action.id);
            return heroes;
        default:
            return state;
    }
}

function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARECTER:
            let heroes = [...state, createCharecter(action.id)];
            return heroes;
        default:
            return state;
    }
}

function createCharecter(id) {
    let charecter = charecters_json.find(c => c.id === id);
    return charecter;
}

const rootReducer = combineReducers({
    charecters,
    heroes
})
export default rootReducer;