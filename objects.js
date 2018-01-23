var playlist = new Object({ artistName : 'songTitle'});

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi');

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist.songTitle;
  return playlist;
}removeFromPlaylist(playlist, 'Kanye', 'Gold Digger');