import { call, put } from 'redux-saga/effects'
import { Alert } from 'react-native'
import api from '../../services/api'

import { Creators as PostActions } from '../ducks/post'

export function * addPost (action) {
	try {
		const { config } = yield call(api.post, '/posts.json', action.payload.post)
		const post = JSON.parse(config.data)

		yield put(PostActions.addSuccess(post))
	} catch (error) {
		Alert.alert(
			'Tente Novamente!',
			'Ocorreu algum problema ao tentar adicionar um post'
		)
	}
}
