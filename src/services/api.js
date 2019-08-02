import axios from 'axios'

const api = axios.create({
	baseURL: 'https://instagram-clone-mobile.firebaseio.com/'
})

export default api
