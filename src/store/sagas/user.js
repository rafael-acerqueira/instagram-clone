import { call, put } from 'redux-saga/effects'
import auth, { API_KEY } from '../../services/auth'
import api from '../../services/api'

import { Creators as MessageActions } from '../ducks/message'
import { Creators as UserActions } from '../ducks/user'

export function * addUser (action) {
	try {
		const { name, email, password } = action.payload.user
		const { data } = yield call(auth.post, `/signupNewUser?key=${API_KEY}`, {
			email,
			password,
			returnSecureToken: true
		})

		if (data.localId) {
			yield call(api.put, `/users/${data.localId}.json`, {
				name
			})
			yield put(UserActions.loginSuccess({ email, name }))
		}
	} catch (error) {
		yield put(
			MessageActions.set(
				'Erro',
				'Ocorreu algum problema ao tentar registrar um usuário'
			)
		)
	}
}

export function * loginUser (action) {
	try {
		const { email, password } = action.payload.user
		const { data } = yield call(auth.post, `/verifyPassword?key=${API_KEY}`, {
			email,
			password,
			returnSecureToken: true
		})
		if (data.localId) {
			const token = data.idToken
			const response = yield call(api.get, `/users/${data.localId}.json`)
			yield put(
				UserActions.loginSuccess({ email, name: response.data.name, token })
			)
		}
	} catch (error) {
		yield put(
			MessageActions.set(
				'Erro',
				'Ocorreu algum problema ao tentar logar com esse usuário'
			)
		)
	}
}
