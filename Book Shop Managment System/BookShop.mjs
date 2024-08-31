// This will import the welcomeMessage function from the helpers.mjs file
import { welcomeMessage } from './helpers.mjs';

// A new class is created as BookShop
class BookShop {

    constructor() {
        // A new empty array is created to store the books in the library
        this.library = [];
        // Display the welcome message when a new BookShop is created when the constructor is called
        welcomeMessage(); 
    }

    // A new method is created to add books in to the library where it will take four parameters of title, author, price, quantity and a book object is created which will store the data of the book and push it into the library array
    addBook(title, author, price, quantity) {
        const book = { title, author, price, quantity };
        this.library.push(book);
        console.log(`Added Book : ${title} by ${author}`);
    }
    
    //  A new method is created to list all the books in the library where it will return all the lists of books
    listAllBooks() {
        console.log("Listing all books in library: ");
        this.library.forEach(book => 
            console.log(`${book.title} by ${book.author} - "Rs." ${book.price}, Quantity: ${book.quantity}`)
        );
    }

    // A new method is created to remove books from the library and it will take one parameter of title and it will remove the book from the library
    removeBook(title) {
        this.library = this.library.filter(book => book.title !== title);
        console.log(`Removed Book : ${title}` + "\n" );
    }

    // A new method is created to update the price of the books and it will take two parameters of title and newPrice and it will update the price of the book in the library
    updateBookPrice(title, newPrice) {
        this.library = this.library.map(book => 
            book.title === title ? { ...book, price: newPrice } : book
        );
        console.log(`Updated price for book: \n${title}`  + `New price: ${newPrice}` + "\n");
    }

    // A new method is created to search for books in the library and it will take one parameter of searchTerm and it will search for the books in the library
    searchBooks(searchTerm) {
        const results = this.library.filter(book => 
            book.title.includes(searchTerm) || book.author.includes(searchTerm)
        );
        console.log(`Search results for "${searchTerm}":`, results);
        return results;
    }

    // A new method is created to calculate the total sales and it will return the total sales in the library
    calculateTotalSales() {
        const totalSales = this.library.reduce((total, book) => 
            total + (book.price * book.quantity), 0
        );
        console.log(`Total sales: $${totalSales.toFixed(2)}` + "\n");
        return totalSales;
    }

}

// This will export the BookShop class for importing on to other files
export default BookShop;
