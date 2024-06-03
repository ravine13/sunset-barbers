# sunset-barbers
db.diagram


# image

# Barbers Table:

barber_id is the primary key and is auto-incremented.
Other columns store the barber's personal information.
# Customers Table:

customer_id is the primary key and is auto-incremented.
Other columns store the customer's personal information.
# Notifications Table:

notification_id is the primary key and is auto-incremented.
recipient_id is a foreign key, which references the user_id in the Users table.
# Users Table:

user_id is the primary key and is auto-incremented.
This table stores user credentials.
Logout Table:

user_id is the primary key.
user_id references the user_id in the Users table.
# Services Table:

service_id is the primary key and is auto-incremented.
Other columns store the service details.
# Reviews Table:

review_id is the primary key and is auto-incremented.
customer_id and barber_id are foreign keys, referencing the customer_id in the Customers table and the barber_id in the Barbers table, respectively.
# Ratings Table:

rating_id is the primary key and is auto-incremented.
service_id and customer_id are foreign keys, referencing the service_id in the Services table and the customer_id in the Customers table, respectively.

# Images Table:

image_id is the primary key and is auto-incremented.
associated_barber_id and associated_service_id are foreign keys, referencing the barber_id in the Barbers table and the service_id in the Services table, respectively.
# Bookings Table:

booking_id is the primary key and is auto-incremented.
customer_id, barber_id, and service_id are foreign keys, referencing the customer_id in the Customers table, the barber_id in the Barbers table, and the service_id in the Services table, respectively.