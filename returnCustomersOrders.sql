/* This SQL statement prints out only the name of customers who have placed orders by connecting their OrderID to CustomerID*/

SELECT Customers.*
FROM  Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

/*This sql querry includes specific columns from both tables in the result */

SELECT Customers.CustomerID, Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
