export const Types = {
	ADD: 'POST:ADD',
	COMMENT: 'POST:COMMENT'
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
	case Types.COMMENT:
		return {
			...state,
			data: state.data.map(post => {
				if (post.id === action.payload.postId) {
					if (post.comments) {
						post.comments = post.comments.concat(action.payload.comment)
					} else {
						post.comments = [action.payload.comment]
					}
				}
				return post
			})
		}
	default:
		return state
	}
}

export const Creators = {
	add: post => ({
		type: Types.ADD,
		payload: { post }
	}),
	comment: (comment, postId) => ({
		type: Types.COMMENT,
		payload: { comment, postId }
	})
}
