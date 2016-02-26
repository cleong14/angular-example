var myApp = angular.module('myApp');

myApp.service('BookService', [BookService]);

function BookService () {
  var books = [
  { title: 'Harry Potter', author: 'Some Body' },
  { title: 'The Hobbit', author: 'Some Body' },
  { title: 'Javascript for Dummies', author: 'Some Body' },
  { title: 'Coding for Dummies', author: 'Some Body' }
  ];

  this.getBooks = function () {
    return books;
  };

  this.getBook = function (index) {
    if (index < 0 || index >= books.length) {
      return null;
    }

    return books[index];
  };
}