import React, { useEffect } from 'react'
import { Container, Image, Header } from './styles'

export default props => {
	useEffect(() => {
		const timer = setTimeout(() => {
			props.navigation.navigate('App')
		}, 2000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<Container>
			<Image
				source={require('../../../assets/imgs/icon.png')}
				resizeMode="contain"
			/>
			<Header>Lambe-Lambe</Header>
		</Container>
	)
}
