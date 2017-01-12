function Jukebox() {
    var songs = [

    ];
    var index = 0;
    this.audio = document.getElementById('audio');
    this.song_title_header = document.getElementById('song_title_header');

    audio.setAttribute("src", songs[index].path);

    this.update_song_title = function () {
        song_title_header.innerHTML = "Current song: " + songs[index].song_title;
    }

    this.add_song = function() {

    }

    this.play = function() {
        audio.play();
        this.update_song_title();
    }
    this.next = function() {
        index++;
        index = index % songs.length;
        audio.setAttribute("src", songs[index].path);
        this.update_song_title();
        audio.play();
    }
    this.pause = function() {
        audio.pause();
    }
    this.previous = function() {
        index--;
        if (index < 0) {
            index = songs.length - 1;
        }
        audio.setAttribute("src", songs[index].path);
        this.update_song_title();
        audio.play();
    }
}

var jukebox = new Jukebox();
