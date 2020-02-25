const fs = require('fs-extra');
const concat = require('concat');
(async function build() {

  const teamBooksFiles = [
    './dist/microfrontend-webcomponent/team-books/runtime.js',
    //'./dist/microfrontend-webcomponent/team-books/polyfills-es2015.js',
    //'./dist/microfrontend-webcomponent/team-books/scripts.js',
    './dist/microfrontend-webcomponent/team-books/main.js',
  ]
  //await fs.ensureDir('team-books')
  await concat(teamBooksFiles, './dist/microfrontend-webcomponent/team-books/books.js');
  //await fs.copyFile('./dist/microfrontend-webcomponent/team-books/styles.css', './dist/microfrontend-webcomponent/team-books/styles.css')
  //await fs.copy('./dist/microfrontend-webcomponent/team-books/assets/', 'team-books/assets/' )


  const teamShoppingCartFiles = [
    './dist/microfrontend-webcomponent/team-shopping-cart/runtime.js',
    //'./dist/microfrontend-webcomponent/team-shopping-cart/polyfills-es2015.js',
    //'./dist/microfrontend-webcomponent/team-shopping-cart/scripts.js',
    './dist/microfrontend-webcomponent/team-shopping-cart/main.js',
  ]
  //await fs.ensureDir('team-shopping-cart')
  await concat(teamShoppingCartFiles, './dist/microfrontend-webcomponent/team-shopping-cart/shopping-cart.js');
  //await fs.copyFile('./dist/microfrontend-webcomponent/team-shopping-cart/styles.css', './dist/microfrontend-webcomponent/team-shopping-cart/styles.css')
  //await fs.copy('./dist/microfrontend-webcomponent/team-shopping-cart/assets/', 'team-shopping-cart/assets/' )


})()
