export const Types = {
	SET: 'message:SET'
}

const INITIAL_STATE = {
	title: '',
	text: ''
}

export default function message (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.SET:
		return { ...state, ...action.payload }

	default:
		return state
	}
}

export const Creators = {
	set: (title, text) => ({
		type: Types.SET,
		payload: { title, text }
	})
}
