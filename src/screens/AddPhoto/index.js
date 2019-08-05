import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, Alert } from 'react-native'
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
	const isLoading = useSelector(state => state.post.isLoading)

	useEffect(() => {
		setComment('')
		setImage(null)

		props.navigation.navigate('Feed')
	}, [isLoading])

	const noUser = 'Precisa estar logado para executar essa ação'

	const pickImage = () => {
		if (!name) {
			Alert.alert('Falha', noUser)
			return
		}

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
		if (!name) {
			Alert.alert('Falha', noUser)
			return
		}

		if (!image) {
			Alert.alert('Falha', 'É necessário selecionar uma imagem')
			return
		}

		dispatch(
			PostActions.addRequest({
				id: Math.random(),
				nickname: name,
				email,
				image,
				comments: comment
					? [
						{
							nickname: name,
							comment
						}
					  ]
					: []
			})
		)
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
					editable={!!name}
				/>
				<Button onPress={save} disabled={isLoading} isLoading={isLoading}>
					<ButtonText>Salvar</ButtonText>
				</Button>
			</Container>
		</ScrollView>
	)
}
