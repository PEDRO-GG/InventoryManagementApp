-- After logging in to DB 'postgres' by user 'postgres' with password, 'password', run the following commands

 CREATE DATABASE inventory_management_app;

-- Then connect to it using: \c inventory_management_app

-- Then create the 'products' table

CREATE TABLE products(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(12,2) NOT NULL,
    status BOOLEAN,
    total_sold INTEGER, 
    total_revenue NUMERIC(12,2)
);

-- Example of inserting into the 'products' table

INSERT INTO products (name, price, status, total_sold, total_revenue) VALUES ('PS5', 499.988, True, 1004, 502000.7777);

-- Query to retrieve all the products in 'products' table

SELECT * FROM products; 