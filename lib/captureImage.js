const PiCamera = require('pi-camera');

const myCamera = new PiCamera({
	mode: 'photo',
	output: `images/image.jpg`,
	width: 1000,
	height: 1000,
	nopreview: true,
});

function captureImage (options) {
	return new Promise(function(resolve, reject) {
		console.log('pic snapped')
		myCamera.snap()
		.then((result) => {
			resolve('images/image.jpg') // Assuming the result will include the filename
		})
		.catch((error) => {
			reject(error)
		});
	})
}



module.exports = captureImage
