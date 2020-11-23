CREATE DATABASE "postgresSpotify";

COMMENT ON DATABASE "postgresSpotify"
    IS 'For ISTE432.01 Group Project';

CREATE TABLE IF NOT EXISTS artist(
    artist_uri varchar(60) NOT NULL PRIMARY KEY,
    artist_name varchar(60),
    popularity smallint
);

LOCK TABLES `artist` WRITE;
INSERT INTO `artist` VALUES ('spotify:artist:1uNFoZAHBGtllmzznpCI3s','Bieber',1),('spotify:artist:31TPClRtHm23RisEBtV3X7','Timberlake',2),('spotify:artist:3oSJ7TBVCWMDMiYjXNiCKE','Brown',3);
UNLOCK TABLES;

CREATE TABLE IF NOT EXISTS genre(
    genre_id smallint NOT NULL PRIMARY KEY,
    genre_name varchar(60)
);

LOCK TABLES `genre` WRITE;
INSERT INTO `genre` VALUES (1,'Pop'),(2,'Rap'),(3,'Hip-Hop');
UNLOCK TABLES;

CREATE TABLE IF NOT EXISTS playlist(
    playlist_uri varchar(60) NOT NULL,
    user_uri varchar(60) NOT NULL,
    name varchar(60),
    description varchar(250),
    energy numeric(10,0),
    tempo numeric(10,0),
    CONSTRAINT pk_playlist PRIMARY KEY (user_uri, playlist_uri),
    CONSTRAINT fk_user_playlist FOREIGN KEY (user_uri)
        REFERENCES user (user_uri) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

LOCK TABLES `playlist` WRITE;
INSERT INTO `playlist` VALUES ('spotify:playlist:5ge2YqUbZrmqd2Mve8Uezf','Party Playlist 2020','None', 111222, 222333),('spotify:playlist:7FNWDjDx6rrTlkYSHiQrQK','Playlists of all Playlist',222333, 333444),('spotify:playlist:0WjvP1GLytqMXyMXgTuEOO','Playlist Hits 2020',333444, 444555);
UNLOCK TABLES;

CREATE TABLE IF NOT EXISTS track(
    track_uri varchar(60) NOT NULL PRIMARY KEY,
    track_name varchar(60),
    track_type varchar(25),
    duration_ms integer,
    preview_url varchar(60),
    energy numeric(10,0),
    popularity numeric(10,0),
    tempo numeric(10,0)
);

LOCK TABLES `track` WRITE;
INSERT INTO `track` VALUES ('spotify:track:1HXy5I3HTWq8OvxCn0z7G7','Heaven','Unknown',2.59,'Unk',200,500,600),('spotify:track:7Lf7oSEVdzZqTA0kEDSlS5','Cry Me a River','Unknown',4.48,'Unk',300,600,700),('spotify:track:40qyPyljksBEqlNw5sW37T','Habitual','Unknown',2.48,'Unk',400,700,800);
UNLOCK TABLES;

CREATE TABLE IF NOT EXISTS "user"(
    user_uri varchar(60) NOT NULL PRIMARY KEY,
    display_name varchar(60)
);

LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES ('spotify:user:6ifle3fj0t8can7zmwepm7tow','Eyob');
UNLOCK TABLES;

CREATE TABLE IF NOT EXISTS artist_track(
    artist_uri varchar(60) NOT NULL,
    track_uri varchar(60) NOT NULL,
    CONSTRAINT pk_artist_track PRIMARY KEY (artist_uri, track_uri),
    CONSTRAINT fk_artist_artist_track FOREIGN KEY (artist_uri)
        REFERENCES artist (artist_uri) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    CONSTRAINT fk_track_artist_track FOREIGN KEY (track_uri)
        REFERENCES track (track_uri) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE INDEX fk_track_artist_track
    ON artist_track (track_uri ASC);
    
CREATE TABLE IF NOT EXISTS genre_artist(
    genre_id smallint NOT NULL,
    artist_uri varchar(60) NOT NULL,
    CONSTRAINT pk_genre_artist PRIMARY KEY (genre_id, artist_uri),
    CONSTRAINT fk_artist_genre_artist FOREIGN KEY (artist_uri)
        REFERENCES artist (artist_uri) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    CONSTRAINT fk_genre_genre_artist FOREIGN KEY (genre_id)
        REFERENCES genre (genre_id) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE INDEX fk_artist_genre_artist
    ON genre_artist (artist_uri ASC);
    
CREATE TABLE IF NOT EXISTS track_playlist(
    playlist_uri varchar(60) NOT NULL,
    track_uri varchar(60) NOT NULL,
    CONSTRAINT pk_track_playlist PRIMARY KEY (playlist_uri, track_uri),
    CONSTRAINT fk_playlist_track_playlist FOREIGN KEY (playlist_uri)
        REFERENCES playlist (playlist_uri) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT,
    CONSTRAINT fk_track_track_playlist FOREIGN KEY (track_uri)
        REFERENCES track (track_uri) MATCH SIMPLE
        ON UPDATE RESTRICT
        ON DELETE RESTRICT
);

CREATE INDEX fk_track_track_playlist
    ON track_playlist (track_uri ASC)
