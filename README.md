# Development

1. Set up a postgres server. Either run it locally and set it up yourself, or install docker and just run `docker-compose up`
2. Visit the [Spotify Developer Portal] and create a new application. Don't forget to set the redirect uri to `http://localhost:8080/auth/spotify/callback`
3. Copy `.env.development` to `.env` and set your spotify app id and secret
4. Run `npm install` to install dependencies
4. Run `npm run dev` for hot reloading and get to work.

[Spotify Developer Portal]: https://developer.spotify.com/dashboard/applications
