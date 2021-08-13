# In this module, we will be looking at two types of databases.  Relational and:
- Non-Relational

# Information stored in volatile storage does not persist, while information stored in non-volatile storage does.
- True

# What are the advantages of using databases?
- automated backups
- protection from deleting data
- data persisting through restarts

# How do non-relational databases store entries?
- Using key/value pair

# Columns store the information for each entry of the table.
- False

# Non-relational databases store information in:
- collections

# You’ve been asked to build a small application for a local hospital that allows them to manage medical records. These medical records are going have inconsistent data for both names and titles. What type of database would be best for this project?
- Non-Relational

# What does SQL stand for?
- Structured Query Language

# SQL principles include:
- all SQL statements must end in a semicolon
- SQL convention is to write in all upper case

# Complete the code below.
- CREATE TABLE posts
  (id SERIAL,
  title VARCHAR(255),
  email TEXT);

# Complete the code to insert a user into a table:

INSERT INTO users (name, email, age)
 VALUES (‘james’, ‘james@sololearn.com’, 30);

# How would you select all information in the users table?

SELECT * FROM users;

# Complete the code below so that we will get back a user with the name 'Troy'.
- SELECT * FROM users WHERE name= 'Troy';

# Complete the code below so that we update the rows email.
UPDATE users SET
 email = 'kev@sololearn.com'
WHERE id = 6;

# Rearrange the code to delete users with name Troy from the table:

DELETE FROM users WHERE name = 'Troy';