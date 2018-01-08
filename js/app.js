$(() => {

// VARIABLES
const $search = $('#gen-btn');
const $results = $('.results');

const data = [
  'episode 1',
  'episode 2',
  'episode 3',
  'episode 4',
  'episode 5'
];

// FUNCTIONS
const $clear = () => {
  $('.new').remove();
};

const randomItem = () => {
  $results.append( $('<div>').addClass('new') );
  let $result = data[Math.floor(Math.random()*data.length)];
  $('.new').append($result);
};

// ACTIONS
$search.on('click', (event) => {
  $clear();
  randomItem();
});

});
