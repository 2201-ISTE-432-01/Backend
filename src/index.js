require('dotenv').config()

const express = require('express');
const session = require("express-session");

const app = express();

const passport = require('./passport')

const indexRouter = require('./router/indexRouter')
const authRouter = require('./router/authRouter')
const userRouter = require('./router/userRouter')

app.use(
	session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/users', userRouter)

app.listen(process.env.APP_PORT, () => {
	console.log(`Server listening on port ${process.env.APP_PORT}`);
});
