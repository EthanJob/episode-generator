$(() => {

console.log('still working with jquery');

const $search = $('#gen-btn');
const $results = $('.results');
let $result = null;

const data = [
  'first item',
  'second item',
  'third item',
  'fourth item'
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
