$(() => {

// VARIABLES
const $search = $('#gen-btn');
const $results = $('.results');

// DATABASE
const data = (fullData);

// FUNCTIONS
const $clear = () => {
  $('.season').remove();
  $('.episode').remove();
};

const randomItem = () => {
  $results.append( $('<div>').addClass('season') );
  $results.append( $('<div>').addClass('episode') );
  // Numbers
  let seasonNum = Math.floor(Math.random()*data.length);
  let episodeNum = data[seasonNum].episodes[Math.floor(Math.random()*data[seasonNum].episodes.length)];
  let actualSeason = seasonNum + 1;
  let season = "Season " + actualSeason;
  let episode = "Episode " + episodeNum;
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
