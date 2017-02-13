function forward() {
	console.log(new Date().toLocaleString() + ' -- FORWARD');
}

function left() {
	console.log(new Date().toLocaleString() + ' -- LEFT');
}

function right() {
	console.log(new Date().toLocaleString() + ' -- RIGHT');
}

function backward() {
	console.log(new Date().toLocaleString() + ' -- BACKWARD');
}

function stop() {
	console.log(new Date().toLocaleString() + ' -- STOP');
}

module.exports = {
	forward,
	left,
	right,
	backward,
	stop
};