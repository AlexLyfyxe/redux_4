import { types } from "./types"

const initialTitle = {
    preloader: false
}

export default function formReducer(state = initialTitle, action) {


    if (action.type === types.PRELOADER_ON) {
        return { ...state, preloader: true }
    }
    else if (action.type === types.PRELOADER_OFF) {
        return { ...state, preloader: false }
    }


    return state
}