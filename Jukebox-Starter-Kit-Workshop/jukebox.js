function Jukebox() {
    var songs = [
        {path: "./songs/Don't-Let-Me-Down.mp3", song_title: "Don't Let Me Down"},
        {path: "./songs/Get-Back.mp3", song_title: "Get Back"},
        {path: "./songs/Hate-It-Here.mp3", song_title: "Hate It Here"}
    ];
    var index = 0;
    this.audio = document.getElementById('audio');
    this.song_title_header = document.getElementById('song_title_header');

    audio.setAttribute("src", songs[index].path);

    function update_song_title () {
        song_title_header.innerHTML = "Current song: " + songs[index].song_title;
    }

    this.play = function() {
        audio.play();
        update_song_title();
    }
    this.next = function() {
        index++;
        index = index % songs.length;
        audio.setAttribute("src", songs[index].path);
        update_song_title();
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
        update_song_title();
        audio.play();
    }
}

var jukebox = new Jukebox();
