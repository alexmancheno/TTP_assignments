
var song_list = document.getElementById('song_list_container');

song_list.innerHTML = "<h3>List of songs";
console.log(jukebox.songs[0].song_title);
for (var i = 0; i < jukebox.length; i++) {
    song_list.innerHTML += "<p>" + jukebox.songs[i].song_title + "</p>";
}
