$(() => {

// VARIABLES
const $search = $('#gen-btn');
const $results = $('.results');

// DATABASE
// const data = (dataBase);

const data = (fullData);

// FUNCTIONS
const $clear = () => {
  $('.new').remove();
};

// const randomItem = () => {
//   $results.append( $('<div>').addClass('new') );
//   let $result = data[Math.floor(Math.random()*data.length)];
//   $('.new').append($result);
// };

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
