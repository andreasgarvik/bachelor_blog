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

	const auther = getState().firebase.profile.name

	await firestore.collection('blogposts').add({
		title,
		content,
		imageRefs,
		score: 0,
		auther,
		timestamp: Date.now()
	})
}

export const editBlogPost = ({ title, content, images }, id) => async (
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

	const auther = getState().firebase.profile.name

	await firestore
		.collection('blogposts')
		.doc(id)
		.set({
			title,
			content,
			imageRefs,
			score: 0,
			auther,
			timestamp: Date.now()
		})
}

export const signIn = credentials => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firebase = getFirebase()

	await firebase
		.auth()
		.signInWithEmailAndPassword(credentials.email, credentials.password)
}

export const signOut = credentials => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firebase = getFirebase()

	await firebase.auth().signOut()
}
