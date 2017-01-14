
function Jukebox() {
    var playlist = [];
    var index = 0;
    var currently_playing = false;
    var on_shuffle = false;
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
                    if (playlist) {
                        playlist.push({
                            artist: response.tracks.items[0].artists[0].name,
                            song: response.tracks.items[0].name,
                            url: response.tracks.items[0].preview_url
                        });
                        document.getElementById('song_list').innerHTML += "<li>" + playlist[playlist.length - 1].artist + " - " + playlist[playlist.length - 1].song + "</li>";
                        document.getElementById('search_field').value = "";
                        if (playlist.length === 1) {
                            audio.setAttribute("src", playlist[index].url)
                        }
                    }
                }
            })
    }

    this.update_song_title = function () {
        song_title_header.innerHTML = "Current song: " + playlist[index].song + " by " + playlist[index].artist;
    }

    this.toggle_shuffle = function() {
        if (!on_shuffle) {
            document.getElementById('shuffle_button').style.backgroundColor = "#dd5ad5";
            on_shuffle = true;
        } else {
            document.getElementById('shuffle_button').style.backgroundColor = "#44c767";
            on_shuffle = false;
        }
    }

    this.pause_or_play = function() {

        if (playlist.length !== 0)
            if (!currently_playing) {
                audio.play();
                currently_playing = true;
                document.getElementById('id');
                document.getElementById('pause_or_play_button').innerHTML = "<i class=\"fa fa-pause\" aria-hidden=\"true\"></i>"
                this.update_song_title();
            } else {
                audio.pause();
                currently_playing = false;
                document.getElementById('pause_or_play_button').innerHTML = "<i class=\"fa fa-play\" aria-hidden=\"true\"></i>"
            }
        }

    this.next = function() {
        if (playlist.length !== 0) {
            if (on_shuffle) {
                do {
                    var temp = index;
                    index = Math.floor(Math.random() * playlist.length);
                } while (temp === index);
            } else {
                index++;
                index %= playlist.length;
            }
            audio.setAttribute("src", playlist[index].url);
            this.update_song_title();
            if (currently_playing) {
                audio.play();
            }
        }
    }

    this.previous = function() {
        if (playlist.length !== 0) {
            if (on_shuffle) {
                do {
                    var temp = index;
                    index = Math.floor(Math.random() * playlist.length);
                } while (temp === index);
            } else {
                index--;
                if (index < 0) {
                    index = playlist.length - 1;
                }
            }
            audio.setAttribute("src", playlist[index].url);
            this.update_song_title();
            if (currently_playing) {
                audio.play();
            }
        }
    }
}

var jukebox = new Jukebox();
