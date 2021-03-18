import { ACTIONS } from './Actions'


const reducers = (state, action) => {
    const { type, payload } = action
    switch(type){
        case ACTIONS.SET_TURN:
            return {
                ...state,
                xturn: payload
            };
        case ACTIONS.SET_WON:
            return {
                ...state,
                won: payload
            };

        case ACTIONS.SET_GAMEOVER:
            return {
                ...state,
                gameOver: payload
            };
        case ACTIONS.ADD_FILLED_BOXES:
            return {
                ...state,
                filledBoxes: [payload, ...state.filledBoxes]
            };
        case ACTIONS.REMOVE_BOX:
            return {
                ...state,
                filledBoxes: state.filledBoxes.filter(it => it.box !== payload.box),
                removed: payload
            };
        case ACTIONS.SET_RESTART:
            return {
                ...state,
                restart: false
            };
        case ACTIONS.RESTART:
            return {
                xturn: false, 
                won: null, 
                gameOver: false, 
                filledBoxes: [],
                removed: {},
                restart: true
            };

        default:
            return state;
    }
}

export default reducers