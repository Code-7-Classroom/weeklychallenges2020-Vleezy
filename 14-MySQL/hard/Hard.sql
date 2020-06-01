-- TO BE CONTINUED HARD
-- Hard: Make a copy of your Medium Challenge 
-- Write out the queries that would add the director’s First Name and Last Name into two separate columns. 
-- Create a query that puts the names together. 
-- Create a query to put the list in alphabetical order by the last name from A-Z 
-- After you order the list, remove the Movies where the Last Name ends with ”R-Z” 
-- Write a query where the first three appear

DROP DATABASE IF EXISTS movieList2;
CREATE DATABASE movieList2;
DROP TABLE IF EXISTS movies2;

USE movieList2;
CREATE TABLE movies2 (
id INT AUTO_INCREMENT PRIMARY KEY,
titleName VARCHAR(255),
releaseDate DATE,
rating INT
);

INSERT INTO movies2(titleName, releaseDate, rating ,id) VALUES 
('Scooby Doo', '2010-11-08', 3, 1),('Batman', '2020-07-30', 4, 2),
('Superman', '2020-09-07', 5, 3),('Scream', '1997-06-13', 3, 4),
('Sonic', '2018-02-09', 7, 5),('Pokemon', '1994-12-08', 9, 6),
('Digimon', '1992-04-14', 6, 7),('Titanic', '1990-06-21', 10, 8),
('Invisible', '2005-06-11', 10, 9),('Dark Matter', '2017-12-13', 10, 10);


SELECT titleName FROM movies2
WHERE titleName LIKE '%s%';


SELECT*FROM movies2;
