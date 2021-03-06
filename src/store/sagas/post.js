import { call, put, select } from 'redux-saga/effects'
import api from '../../services/api'
import firebase from '../../services/firebase'

import { Creators as PostActions } from '../ducks/post'
import { Creators as MessageActions } from '../ducks/message'

export function * addPost (action) {
	const { post } = action.payload

	try {
		const token = yield select(state => state.user.token)

		const { data } = yield call(firebase.post, '/uploadImage', {
			image: post.image.base64
		})

		post.image = data.imageUrl

		const { config } = yield call(api.post, `/posts.json?auth=${token}`, post)
		const postData = JSON.parse(config.data)

		yield put(PostActions.addSuccess(postData))
	} catch (error) {
		yield put(
			MessageActions.set(
				'Erro',
				'Ocorreu algum problema ao tentar adicionar um post'
			)
		)
	}
}

export function * getPosts () {
	try {
		const posts = []
		const { data } = yield call(api.get, '/posts.json')

		for (let key in data) {
			posts.push({
				...data[key],
				id: key
			})
		}
		yield put(PostActions.fetchSuccess(posts.reverse()))
	} catch (error) {
		yield put(
			MessageActions.set(
				'Erro',
				'Ocorreu algum problema ao tentar exibir os posts'
			)
		)
	}
}

export function * addComment (action) {
	try {
		const token = yield select(state => state.user.token)
		const { data } = yield call(api.get, `/posts/${action.payload.postId}.json`)
		const comments = data.comments || []
		comments.push(action.payload.comment)

		yield call(
			api.patch,
			`/posts/${action.payload.postId}.json?auth=${token}`,
			{ comments }
		)
		yield put(PostActions.addCommentSuccess(comments, action.payload.postId))
	} catch (error) {
		yield put(
			MessageActions.set(
				'Erro',
				'Ocorreu algum problema ao tentar adicionar um comentário nessse post'
			)
		)
	}
}
