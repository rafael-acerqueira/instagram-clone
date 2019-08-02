export const Types = {
	ADD_SUCCESS: 'posts:ADD_SUCCESS',
	ADD_REQUEST: 'posts:ADD_REQUEST',
	COMMENT: 'posts:COMMENT',
	FETCH_REQUEST: 'posts: FETCH_REQUEST',
	FETCH_SUCCESS: 'posts:FETCH_SUCCESS'
}

const INITIAL_STATE = {
	data: []
}

export default function post (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.ADD_SUCCESS:
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
	case Types.FETCH_SUCCESS:
		return { ...state, data: state.data.concat(action.payload.posts) }
	default:
		return state
	}
}

export const Creators = {
	addSuccess: post => ({
		type: Types.ADD_SUCCESS,
		payload: { post }
	}),
	addRequest: post => ({
		type: Types.ADD_REQUEST,
		payload: { post }
	}),
	comment: (comment, postId) => ({
		type: Types.COMMENT,
		payload: { comment, postId }
	}),
	fetchRequest: () => ({
		type: Types.FETCH_REQUEST
	}),
	fetchSuccess: posts => ({
		type: Types.FETCH_SUCCESS,
		payload: { posts }
	})
}
