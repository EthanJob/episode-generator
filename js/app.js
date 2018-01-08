$(() => {

console.log('still working with jquery');

const $search = $('#gen-btn');
const $results = $('.results');
let $result = null;

const data = [
  'episode 1',
  'episode 2',
  'episode 3',
  'episode 4',
  'episode 5'
];

const $clear = () => {
  $('.new').remove();
  console.log('removed');
};

const randomItem = () => {
  $results.append( $('<div>').addClass('new') );
  let $result = data[Math.floor(Math.random()*data.length)];
  $('.new').append($result);
};

$search.on('click', (event) => {
  $clear();
  randomItem();
  console.log('working');
});



});
