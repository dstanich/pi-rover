let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let piRover = require('./pi-rover');

app.use(express.static('client'));
app.use(bodyParser.json());

// Respond to rover commands
app.put('/rover', function (req, res) {
	let direction = req.body.direction;
	switch (direction) {
		case 'forward':
			piRover.forward();
			break;
		case 'left':
			piRover.left();
			break;
		case 'right':
			piRover.right();
			break;
		case 'backward':
			piRover.backward();
			break;
		case 'stop':
			piRover.stop();
			break;
		default:
			break;
	}

	res.send('');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});