var myApp = angular.module('myApp');

myApp.service('BookService', [BookService]);

function BookService () {
  var books = this.books = [
  { title: 'Harry Potter', author: 'J. K. Rowling' },
  { title: 'The Hobbit', author: 'J. R. R. Tolkien' },
  { title: 'Javascript for Dummies', author: 'Emily A. Vander Veer' },
  { title: 'Coding for Dummies', author: 'Nikhil Abraham' }
  ];

  this.addBook = function (title, author) {
    var newBook = {
      title: title,
      author: author
    };
    books.push(newBook);
  };

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