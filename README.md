# Development

1. Set up a postgres server. Either run it locally and set it up yourself, or install docker and just run `docker-compose up`
2. Visit the [Spotify Developer Portal] and create a new application. Don't forget to set the redirect uri to `http://localhost:8080/auth/spotify/callback`
3. Copy `.env.development` to `.env` and set your spotify app id and secret
4. Run `npm install` to install dependencies
4. Run `npm run dev` for hot reloading and get to work.

# Deployment

When deploying the application, it is recommended to set environment variables without use of a .env file.

The recommended way to deploy this app is on [Heroku], and instructions are provided for this:

1. Fork this repository.
2. Create a new heroku app, and under the deploy tab select Github, and link it to that repository.
3. Under Overview, install the Heroku Postgres add-on.
4. Visit the [Spotify Developer Portal] and create a new application. Don't forget to set the redirect uri to `https://<app-name>.herokuapp.com/auth/spotify/callback`
5. Under Settings > Config Vars, set `APP_POSTGRES_STRING`, `APP_SPOTIFY_CALLBACK`, `APP_SPOTIFY_ID`, and `APP_SPOTIFY_SECRET`
6. Under Deploy, deploy the master branch

If deploying in a custom environment, I recommend setting up your postgres database first,
and then running the app with the following systemd service:

```systemd
[Unit]
Description=Spotify app

[Service]
ExecStart=/usr/bin/npm run start
WorkingDirectory=/opt/spotifyapp
Restart=always
User=root
Group=root

[Install]
WantedBy=multi-user.target
```

[Spotify Developer Portal]: https://developer.spotify.com/dashboard/applications
[Heroku]: https://dashboard.heroku.com/apps
