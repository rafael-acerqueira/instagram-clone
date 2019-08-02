import axios from 'axios'

const firebase = axios.create({
	baseURL: 'https://us-central1-instagram-clone-mobile.cloudfunctions.net'
})

export default firebase
