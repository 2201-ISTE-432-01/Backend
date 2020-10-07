require('dotenv').config()

const express = require('express');
const app = express();

const indexRouter = require('./router/indexRouter')
const userRouter = require('./router/userRouter')

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(process.env.APP_PORT, () => {
	console.log(`Server listening on port ${process.env.APP_PORT}`);
});
