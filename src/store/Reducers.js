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
                filledBoxes: state.filledBoxes.filter(it => it.box !== payload)
            };

        default:
            return state;
    }
}

export default reducers