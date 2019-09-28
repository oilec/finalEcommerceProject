-- Customers Table 

CREATE DATABASE final_project;

USE final_project;

CREATE TABLE Customers
(customerID INT NOT NULL AUTO_INCREMENT, 
customerFirstName VARCHAR(100) NOT NULL , 
customerLastName VARCHAR(100) NOT NULL,  
customerPhoneNumber VARCHAR(10) NOT NULL,  
customerEmail VARCHAR(150) NOT NULL,
PRIMARY KEY(customerID));

INSERT INTO Customers(customerFirstName, customerLastName, customerPhoneNumber, customerEmail)
VALUES
('Harjrah', 'Henderson', '7045345768', 'hhender175@gmail.com'),
('Alia', 'Dalby', '9804566523', 'alia.dal@gmail.com'),
('Jake', 'Laing', '7045345768', 'hhender175@gmail.com'),
('Kirby', 'Zavala', '8032457624', 'kirbykirby@yahoo.com'),
('Crystal', 'Dowling', '8775190951', 'crystowling@gmail.com'),
('Mysha', 'Ferreira', '9802890505', 'ferreiramy@hotmail.com'),
('Astrid', 'Oconnell', '7044075447', 'asoconnell@gmail.com'),
('Huw', 'Clarkson', '7046522455', 'clarkson111@gmail.com'),
('Israr', 'Ventura', '9806789102', 'iceventura95@outlook.com'),
('Eliana', 'Tierney', '8075234444', 'thetierney@gmail.com');


-- Products Table

CREATE TABLE Products
(productID INT NOT NULL AUTO_INCREMENT, 
productName VARCHAR(150) NOT NULL, 
productImage VARCHAR(255),
productDescription VARCHAR(200),
productType VARCHAR(100),  
productQuantity INT NOT NULL,  
PRIMARY KEY(productID));

INSERT INTO Products(productName, productImage, productDescription, productType, productQuantity)
VALUES
('Blond Vinyl', 'https://static1.squarespace.com/static/57aa9c64e58c62f754f3745b/t/583c5de220099e25d0af10f5/1480351214888/', 'BLOND 2XLP BLACK FRIDAY EXCLUSIVE BLACK VINYL', 'Vinyl', 55),
('Endless Vinyl', 'http://exclaim.ca/images/frank_12.jpg', 'ENDLESS VINYL, RELEASED 2018 ALONGSIDE BLOND', 'Vinyl', 33),
('Channel Orange Vinyl', 'https://d3c1jucybpy4ua.cloudfront.net/data/47922/main_article/s.png?1471590885', 'CHANNEL ORANGE VINYL, RELEASED 2012, DEF JAM RECORDS', 'Vinyl', 41),
('Nostalgia Ultra Vinyl', 'https://d2h1pu99sxkfvn.cloudfront.net/b0/4515751/455909403_XaB8Hw3Ino/P6.jpg', 'NOSTALGIA ULTRA VINYL, REALEASED 2011, MIXTAPE BY FRANK OCEAN"', 'Vinyl', 52),
('Boys Dont Cry Magazine Reissue', 'https://cdn.shopify.com/s/files/1/0847/8186/products/IMG_0032_3eb6de46-449b-442c-bc32-4c15daa49354_1200x.jpg?v=1550259024', 'LIMITED EDITION RELEASE “BOYS DON’T CRY”, A MAGAZINE BY FRANK OCEAN 2016', 'Print', 61),
('Blonded Radio Double Sided Poster', 'https://cdn.shopify.com/s/files/1/0847/8186/products/fo-poster-0_1200x.jpg?v=1551054026', '24in x 36in. PRINTED IN THE USA', 'Print', 15),
('Blond Crewneck', 'https://i.etsystatic.com/18766985/r/il/8a4d35/1676048326/il_1588xN.1676048326_o90i.jpg', 'BLOND EMBRIODED CREWNECK, WHITE', 'Clothes', 37),
('Channel Orange Crewneck', 'https://i.etsystatic.com/18766985/r/il/9ff98d/1784588725/il_1588xN.1784588725_60qv.jpg', 'CHANNEL ORANGE EMBRIODED CREWNECK, ORANGE', 'Clothes', 46),
('Nostalgia Ultra Crewneck', 'https://i.etsystatic.com/18766985/r/il/06d73e/1737133500/il_1588xN.1737133500_9rch.jpg', 'NOSTALGIA ULTRA EMBRIODED CREWNECK, GREEN', 'Clothes', 40),
('Frank Ocean T-shirt', 'https://i.etsystatic.com/19948496/r/il/9507a4/1933455800/il_1588xN.1933455800_tbms.jpg', 'FRANK OCEAN INSPIRED T-SHIRT, COLLAGE PICTURES, BLUE', 'Clothes', 39),
('Frank Ocean T-shirt', 'https://i.etsystatic.com/19948496/r/il/061d7e/1980992777/il_1588xN.1980992777_3686.jpg', 'FRANK OCEAN INSPIRED T-SHIRT, COLLAGE PICTURES, ORANGE', 'Clothes', 21),
('Frank Ocean T-shirt', 'https://i.etsystatic.com/19948496/r/il/4302d7/1980993219/il_1588xN.1980993219_496w.jpg', 'FRANK OCEAN INSPIRED T-SHIRT, COLLAGE PICTURE', 'Clothes', 42);

-- Price Table

CREATE TABLE Price
(priceID INT NOT NULL AUTO_INCREMENT, 
productPrice INT NOT NULL,
productID INT NOT NULL,
PRIMARY KEY(priceID));

INSERT INTO Price(productPrice, productID)
VALUES 
(80, 1),
(70, 2),
(70, 3),
(60, 4),
(45, 5),
(30, 6),
(35,7),
(35, 8),
(35, 9),
(22, 10),
(22, 11),
(22, 12);

