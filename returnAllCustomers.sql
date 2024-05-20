/*This sql querry prints out all list of customers, along with any orders they have placed*/

SELECT Customers.*, Orders.OrderID, Orders.CustomerID, Orders.OrderDate
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
