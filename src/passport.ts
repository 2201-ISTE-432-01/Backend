import passport from 'passport'
const SpotifyStrategy = require('passport-spotify').Strategy

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function (user: any, done: any) {
    done(null, user);
});

passport.deserializeUser(function (obj: any, done: any) {
    done(null, obj);
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: process.env.APP_SPOTIFY_ID,
            clientSecret: process.env.APP_SPOTIFY_SECRET,
            callbackURL: process.env.APP_SPOTIFY_CALLBACK,
        },
        function (accessToken: any, refreshToken: any, expires_in: any, profile: any, done: any) {
            process.nextTick(() => {
                return done(null, { ...profile, ...{ accessToken: accessToken } });
            });
        }
    )
)

export default passport
