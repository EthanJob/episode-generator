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
  $('.ep-title').remove();
  $('.ep-pic').remove();
  $('.ep-link').remove();
};

const $clearAll = () => {
  $clear();
  $('.showIcon').remove();
  $('#gen-btn').remove();
  $('.titleItems').remove();
  $('.price').remove();
  $('.gen-rest').remove();
};

const $clearActive = () => {
  $('img').removeClass('active');
}

const randomItem = () => {
  $results.append( $('<div>').addClass('show') );
  $results.append( $('<div>').addClass('season') );
  $results.append( $('<div>').addClass('episode') );
  $results.append( $('<div>').addClass('ep-title') );
  $results.append( $('<div>').addClass('ep-pic') );
  $results.append( $('<div>').addClass('ep-link') );
  // Numbers
  let seasonNum = Math.floor(Math.random()*data.length);
  let getEpisode = Math.floor(Math.random()*data[seasonNum].episodes.length);
  let episodeNum = data[seasonNum].episodes[getEpisode].num;
  let episodeTitle = data[seasonNum].episodes[getEpisode].title;
  let image = data[seasonNum].episodes[getEpisode].img;
  let link = data[seasonNum].episodes[getEpisode].link;
  let actualSeason = seasonNum + 1;
  let season = "Season " + actualSeason;
  let episode = "Episode " + episodeNum;
  let realTitle = '"' + episodeTitle + '"';
  $('.show').append( $('<h3>').html(showName) );
  $('.season').append( $('<h4>').html(season) );
  $('.episode').append( $('<h4>').html(episode) );
  $('.ep-title').append( $('<h4>').html(realTitle) );
  $('.ep-pic').append($('<img>',{src:image}).addClass('picture'));
  $('.ep-link').append($('<h4>').html( $('<a>').attr('href', link).text("Watch the episode here!").attr('target', '_blank') ));
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

// CREATE PAGE
const $fill = () => {
  $('.pageTitle').append( $('<div>').addClass('titleItems') );
};

// HEADER LINKS
$('.ep').on('click', (event) => {
  location.reload();
});

$('.rest').on('click', (event) => {
  $clearAll();
  $fill();
  $('.titleItems').append( $('<h2>').html('Restaurant Generator') );
  $('.titleItems').append( $('<h4>').html('Select a price range') );
  $('.shows').append( $('<div>').html('$').addClass('price') );
  $('.shows').append( $('<div>').html('$$').addClass('price') );
  $('.shows').append( $('<div>').html('$$$').addClass('price') );
  $('#btn-area').append( $('<button>').text('Generate Random Restaurant').addClass('gen-rest') );
});

$('.sugg').on('click', (event) => {
  $clearAll();
  $fill();
  $('.titleItems').append( $('<h2>').html('Suggestions') );
  $('.titleItems').append( $('<h4>').html("Enter the title of a show <br> you'd like to see on Decidr!") );
});

});
