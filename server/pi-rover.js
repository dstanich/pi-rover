let PythonShell = require('python-shell');
let PYTHON_ROBOT_SCRIPT = 'server/python-bridge.py';

// Create bridge to python to control the motors
let bridge = new PythonShell(PYTHON_ROBOT_SCRIPT);
bridge.on('message', msg => {
	if (msg) {
		console.log('FROM BRIDGE: ' + msg);
	}
});

// Speed
// TODO Make configurable
let SPEED = 25;

function forward() {
	console.log(new Date().toLocaleString() + ' -- FORWARD');
	bridge.send(SPEED + ' forward');
}

function left() {
	console.log(new Date().toLocaleString() + ' -- LEFT');
	bridge.send(SPEED + ' left');
}

function right() {
	console.log(new Date().toLocaleString() + ' -- RIGHT');
	bridge.send(SPEED + ' right');
}

function backward() {
	console.log(new Date().toLocaleString() + ' -- BACKWARD');
	bridge.send(SPEED + ' backward');
}

function stop() {
	console.log(new Date().toLocaleString() + ' -- STOP');
	bridge.send(SPEED + ' stop');
}

module.exports = {
	forward,
	left,
	right,
	backward,
	stop
};