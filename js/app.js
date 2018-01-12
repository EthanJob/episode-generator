$(() => {

// VARIABLES
const $search = $('#gen-btn');
const $results = $('.results');
const $rick = $('#rick');
const $bob = $('#bob');
const $office = $('#office');
let showName = "Rick and Morty";

// DATABASE
// let whatData = rickAndMorty;
// let whatData = bobsBurgers;
let data = (rickAndMorty);

// FUNCTIONS
const $clear = () => {
  $('.show').remove();
  $('.season').remove();
  $('.episode').remove();
};

const $clearActive = () => {
  $('img').removeClass('active');
}

////////////////////////////////////////////
// const getShow = () => {
//   if (whatData === rickAndMorty) {
//     showName = "Rick and Morty";
//   } else if (whatData === bobsBurgers) {
//     showName = "Bob's Burgers";
//   }
// };
//
// getShow();
////////////////////////////////////////////

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
$rick.on('click', (event) => {
  $clearActive();
  $clear();
  data = (rickAndMorty);
  showName = "Rick and Morty";
  $rick.addClass('active');
  console.log("rick was clicked");
  // console.log("whatData:", whatData);
});

$bob.on('click', (event) => {
  $clearActive();
  $clear();
  data = (bobsBurgers);
  showName = "Bob's Burgers";
  $bob.addClass('active');
  console.log("bob was clicked");
  // console.log("whatData:", whatData);
});

$office.on('click', (event) => {
  $clearActive();
  $clear();
  data = (theOffice);
  showName = "The Office";
  $office.addClass('active');
  console.log("office was clicked");
})

$search.on('click', (event) => {
  $clear();
  randomItem();
});

});
