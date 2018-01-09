$(() => {

// VARIABLES
const $search = $('#gen-btn');
const $results = $('.results');
let showName = null;

// DATABASE
const whatData = rickAndMorty;
const data = (whatData);

// FUNCTIONS
const $clear = () => {
  $('.show').remove();
  $('.season').remove();
  $('.episode').remove();
};

const getShow = () => {
  if (whatData === rickAndMorty) {
    showName = "Rick and Morty";
  }
};

getShow();

console.log("Show name:", showName);

const randomItem = () => {
  $results.append( $('<div>').addClass('show') );
  $results.append( $('<div>').addClass('season') );
  $results.append( $('<div>').addClass('episode') );
  // Numbers
  let seasonNum = Math.floor(Math.random()*data.length);
  let episodeNum = data[seasonNum].episodes[Math.floor(Math.random()*data[seasonNum].episodes.length)];
  let actualSeason = seasonNum + 1;
  let season = "Season " + actualSeason;
  let episode = "Episode " + episodeNum;
  $('.show').append(showName);
  $('.season').append(season);
  $('.episode').append(episode);
  // console.log("Season:", actualSeason);
  // console.log("Episode:", episode);
};

// ACTIONS
$search.on('click', (event) => {
  $clear();
  randomItem();
});

});
