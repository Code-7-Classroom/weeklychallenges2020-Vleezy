DROP DATABASE IF EXISTS carList;
CREATE DATABASE carList;

USE carList;
CREATE TABLE cars (
id INT AUTO_INCREMENT PRIMARY KEY,
carMake VARCHAR(255),
carModel VARCHAR(255),
carYear INT
);

INSERT INTO cars(carMake, carModel, carYear, id) VALUES ('Honda','Accord',2010 ,1),('Honda','Civic', 2012, 2),('Honda','Genesis', 2009 ,3);

SELECT*FROM cars;