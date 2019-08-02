export const Types = {
	ADD_SUCCESS: 'posts:ADD_SUCCESS',
	ADD_REQUEST: 'posts:ADD_REQUEST',
	ADD_COMMENT_REQUEST: 'posts:ADD_COMMENT_REQUEST',
	ADD_COMMENT_SUCCESS: 'posts:ADD_COMMENT_SUCCESS',
	FETCH_REQUEST: 'posts: FETCH_REQUEST',
	FETCH_SUCCESS: 'posts:FETCH_SUCCESS'
}

const INITIAL_STATE = {
	data: [],
	isLoading: false
}

export default function post (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.ADD_REQUEST:
		return { ...state, isLoading: true }
	case Types.ADD_SUCCESS:
		return {
			...state,
			data: [action.payload.post, ...state.data],
			isLoading: false
		}
	case Types.ADD_COMMENT_SUCCESS:
		return {
			...state,
			data: state.data.map(post => {
				if (post.id === action.payload.postId) {
					post.comments = action.payload.comments
				}
				return post
			})
		}
	case Types.FETCH_REQUEST:
		return { ...state, isLoading: true }
	case Types.FETCH_SUCCESS:
		return {
			...state,
			data: state.data.concat(action.payload.posts),
			isLoading: false
		}

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
	addCommentRequest: (comment, postId) => ({
		type: Types.ADD_COMMENT_REQUEST,
		payload: { comment, postId }
	}),
	addCommentSuccess: (comments, postId) => ({
		type: Types.ADD_COMMENT_SUCCESS,
		payload: { comments, postId }
	}),
	fetchRequest: () => ({
		type: Types.FETCH_REQUEST
	}),
	fetchSuccess: posts => ({
		type: Types.FETCH_SUCCESS,
		payload: { posts }
	})
}
