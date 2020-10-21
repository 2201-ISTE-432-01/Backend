const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: process.env.APP_SPOTIFY_ID,
            clientSecret: process.env.APP_SPOTIFY_SECRET,
            callbackURL: process.env.APP_SPOTIFY_CALLBACK,
        },
        function (accessToken, refreshToken, expires_in, profile, done) {
            process.nextTick(() => {
                return done(null, { ...profile, ...{ accessToken: accessToken } });
            });
        }
    )
)

module.exports = passport
