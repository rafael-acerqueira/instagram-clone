import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const Container = styled.View`
	margin-top: ${Platform.OS === 'ios' ? 20 : 0};
	padding: 10px;
	border-bottom-width: 1;
	border-color: #bbb;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`
export const RowContainer = styled.View`
	flex-direction: row;
	align-items: center;
`
export const Image = styled.Image`
	height: 30px;
	width: 30px;
`

export const Title = styled.Text`
	color: #000;
	font-family: 'shelter';
	height: 30px;
	font-size: 28px;
`
