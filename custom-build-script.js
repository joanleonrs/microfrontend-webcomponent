const fs = require('fs-extra');
const concat = require('concat');
(async function build() {

  const teamBooksFiles = [
    './dist/microfrontend-webcomponent/team-books/runtime.js',
    './dist/microfrontend-webcomponent/team-books/main.js',
  ]
  await concat(teamBooksFiles, './dist/microfrontend-webcomponent/team-books/books.js');


  const teamShoppingCartFiles = [
    './dist/microfrontend-webcomponent/team-shopping-cart/runtime.js',
    './dist/microfrontend-webcomponent/team-shopping-cart/main.js',
  ]
  await concat(teamShoppingCartFiles, './dist/microfrontend-webcomponent/team-shopping-cart/shopping-cart.js');

})()
