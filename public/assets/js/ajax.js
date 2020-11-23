function getArtists(name, callback) {
    $.ajax({
        url: '/ajax/searchArtist?name=' + encodeURIComponent(name),
        success: callback,
    })
}

function getGenres(callback) {
    $.ajax({
        url: '/ajax/genres',
        success: callback,
    })
}


//get the songs
function getTracks(artist, genre, track, tempo, callback) {
	$.ajax({
		url: '/ajax/tracks/recommendations?seed_artists=' + encodeURIComponent(artist) + '&seed_genres=' + encodeURIComponent(genre) + '&seed_tracks=' + encodeURIComponent(track) + '&target_tempo=' + tempo + '&limit=20',
		success: callback,
	})
}
function addTrack() {
    const testtrack="Ain't No Rest for the Wicked";
    const artistQuery = $('#artistInput').val();
    const genreQuery = $('#genreInput').val();
    const trackQuery = testtrack;
    const tempoQuery = $('#quantity').val();
    //console.log($('#quantity').val());
    getTracks(artistQuery, genreQuery, trackQuery, tempoQuery, (res) => {
        if (res.length === 0) {
            M.toast({
                html: 'Error!',
                classes: 'erorrToast',
            });
            return;
        }
		
        const artist = res[0];
        const track = res[0];
		console.log(`${artist.id}`);
        // TODO: The ID should probably go into a hidden form input.
        //artistid is now hidden
        $('#testlist').append(`
            <li>
                ${artist.name} <p> - </p> ${track.name} 
            </li>
        `);
    });
}
addTrack();
/*function getTracks(name, callback) {
	$.ajax({
		url: '/ajax/searchArtist?name=' + encodeURIComponent(name),
		success: callback,
	})
}*/

//${artist.id}
/*function addTracks() {
    const query = $('#artistInput').val();
	
    if (!query) {
        M.toast({
            html: 'Please enter an artist name!',
            classes: 'errorToast',
        })
        return;
    }

    getTracks(query, (res) => {
        if (res.length === 0) {
            M.toast({
                html: 'No artist found with that name!',
                classes: 'erorrToast',
            });
            return;
        }
		
        const artist = res[0];
		console.log(`${artist.id}`);
        // TODO: The ID should probably go into a hidden form input.
        $('#testlist').append(`
            <li>
                <img src="${artist.images[0].url}" alt="${artist.name}" width="50px">
                ${artist.name} <p style="display:none;">(${artist.id})</p> <span class="close">\u00D7</span>
            </li>
        `);
		console.log($('#artistInput'));
       // $('#artistInput').val('')
    });
}*/
/*const artists = $('#artistList').val();
const genres = $('#genreList').val();

getTracks(artists, genres, (res) => {
	const artists = $('#artistList').val();
	const genres = $('#genreList').val();
	if (res.length === 0) {
		M.toast({
			html: 'Broke',
			classes: 'erorrToast',
		});
		return;
	}

	//const artists = res[0];
	//const genres = res[0];
	
	$('#testlist').append(`
		<li>
			${artists} ${genres} <span class="close">\u00D7</span>
		</li>
	`);

});*/
	