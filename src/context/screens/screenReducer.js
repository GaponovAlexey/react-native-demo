import { CHANGE_SCREEN } from "../todo/type"

const handlers = {
	[CHANGE_SCREEN]: (state, payload) => payload,
	DEFALULT: state => state
}

export const screenReducer = (state, action) => {
	const handler = handlers[action, type] || handlers.DEFALULT
	return handler(state, action.payload)
}