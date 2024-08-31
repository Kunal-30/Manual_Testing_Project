// test.mjs
// importing the BookShop module
import BookShop from './BookShop.mjs';

const myBookShop = new BookShop();

// Adding books
// Calling the addBook() method to add books in the library
myBookShop.addBook("One Piece Manga", "Eiichiro Oda", 2559, 100);
myBookShop.addBook("Naruto Manga", "Masashi Kishimoto", 2800, 50);
myBookShop.addBook("Beserk Manga", "Kentaro Miura", 1469, 75);
myBookShop.addBook("Bleach Manga", "Tite Kubo", 11049, 75);
console.log("\n")

// Listing all books
// Calling the listAllBooks() method to list all books which will show us all the books in the library
myBookShop.listAllBooks();
console.log("\n")

// Removing a book
// Calling the removeBook() method to remove a book

myBookShop.removeBook("Beserk Manga");
myBookShop.listAllBooks();
console.log("\n")

// Updating book prices
// Calling the updateBookPrice() method to update the price of books

myBookShop.updateBookPrice("Naruto Manga", 2999);
myBookShop.updateBookPrice("One Piece Manga", 3199);
myBookShop.listAllBooks();
console.log("\n")

// Searching for books
// Calling the calculateTotalSales() method to console the total sales

myBookShop.searchBooks("Naruto");
myBookShop.searchBooks("One Piece");
myBookShop.listAllBooks("Bleach");
console.log("\n")

// Calculating total sales
// Calling the calculateTotalSales() method to console the total sales

myBookShop.calculateTotalSales();
console.log("\n")
