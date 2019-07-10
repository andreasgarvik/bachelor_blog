const functions = require('firebase-functions')

const storage = require('@google-cloud/storage')
const gcs = storage()

const os = require('os')
const path = require('path')

const sharp = require('sharp')
const fs = require('fs')

module.exports const resizeImage = functions.storage
	.object()
	.onFinalize(async object => {
		const bucket = gcs.bucket(object.bucket)
		const filePath = object.name
		const fileName = filePath.split('/').pop()
		const bucketDir = path.dirname(filePath)

		const workingDir = path.join(os.tmpdir(), 'resize')
		const tmpFilePath = path.join(workingDir, 'source.jpg')

		if (fileName.includes('resize@') || !object.contentType.includes('image')) {
			return false
		}

		await fs.ensureDir(workingDir)

		await bucket.file(filePath).download({
			destination: tmpFilePath
		})

		const resizeHeight = [408]
		const resizeWidth = [616]

		const resizeName = `resize@${resizeWidth}_${resizeHeight}_${fileName}`
		const resizePath = path.join(workingDir, resizeName)

		await sharp(tmpFilePath)
			.resize(resizeWidth, resizeHeight)
			.toFile(resizePath)

		bucket.upload(resizePath, {
			destination: path.join(bucketDir, resizeName)
		})

		return fs.remove()
	})
