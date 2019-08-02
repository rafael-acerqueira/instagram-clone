import { all, takeLatest } from 'redux-saga/effects'
import { Types } from '../ducks/post'
import { addPost, getPosts, addComment } from './post'

export default function * rootSaga () {
	yield all([
		takeLatest(Types.ADD_REQUEST, addPost),
		takeLatest(Types.FETCH_REQUEST, getPosts),
		takeLatest(Types.ADD_COMMENT_REQUEST, addComment)
	])
}
