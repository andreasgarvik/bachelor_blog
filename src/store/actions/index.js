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

export const editHeartBlogPost = (blogpost, hearts) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = getFirestore()

	await firestore.collection('hearts').add({
		blogpost,
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

export const deleteComment = id => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = getFirestore()

	await firestore
		.collection('comments')
		.doc(id)
		.delete()
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

	const deleteComments = await firestore
		.collection('comments')
		.where('blogpost', '==', `${id}`)
		.get()

	deleteComments.forEach(async comment => await comment.ref.delete())

	const deleteHearts = await firestore
		.collection('hearts')
		.where('blogpost', '==', `${id}`)
		.get()

	deleteHearts.forEach(async heart => await heart.ref.delete())

	await firestore
		.collection('blogposts')
		.doc(id)
		.delete()
}

export const editPersonalBio = (id, title, text, imageName, image) => async (
	dispatch,
	getState,
	{ getFirebase, getFirestore }
) => {
	const firestore = getFirestore()
	const storage = getFirebase()
		.storage()
		.ref()

	await storage.child(imageName).delete()

	const uploadTask = await storage.child(image.name).put(image)
	const newImage = await uploadTask.ref.getDownloadURL()

	await firestore
		.collection('personal')
		.doc(id)
		.update({
			title,
			text,
			imageName: image.name,
			image: newImage
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
