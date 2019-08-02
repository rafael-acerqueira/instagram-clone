export const Types = {
	LOGGED_IN: 'users:LOGGED_IN',
	LOGGED_OUT: 'users:LOGGED_OUT'
}

const INITIAL_STATE = {
	name: '',
	email: ''
}

export default function user (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.LOGGED_IN:
		return {
			...state,
			name: action.payload.user.name,
			email: action.payload.user.email
		}
	case Types.LOGGED_OUT:
		return { ...state, name: '', email: '' }
	default:
		return state
	}
}

export const Creators = {
	login: user => ({
		type: Types.LOGGED_IN,
		payload: {
			user
		}
	}),

	logout: () => ({
		type: Types.LOGGED_OUT
	})
}
