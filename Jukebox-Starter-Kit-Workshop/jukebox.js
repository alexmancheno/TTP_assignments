
function Jukebox() {
    var playlist = [];
    var index = 0;
    var currently_playing = false;
    var audio = document.getElementById('audio');
    var song_title_header = document.getElementById('song_title_header');

    this.add_song = function() {
        $.ajax ({
            url: "https://api.spotify.com/v1/search",
            data: {
                q: document.getElementById("search_field").value,
                type: "track"
            },
            success: function(response) {
                //console.log(response);
                playlist.push({
                    artist: response.tracks.items[0].artists[0].name,
                    song: response.tracks.items[0].name,
                    url: response.tracks.items[0].preview_url
                })
                document.getElementById('song_list').innerHTML += "<li>" + playlist[playlist.length - 1].artist + " - " + playlist[playlist.length - 1].song + "</li>";

                if (playlist.length === 1) {
                    audio.setAttribute("src", playlist[index].url)
                }
            }
        })
    }

    this.update_song_title = function () {
        song_title_header.innerHTML = "Current song: " + playlist[index].song + " by " + playlist[index].artist;
    }

    this.playlist_length = function() {
        return playlist.length;
    }

    this.pause_or_play = function() {
        if (playlist.length !== 0)
            if (!currently_playing) {
                audio.play();
                currently_playing = true;
                this.update_song_title();
            } else {
                audio.pause();
                currently_playing = false;
            }
        }

    this.next = function() {
        if (playlist.length !== 0) {
            index++;
            index %= playlist.length;
            audio.setAttribute("src", playlist[index].url);
            this.update_song_title();
            currently_playing = false;
            this.pause_or_play();
        }
    }

    this.previous = function() {
        if (playlist.length !== 0) {
            index--;
            if (index < 0) {
                index = playlist.length - 1;
            }
            audio.setAttribute("src", playlist[index].url);
            this.update_song_title();
            currently_playing = false;
            this.pause_or_play();
        }
    }
}

var jukebox = new Jukebox();
