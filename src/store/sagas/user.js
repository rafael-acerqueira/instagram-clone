import { call } from 'redux-saga/effects'
import { Alert } from 'react-native'
import auth, { API_KEY } from '../../services/auth'
import api from '../../services/api'

export function * addUser (action) {
	try {
		const { name, email, password } = action.payload.user
		const { data } = yield call(auth.post, `/signupNewUser?key=${API_KEY}`, {
			email,
			password,
			returnSecureToken: true
		})

		if (data.localId) {
			yield call(api.put, `/users/${data.localId}.json`, { name })
		}
	} catch (error) {
		Alert.alert(
			'Tente Novamente!',
			'Ocorreu algum problema ao tentar registrar um usuário'
		)
	}
}
