export const Types = {
	ADD: 'POST:ADD'
}

const INITIAL_STATE = {
	data: [
		{
			id: Math.random(),
			nickname: 'Rafael',
			email: 'teste@dasda.com',
			image: require('../../../assets/imgs/gate.jpg'),
			comments: [
				{
					nickname: 'Jonh',
					comment: 'MAssa vu'
				},
				{
					nickname: 'Vó',
					comment: 'Bonitao'
				}
			]
		},
		{
			id: Math.random(),
			nickname: 'José',
			email: 'jose@dasda.com',
			image: require('../../../assets/imgs/bw.jpg'),
			comments: []
		}
	]
}

export default function post (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.ADD:
		return { ...state, data: [...state.data, action.payload.post] }
	default:
		return state
	}
}

export const Creators = {
	add: post => ({
		type: Types.ADD,
		payload: { post }
	})
}
