//Object with traits that can be arrranged, songs
//We're going to make a playlist and songs in those playlist

//We will need a song and a playlist to hold them. 
class Song{
constructor(name, artist) {
this.name = name;
this.artist = artist;
}

describe() {
return `${this.name} is by ${this.artist}`;
}
}

//class to hold the items
class Playlist {
constructor(name) {
this.name = name;
this.song = [];
}

addSong(song) {
if (song instanceof Song) {
this.song.push(song);
} else {
throw new Error(`You can only add an instance of Song. 
argument i  s not a Song: ${song}`);
}
}
        
describe() {
return `${this.name} has ${this.song.length} songs.`;
}
}

//Menu to hold the prompts

class Menu { // what drives the application and our choices
constructor() {
this.playlist = [];
this.selectedPlaylist = null; // manage one playlist at a time
}

start() { // entry point to application
let selection = this.showMainMenuOptions(); 
while (selection != 0) {
switch(selection) {
case '1' :
this.createPlaylist();
break;
case '2' :
this.viewPlaylist();
break;
case '3' :
this.deletePlaylist();
break;
case '4' :
this.displayPlaylist();
break;
default:
selection = 0;
}
selection = this.showMainMenuOptions();
}
alert('Enjoy your music!');
}
    
showMainMenuOptions() {
return prompt(`
0) exit
1) create a new playlist
2) view a playlist
3) delete a playlist
4) display all playlist
`);
}

showPlaylistMenuOptions(playlistInfo) {
return prompt(`
0) back
1) add a new song
2) delete a song
-----------------
${playlistInfo}
`);
}

displayPlaylist() {
let playlistString = '';
for (let i = 0; i < this.playlist.length; i++) {
playlistString += i+ ') ' + this.playlist[i].name + '\n';
}
alert(playlistString);
}
        
createPlaylist() {
let name = prompt('Enter name for new playlist: ');
this.playlist.push(new Playlist(name));
}

viewPlaylist() {
let index = prompt("Enter the index of the playlist that you want to view:");
if (index > -1 && index < this.playlist.length) {
this.selectedPlaylist = this.playlist[index];
let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n';
description += ' ' + this.selectedPlaylist.describe() + '\n ';
for (let i = 0; i < this.selectedPlaylist.song.length; i++) {
description += i + ') ' + this.selectedPlaylist.song[i].describe() + '\n';
}
let selection1 = this.showPlaylistMenuOptions(description);
switch (selection1) {
case '1' :
this.createSong();
break;
case '2' :
this.deleteSong();
}
} // validate user input
}

deletePlaylist() {
let index = prompt('Enter the index of the playlist that you wish to delete: ');
if (index > -1 && index < this.playlist.length) {
this.playlist.splice(index,1);
}
}                                           

createSong() {
let name = prompt('Enter name for new song: ');
let artist = prompt('Enter artist of new song: ');
this.selectedPlaylist.addSong(new Song(name, artist));
}
           
deleteSong() {
let index = prompt('Enter the index of the song that you wish to delete: ');
if (index > -1 && index < this.selectedPlaylist.song.length) { this.selectedPlaylist.song.splice(index,1);
}
}
}

// comand code for start

let menu = new Menu();
menu.start();

