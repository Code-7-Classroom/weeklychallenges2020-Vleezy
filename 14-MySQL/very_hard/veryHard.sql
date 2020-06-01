-- Very Hard: Copy the table from your Very Easy Challenge 
-- Write a query to add in three cars at once 
-- Write a query to add in prices and colors for each of these cars 
-- Write a query to put the Make and Model together in one column 
-- Create a new query that adds an additional column to the results to show how many cars have the same Make.

DROP DATABASE IF EXISTS carList2;
CREATE DATABASE carList2;

USE carList2;
CREATE TABLE cars (
id INT AUTO_INCREMENT PRIMARY KEY,
carMake VARCHAR(255),
carModel VARCHAR(255),
carYear INT,
carPrice INT,
carColor VARCHAR(255)
);

INSERT INTO cars(carMake, carModel, carYear, id) VALUES ('Honda','Accord',2010 ,1),('Honda','Civic', 2012, 2),('Honda','CR-V', 2009 ,3);

SELECT*FROM cars;
