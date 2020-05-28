DROP DATABASE IF EXISTS bookList;
CREATE DATABASE bookList;

USE bookList;
CREATE TABLE book (
id INT AUTO_INCREMENT PRIMARY KEY,
titleName VARCHAR(255),
firstName VARCHAR(255),
lastName VARCHAR(255),
publishDate DATE
);

INSERT INTO book(titleName, firstName, lastName, publishDate, id) VALUES 
('To Kill a Mockingbird','Harper', 'Lee', '1960-07-11' ,1),('1984','George','Orwell', '1949-06-08', 2),
('Harry Potter and the Philosopher\'s Stone','J.K.','Rowling', '1997-06-26', 3),('The Lord of the Rings','J.R.R','Tolkien', '1954-07-29', 4),
('The Great Gatsby','F.Scott', 'Fitzgerald', '1925-04-10' ,5);

SELECT*FROM book;


