import { types } from "./types"

function preloaderOn() {
    return {
        type: types.PRELOADER_ON
    }
}

function preloaderOff() {
    return {
        type: types.PRELOADER_OFF
    }
}

export function addUserAction(user) {
    return async function (dispatch) {

        dispatch(preloaderOn())

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        const responce = await fetch('https://httpbin.org/post', options)

        if (responce.status >= 200 || responce.status <= 204) {
            dispatch(preloaderOff())
        }
        else if (responce.status === 404) {
            dispatch(preloaderOff())
        }

    }
}