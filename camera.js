var io = require('socket.io-client')('http://modulair.muhammadmustadi.com')

io.on('connect', function (data) {
	io.emit('camera', {message: 'terdeteksi gerakan, buka email', timestamp: Date.now()});
//	process.exit();
})

io.on('received', function (data) {
	process.exit();
});
