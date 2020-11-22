/**
 * Validate the form before submitting.
 * @return {boolean}
 */

function validatePreferences() {
    var formValid = True;
    var tempo_big_enough = (parseInt(document.getElementById('quantity').value) >= 50);
    var tempo_small_enough = (parseInt(document.getElementById('quantity').value) <= 250);
    var tempoValid = tempo_big_enough && tempo_small_enough
    if(!tempo_big_enough) {
        M.toast({
            html: 'Tempo is not fast enough!',
            classes: 'errorToast',
        })
        formValid = False;
    }
    if(!tempo_small_enough){
        M.toast({
            html: 'Tempo is too fast!',
            classes: 'errorToast',
        })
        formValid = False;
    }

    var artists = document.getElementById('myUL').getElementsByTagName("li");
    if(artists.length < 1) {
        M.toast({
            html: 'Please select an artist!',
            classes: 'errorToast',
        })
        formValid = False;
    }
    var i;
    for (i = 0; i < artists.length; i++) {
        artists[i].style.backgroundColor = "red";
        //- remove <span class="close">×</span> from the list item
        var artist = artists[i].innerHTML.slice(0, -28)
        console.log(artist)
    }
    var genres = document.getElementById('myUL2').getElementsByTagName("li");
    if(genres.length < 1) {
        M.toast({
            html: 'Please select a genre!',
            classes: 'errorToast',
        })
        formValid = False;
    }
    var j;
    for (j = 0; j < genres.length; j++) {
        genres[j].style.backgroundColor = "red";
        //- remove <span class="close">×</span> from the list item
        var genre = genres[j].innerHTML.slice(0, -28)
        console.log(genre)
    }

    return formValid;
}

/**
 * Search for an artist from text box input, and add it to the list if it exists.
 */
function addArtist() {
    const query = $('#artistInput').val();

    if (!query) {
        M.toast({
            html: 'Please enter an artist name!',
            classes: 'errorToast',
        })
        return;
    }

    getArtists(query, (res) => {
        if (res.length === 0) {
            M.toast({
                html: 'No artist found with that name!',
                classes: 'erorrToast',
            });
            return;
        }

        const artist = res[0];

        // TODO: The ID should probably go into a hidden form input.
        $('#artistList').append(`
            <li>
                <img src="${artist.images[0].url}" alt="${artist.name}" width="50px">
                ${artist.name} (${artist.id})<span class="close">\u00D7</span>
            </li>
        `);

        $('#artistInput').val('')
    });
}

/**
 * Add the selected genre to the genre list
 */
function addGenre() {
    const genre = $('#genreInput').val();
    if (!genre) {
        M.toast({
            html: 'Please select a genre!',
            classes: 'errorToast',
        })
        return;
    }

    // if ($('#genreList').children().map(it => it.text()).includes(`
    //             ${genre}\u00D7
    //     `)) {
    //     M.toast({
    //         html: 'You have already added that genre!',
    //         classes: 'errorToast',
    //     })
    //     return;
    // }

    $('#genreList').append(`
        <li>
            ${genre}<span class="close">\u00D7</span>
        </li>
    `);
    console.log($('#genreList').children().map(it => it.text()))
       
    
}


window.addEventListener('load', () => {
    // load a list of genres from the backend, populate and setup our select.
	$('#genreInput').append(`<option value="" disabled selected>Genre...</option>`)
    getGenres((genres) => {
        genres.forEach(genre => {
			//$('#genreInput').attr('placeholder', 'Genre...');
            $('#genreInput').append(`<option>${genre}</option>`)
        })

        // Jquery plugin to setup the select
        $('#genreInput').formSelect();
    })

    // Remove a list element when the close button is pressed
    $('#artistList,#genreList').on('click', '.close', function () {
        $(this).parent().remove()
    });

    // TODO: Temporary artist population so I don't have to keep typing
    ['Sublime', 'Grizfolk', 'Electric Guest', 'Tame Impala', 'Cage the Elephant']
        .forEach(artist => {
            $('#artistInput').val(artist)
            addArtist()
        });
})
