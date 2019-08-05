export const Types = {
	LOGGED_OUT: 'users:LOGGED_OUT',
	REGISTER_REQUEST: 'users:REGISTER_REQUEST',
	REGISTER_SUCCESS: 'users:REGISTER_SUCCESS',
	LOGIN_REQUEST: 'users:LOGIN_REQUEST',
	LOGIN_SUCCESS: 'users:LOGIN_SUCCESS'
}

const INITIAL_STATE = {
	name: '',
	email: '',
	isLoading: false
}

export default function user (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.LOGIN_SUCCESS:
		return {
			...state,
			name: action.payload.user.name,
			email: action.payload.user.email,
			isLoading: false
		}
	case Types.LOGIN_REQUEST:
		return { ...state, isLoading: true }
	case Types.LOGGED_OUT:
		return { ...state, name: '', email: '' }
	case Types.REGISTER_REQUEST:
		return { ...state, isLoading: true }
	default:
		return state
	}
}

export const Creators = {
	loginSuccess: user => ({
		type: Types.LOGIN_SUCCESS,
		payload: {
			user
		}
	}),
	loginRequest: user => ({
		type: Types.LOGIN_REQUEST,
		payload: { user }
	}),
	logout: () => ({
		type: Types.LOGGED_OUT
	}),
	registerRequest: user => ({
		type: Types.REGISTER_REQUEST,
		payload: { user }
	})
}
