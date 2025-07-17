INSERT INTO users (username, email, password) VALUES ('admin', 'admin@example.com', 'password');

INSERT INTO restaurants (name, address, phone, email) VALUES ('Restaurant 1', '123 Main St', '1234567890', 'restaurant1@example.com');

INSERT INTO menu_items (restaurant_id, name, description, price) VALUES (1, 'Item 1', 'Description 1', 10.00);

INSERT INTO restaurent_customers (restaurant_id, name, email, phone) VALUES (1, 'Customer 1', 'customer1@example.com', '1234567890');

INSERT INTO orders (customer_id, restaurant_id, total_amount, status) VALUES (1, 1, 10.00, 'pending');