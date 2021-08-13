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

# Creating & Inserting into Collections
- Let’s start by looking at a JavaScript object that we want to insert into a users collection.
* { name: "james", email: "james@sololearn.com", age: 28 }
- We can insert an object into a collection by using an insertOne() statement.
* db.usersCollection.insertOne()

** db.usersCollection.insertOne({ name: "james", email: "james@sololearn.com", age: 28 })

- Mongo also allows us to insert other data types such as arrays! For example we could insert a list of our users favorite fruits!

* db.usersCollection.insertOne({
   name: "james",
   email: "james@sololearn.com",
   age: 28,
   favoriteFruits: [ "apples", "grapes"]
 });

# Selecting Documents
- db.usersCollection.find({ name: "james"})
* 
{
  _id: ObjectId("5099803df3f4948bd2f98391"),
  name: "james",
  email: "james@sololearn.com",
  age: 28
}

# Multi
- db.collectionName.find({name: "james", age: 23})

# Updating Documents

db.usersCollection.update(
  { name: "james" },
  {
    $set: {
      age: 45
    }
  }
)

--- When updating a document we use $set to tell MongoDB what fields need to be updated and what value to set them to.

# Deleting Documents
- db.usersCollection.deleteOne( { "_id" : ObjectId("5099803df3f4948bd2f98391") } );

* When deleting a document in mongoDB we can call .deleteOne() to delete a single document or .deleteMany() to delete multiple.





