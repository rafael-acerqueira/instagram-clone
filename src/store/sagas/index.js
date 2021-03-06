import { all, takeLatest } from 'redux-saga/effects'
import { Types as PostTypes } from '../ducks/post'
import { Types as UserTypes } from '../ducks/user'
import { addPost, getPosts, addComment } from './post'
import { addUser, loginUser } from './user'

export default function * rootSaga () {
	yield all([
		takeLatest(PostTypes.ADD_REQUEST, addPost),
		takeLatest(PostTypes.FETCH_REQUEST, getPosts),
		takeLatest(PostTypes.ADD_COMMENT_REQUEST, addComment),
		takeLatest(UserTypes.REGISTER_REQUEST, addUser),
		takeLatest(UserTypes.LOGIN_REQUEST, loginUser)
	])
}
