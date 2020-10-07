const express = require('express');
const app = express();

const indexRouter = require('./router/indexRouter')
const userRouter = require('./router/userRouter')

const PORT = 8080;

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
