export const createNewBlogPost = ({ title, content, images }) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = getFirestore()
	const storage = getFirebase()
		.storage()
		.ref()

	const imageNames = []

	const imagePromises = Array.from(images).map(async image => {
		const uploadTask = await storage.child(image.name).put(image)
		imageNames.push(image.name)
		return await uploadTask.ref.getDownloadURL()
	})

	const imageRefs = await Promise.all(imagePromises)

	const auther = getState().firebase.profile.name

	await firestore.collection('blogposts').add({
		title,
		content,
		imageNames,
		imageRefs,
		hearts: 0,
		auther,
		timestamp: Date.now()
	})
}

export const editBlogPost = (
	{ title, content, imageNames, images },
	id
) => async (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = getFirestore()
	const storage = getFirebase()
		.storage()
		.ref()

	const imagePromises = Array.from(imageNames).map(async image => {
		const deleteTask = await storage.child(image)
		return await deleteTask.delete()
	})

	await Promise.all(imagePromises)

	const newImageNames = []

	const newImagePromises = Array.from(images).map(async image => {
		const uploadTask = await storage.child(image.name).put(image)
		newImageNames.push(image.name)
		return await uploadTask.ref.getDownloadURL()
	})

	const imageRefs = await Promise.all(newImagePromises)

	await firestore
		.collection('blogposts')
		.doc(id)
		.update({
			title,
			content,
			imageNames: newImageNames,
			imageRefs,
			timestamp: Date.now()
		})
}

export const editHeartBlogPost = (id, hearts) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = getFirestore()

	await firestore
		.collection('blogposts')
		.doc(id)
		.update({
			hearts
		})
}

export const postComment = ({ name, text }, blogpost) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = getFirestore()

	await firestore.collection('comments').add({
		name,
		text,
		blogpost,
		timestamp: Date.now()
	})
}

export const deleteBlogPost = (
	{ title, content, imageNames, images },
	id
) => async (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = getFirestore()
	const storage = getFirebase()
		.storage()
		.ref()

	const imagePromises = Array.from(imageNames).map(async image => {
		const deleteTask = await storage.child(image)
		return await deleteTask.delete()
	})

	await Promise.all(imagePromises)

	await firestore
		.collection('blogposts')
		.doc(id)
		.delete()
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
