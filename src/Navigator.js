import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'

const MenuRoutes = createBottomTabNavigator(
	{
		Feed: {
			name: 'Feed',
			screen: Feed,
			navigationOptions: {
				title: 'Feed',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="home" size={30} color={tintColor} />
				)
			}
		},
		AddPhoto: {
			name: 'AddPhoto',
			screen: AddPhoto,
			navigationOptions: {
				title: 'Add Photo',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="camera" size={30} color={tintColor} />
				)
			}
		},
		Profile: {
			name: 'Profile',
			screen: Profile,
			navigationOptions: {
				title: 'Profile',
				tabBarIcon: ({ tintColor }) => (
					<Icon name="user" size={30} color={tintColor} />
				)
			}
		}
	},
	{
		initialRouteName: 'Feed',
		tabBarOptions: {
			showLabel: false
		}
	}
)

export default createAppContainer(MenuRoutes)
