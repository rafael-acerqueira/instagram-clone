import { all, takeLatest } from 'redux-saga/effects'
import { Types } from '../ducks/post'
import { addPost } from './post'

export default function * rootSaga () {
	yield all([takeLatest(Types.ADD_REQUEST, addPost)])
}
