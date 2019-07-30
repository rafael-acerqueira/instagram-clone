import React, { useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import ImagePicker from 'react-native-image-picker'

import {
	Container,
	Title,
	ImageContainer,
	Image,
	Button,
	ButtonText,
	Input
} from './styles'

export default () => {
	const [image, setImage] = useState()
	const [comment, setComment] = useState('')

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
		Alert.alert('Imagem Adicionada', comment)
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
