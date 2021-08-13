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

* noSQL
# What would be the mongoDB equivalent of a users table in SQL?
- User Collection

# Complete the coding statement below.
- db.usersCollection.insertOne
({ name: "james",
email: "james@sololearn.com",
age: 28 } )

# In mongoDB how is the _id field generated?
- It generates automatically

# Complete the code below so that we update the documents email field.
- db.usersCollection.update(
  { name: "james" },
  {
  $set: {
      email: "update@example.com"
    }
  }
)

# Which of the following allows you to delete documents in mongoDB? 
.deleteMany()
.deleteOne()


# Quiz


# noSQL is a type of non-relational database.
- True

# Complete the code below so that we update all documents with the age of 30.

db.usersCollection.update(
  { age: 30 },
  {
    $set: {
      email: “update@example.com”
    }
  }
)

# Which of the following is important to use to avoid deleting the wrong document?
- _id

# What is the difference between volatile and non-volatile storage?
- Non-volatile storage persists through restarts

# What’s the main difference between a Relational and Non-relational database?
- Relational databases enforce structure on you with columns and datatypes

# Which of the following is NOT a valid datatype to store strings in postgreSQL?
- STRING

# Complete the code below so that we select all users with an id that is greater than 20 and the name 'troy'.
- SELECT * FROM users
WHERE id > 20 AND
name = 'troy';