require('dotenv').config()

const express = require('express');
const session = require('express-session');
const app = express();

const passport = require('./passport')

app.use(
	session({ secret: "spotify app", resave: true, saveUninitialized: true })
);

app.use(passport.initialize())
app.use(passport.session())

app.use('/', require('./router/indexRouter'))
app.use('/auth', require('./router/authRouter'))
app.use('/users', require('./router/userRouter'))

app.use(express.static('public'))

app.set('view engine', 'pug');

app.listen(process.env.APP_PORT, () => {
	console.log(`Server listening on port ${process.env.APP_PORT}`);
});
