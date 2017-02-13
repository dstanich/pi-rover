var currentDirection = 'stop';
var buttonIds = {
	forward: 'forward-button',
	left: 'left-button',
	right: 'right-button',
	backward: 'backward-button',
	stop: 'stop-button'
};

// Call server to trigger rover to change
function callAPI(dir) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() { 
		if (req.readyState === 4 && req.status === 200) {
			console.log('Response from API: ', req.responseText);
		}
	};
	req.open('PUT', './rover', true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.send(JSON.stringify({direction: dir}));
}

// Resets the active button state of all direction buttons
function resetActiveStateOnAllButtons() {
	for (var id in buttonIds) {
		var element = document.getElementById(buttonIds[id]);
		var classes = element.className.split(' ');
		element.className = classes[0];
	}
}

// Returns the DOM element associated with the sent direction
function getElementForDirection(dir) {
	var id = buttonIds[dir];
	if (!id) {
		console.error('Invalid direction passed: ', dir);
		return undefined;
	}

	return document.getElementById(id);
}

// Handler for when a direction button is pressed
function directionPressed(dir) {
	console.log(dir + ' has been pressed');
	resetActiveStateOnAllButtons();

	currentDirection = dir;
	var element = getElementForDirection(dir);
	if (element) {
		element.className += ' controls__active-control';
	}

	callAPI(dir);
}


// Set the stop button initially
directionPressed('stop');