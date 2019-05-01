import { CREATE_BLOGPOST, LOGIN_SUCCESS, SIGNOUT_SUCCESS } from './types'

export const createNewBlogPost = ({ title, content, images }) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = getFirestore()
	const storage = getFirebase()
		.storage()
		.ref()

	const imagePromises = Array.from(images).map(async image => {
		const uploadTask = await storage.child(image.name).put(image)
		return await uploadTask.ref.getDownloadURL()
	})

	const imageRefs = await Promise.all(imagePromises)

	const profile = getState().firebase.profile

	const docRef = await firestore.collection('blogposts').add({
		title,
		content,
		imageRefs,
		score: 0,
		auther: profile.name,
		timestamp: Date.now()
	})

	dispatch({
		type: CREATE_BLOGPOST,
		payload: docRef
	})
}

export const signIn = credentials => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firebase = getFirebase()

	const res = await firebase
		.auth()
		.signInWithEmailAndPassword(credentials.email, credentials.password)
	dispatch({
		type: LOGIN_SUCCESS,
		payload: res
	})
}

export const signOut = credentials => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firebase = getFirebase()

	const res = await firebase.auth().signOut()
	dispatch({
		type: SIGNOUT_SUCCESS,
		payload: res
	})
}
