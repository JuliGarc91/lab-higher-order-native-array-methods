/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
//Draft 2
function sortByRuntimeAscending(songs) {
  songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds);
  return songs;
}
// Draft 1 - not sure why it doesn't work
// function sortByRuntimeAscending(songs) {
//   songs.sort((a,b) => {
//     if (a.runtimeInSeconds < b.runtimeInSeconds) {
//       return -1;
//     } else if (a.runtimeInSeconds > b.runtimeInSeconds) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }); 
// }
/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
    songs.sort((a,b) => {
      artistA = a.artist.toLowerCase();
      artistB = b.artist.toLowerCase();
      if (artistA > artistB) {
        return -1;
      } else if (artistA < artistB) {
        return 1;
      } else {
        return 0;
      }
    }); 
    return songs;
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  songs.sort((a,b) => {
    songA = a.title.toLowerCase();
    songB = b.title.toLowerCase();
    if (songA < songB) {
      return -1;
    } else if (songA > songB) {
      return 1;
    } else {
      return 0;
    }
  }); 
  return songs;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};