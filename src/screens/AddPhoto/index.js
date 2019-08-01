import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import { Creators as PostActions } from '../../store/ducks/post'

import {
	Container,
	Title,
	ImageContainer,
	Image,
	Button,
	ButtonText,
	Input
} from './styles'

export default props => {
	const [image, setImage] = useState()
	const [comment, setComment] = useState('')
	const dispatch = useDispatch()
	const { name, email } = useSelector(state => state.user)

	const pickImage = () => {
		ImagePicker.showImagePicker(
			{
				title: 'Escolha a imagem',
				maxHeight: 600,
				maxWidth: 800
			},
			res => {
				if (!res.didCancel) {
					setImage({ uri: res.uri, base64: res.data })
				}
			}
		)
	}

	const save = async () => {
		dispatch(
			PostActions.add({
				id: Math.random(),
				nickname: name,
				email,
				image,
				comments: [
					{
						nickname: name,
						comment
					}
				]
			})
		)

		setComment('')
		setImage(null)

		props.navigation.navigate('Feed')
	}

	return (
		<ScrollView>
			<Container>
				<Title>Compartilhe uma imagem</Title>
				<ImageContainer>
					<Image source={image} resizeMode="center" />
				</ImageContainer>
				<Button onPress={pickImage}>
					<ButtonText>Escolha a foto</ButtonText>
				</Button>
				<Input
					placeholder="Algum comentário pra foto?"
					value={comment}
					onChangeText={comment => setComment(comment)}
				/>
				<Button onPress={save}>
					<ButtonText>Salvar</ButtonText>
				</Button>
			</Container>
		</ScrollView>
	)
}
