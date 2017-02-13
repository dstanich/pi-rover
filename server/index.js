let express = require('express');
let app = express();

app.use(express.static('client'));

app.listen(3000, () => {
	console.log('Listening on port 3000');
});