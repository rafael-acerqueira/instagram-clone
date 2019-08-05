import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Navigator from './Navigator'
import { Creators as MessageActions } from './store/ducks/message'

export default () => {
	const { title, text } = useSelector(state => state.message)
	const dispatch = useDispatch()
	useEffect(() => {
		if (!!text && !!title) {
			Alert.alert(title, text)
			dispatch(MessageActions.set('', ''))
		}
	}, [title, text])

	return <Navigator />
}
