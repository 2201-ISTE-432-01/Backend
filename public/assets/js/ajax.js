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
