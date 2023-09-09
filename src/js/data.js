/**
 * @typedef {{name: string, key: string, tooltip?: string, checked?: boolean, sub?: {name: string, tooltip?: string, checked?: string}[]}[]} Options
 * @typedef {{name: string, img: string, song: string, opts: Object<string, boolean|number[]}[]} SongData
*/

/**
 * Data set. Songs will be removed from the sorting array based on selected options, working down the array.
 * 
 * @type {Object.<string, {options: Options, songData: SongData}>}
*/
const dataSet = {};

/** 
 * Data set version, in YYYY-MM-DD form.
 * 
 * @example '2018-02-20'
*/
let dataSetVersion = '';

/**
 * Image root, will be appended to the start of every image URL.
 */
const imageRoot = 'src/assets/imgs/albums/';

/**
 * Song root, will be appended to the start of every song URL.
 */
const songRoot = 'src/assets/songs/';

/**
 * Video root, will be appended to the start of every YouTube URL.
 */
const videoRoot = "https://www.youtube.com/embed/";
