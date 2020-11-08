import dotenv from 'dotenv';
dotenv.config() // NEEDS to happen  before anything else.

import SpotifyApplication from './SpotifyApplication'
SpotifyApplication.getInstance().start()
