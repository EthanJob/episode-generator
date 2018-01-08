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

const randomItem = () => {
  let $result = data[Math.floor(Math.random()*data.length)];
  $results.append($result);
};

$search.on('click', (event) => {
  randomItem();
  console.log('working');
});



});
