$(() => {

// VARIABLES
const $search = $('#gen-btn');
const $results = $('.results');

// DATABASE
const data = (fullData);

// FUNCTIONS
const $clear = () => {
  $('.new').remove();
};

const randomItem = () => {
  $results.append( $('<div>').addClass('new') );
  let season = Math.floor(Math.random()*data.length);
  let episode = data[season].episodes[Math.floor(Math.random()*data[season].episodes.length)];
  $('.new').append(episode);
  console.log("Season:", season + 1);
  console.log("Episode:", episode);
};

// ACTIONS
$search.on('click', (event) => {
  $clear();
  randomItem();
});

});
