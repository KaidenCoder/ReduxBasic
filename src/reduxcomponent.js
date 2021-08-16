import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"

export function starwarsdetail() {
    return (dispatch, getState) => {
        const number = Math.floor(Math.random() * 81) + 1
        const url = "https://swapi.dev/api/people/" + number + "/"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type: "STAR_WARS",
                    payload: data
                })
            })
    }
}


export function getrandomjoke() {
    return (dispatch, getState) => {
        const url = "https://official-joke-api.appspot.com/random_joke"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch({
                    type: "RANDOM_JOKE",
                    payload: data
                })
            })
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "STAR_WARS":
            return action.payload
        case "RANDOM_JOKE":
            return action.payload
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store