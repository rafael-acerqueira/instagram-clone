export const Types = {
	LOGGED_IN: 'users:LOGGED_IN',
	LOGGED_OUT: 'users:LOGGED_OUT',
	ADD_REQUEST: 'users:ADD_REQUEST',
	ADD_SUCCESS: 'users:ADD_SUCCESS'
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
	}),
	addRequest: user => ({
		type: Types.ADD_REQUEST,
		payload: { user }
	}),
	addSuccess: () => ({
		type: Types.ADD_SUCCESS
	})
}
