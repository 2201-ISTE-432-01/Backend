import express, {Express} from 'express'
import session from 'express-session'
import passport from './passport'

import indexRouter from "./router/indexRouter";
import authRouter from "./router/authRouter";
import ajaxRouter from './router/ajaxRouter';

export default class AppFactory {

    public static createApp(): Express {
        const app = express()

        this.installSession(app)
        this.installRouters(app)
        this.installFrontend(app)

        return app
    }

    private static installSession(app: Express) {
        app.use(session({
            secret: "spotify app",
            resave: true,
            saveUninitialized: true
        }))

        app.use(passport.initialize())
        app.use(passport.session())
    }

    private static installRouters(app: Express) {
        app.use('/', indexRouter)
        app.use('/auth', authRouter)
        app.use('/ajax', ajaxRouter)
    }

    private static installFrontend(app: Express) {
        app.use(express.static('public'))

        app.set('view engine', 'pug')
    }
}
