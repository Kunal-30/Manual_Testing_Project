
## **Book Shop Management System**
# *Read Me*

 
## Introduction 
The Book Shop Management System is a simple, console-based application designed to manage a bookstore's inventory. It provides essential functionalities for adding, removing, updating book details, searching for books, and calculating total sales. This project is ideal for small to medium-sized bookstores that need a lightweight inventory management tool. 
 
## Project Type 
Backend 
 
## Deployed App 
• 	This project is a console-based application and does not have a deployed frontend or backend. It runs locally on your machine. 
 
## Directory Structure 
bash Copy code csweek/ 
|-- BookShop.mjs          # Main class for managing the bookshop 
|-- helpers.mjs           # Helper functions for the project 
|-- test.mjs              # Test file to demonstrate the functionality 
|-- package.json          # Project metadata and configuration 
 
 
## Video Walkthrough of the Project 
(No video walkthrough available as this is a console-based application) 
 
## Video Walkthrough of the Codebase 
(No video walkthrough available as this is a console-based application) 
 
## Features 
•	Add Books: Add new books to the inventory with title, author, price, and quantity. 
•	Remove Books: Remove books from the inventory by title. 
•	Update Book Price: Update the price of an existing book. 
•	Search Books: Search for books by title or author. 
•	List All Books: Display all books currently in the inventory. 
•	Calculate Total Sales: Calculate the total sales value based on the current inventory. 
 
## Design Decisions or Assumptions 
•	Book Title Uniqueness: The system assumes that book titles are unique to simplify operations like adding and removing books. 
•	In-Memory Storage: The current implementation stores all data in memory, meaning the data will be lost once the application is closed. 
•	Simple Search: The search functionality is based on a simple string match for book titles and authors. 
 
## Installation & Getting Started 
To run the Book Shop Management System on your local machine, follow these steps: 
1.	Clone the repository to your local machine. 
bash 
*Copy code* :- git clone <repository-url> 
cd csweek 
2.	Ensure you have Node.js installed. 
3.	Run the test file to see the Book Shop Management System in action: 
bash 
*Copy code* :- node test.mjs 
Usage 
•	The application begins by displaying a welcome message. 
•	Various methods from the BookShop class are tested in test.mjs to demonstrate the system's capabilities. 
 
## Credentials 
No authentication is required for this project as it is a simple console-based application. 
*APIs Used* 
This project does not use any external APIs. 
*API Endpoints* 
As this is a console-based application, there are no API endpoints available. 
 
 
## Technology Stack 
•	Node.js: A JavaScript runtime environment used for executing the application. 
•	JavaScript (ES Modules): The application is structured using ECMAScript Modules for modularity and reuse. 
 
