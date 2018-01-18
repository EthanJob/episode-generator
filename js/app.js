$(() => {

// VARIABLES
const $search = $('#gen-btn');
const $results = $('.results');
const $rick = $('#rick');
const $bob = $('#bob');
const $office = $('#office');
let showName = "Rick and Morty";

// DATABASE
let data = (rickAndMorty);

// FUNCTIONS
const $clear = () => {
  $('.show').remove();
  $('.season').remove();
  $('.episode').remove();
  $('.ep-pic').remove();
  $('.des').remove();
};

const $clearActive = () => {
  $('img').removeClass('active');
}

console.log("Show name:", showName);

const randomItem = () => {
  $results.append( $('<div>').addClass('show') );
  $results.append( $('<div>').addClass('season') );
  $results.append( $('<div>').addClass('episode') );
  $results.append( $('<div>').addClass('ep-pic') );
  $results.append( $('<div>').addClass('des') );
  // Numbers
  let seasonNum = Math.floor(Math.random()*data.length);
  let getEpisode = Math.floor(Math.random()*data[seasonNum].episodes.length);
  let episodeNum = data[seasonNum].episodes[getEpisode].num;
  let description = data[seasonNum].episodes[getEpisode].des;
  let image = data[seasonNum].episodes[getEpisode].img;
  let actualSeason = seasonNum + 1;
  let season = "Season " + actualSeason;
  let episode = "Episode " + episodeNum;
  let realDes = "Description: " + description;
  $('.show').append(showName);
  $('.season').append(season);
  $('.episode').append(episode);
  $('.ep-pic').append($('<img>',{src:image}));
  $('.des').append(realDes);
};

$('#titleLink').on('click', (event) => {
  location.reload();
});

// ACTIONS
$rick.on('click', (event) => {
  $clearActive();
  $clear();
  data = (rickAndMorty);
  showName = "Rick and Morty";
  $rick.addClass('active');
});

$bob.on('click', (event) => {
  $clearActive();
  $clear();
  data = (bobsBurgers);
  showName = "Bob's Burgers";
  $bob.addClass('active');
});

$office.on('click', (event) => {
  $clearActive();
  $clear();
  data = (theOffice);
  showName = "The Office";
  $office.addClass('active');
})

$search.on('click', (event) => {
  $clear();
  randomItem();
});

});
