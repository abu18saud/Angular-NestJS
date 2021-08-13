# Creating Tables

CREATE TABLE users (id SERIAL, name TEXT, email VARCHAR(255), age INT);

# Inserting Entries
INSERT INTO users (name, email, age) VALUES (‘james’, ‘james@sololearn.com’, 30);

# Selecting Data

SELECT id, name, email, age FROM users; 

# Where Clauses
- SELECT * FROM users WHERE id = 1;
- SELECT * FROM users WHERE age > 25;
- SELECT * FROM users WHERE age > 25 AND name = 'david';

# Updating Data
- UPDATE users SET name = ‘troy’, age = 35 WHERE id = 3;
# If we want to update multiple records we can do that by using a different WHERE clause:
- UPDATE users SET age = 42 WHERE age = 24; - (This will update ALL users that have an age of 24 to 42.
)

# UPDATE statements in SQL allow us to update one or multiple rows based off of a condition.

# Deleting Data
-  DELETE FROM users WHERE id = 3;
- DELETE FROM users WHERE name = ‘david’;




