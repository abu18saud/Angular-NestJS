# ORM stands for:
- Object Relational Mapping

# SQL
db.query("SELECT * FROM users");

# Which of the following is NOT a downside of using raw queries to communicate with our database?
- It’s harder to reuse code

# Which of the following is a reason to NOT use an ORM for your project?
- It hasn’t been updated in 2 years

# TypeORM is a flexible programming technique that can work with many different databases.
- True

# Finish the CLI command below so that we properly install TypeORM.
- npm install typeorm

# Complete the code below to create a connection to a postgreSQL database.
const connection = await createConnection({

  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your-db-username",
  password: "your-password",
  database: "your-db"
});

# In order to tell TypeORM where it can find our entities we pass an additional entities key to:
- createConnection

----------- Creating an Entity

# Complete the code below.
@Entity()
export class BlogPost {

  @PrimaryGeneratedColumn()
  id : number;

  @Colmn()
  content: string;
}

# In TypeORM we can specify that an id column is auto generated using which of the following decorators?
- @PrimaryGeneratedColumn

# Complete the code below so we insert a new book title.

const book = new Book();
book.title = "The great adventure";
await repository.save(book);

# Complete the code below so we select one book with the title “The Hunger Games”.

const result = await
bookRepository.findOne
(
  {where: {title: "The Hunger Games"}}
);

# Reorder the flow of updating data using TypeORM:
- Find the user with .find() or .findOne()
- Change the attribute in TypeScript
- Save the record with .save()

# Complete the code below so that we delete the book with the title “TS 101”.

const book = await bookRepository.findOne({where: {title: "TS 101"}});
await repository.delete(book.id);

----- Quiz

# ORM stands for:
- Object Relational Mapping

# Complete the code below so that we update the user with the id 3.
- const myUser = await repository.findOne({where: {id: 3}});
myUser.email = "kevin@sololearn.com";
await repository.save(myUser);

# Which of the following is NOT an advantage of using an ORM?
- Direct control over your queries

# Complete the code below so that we insert a new blog post.
const post = new Post();
post.title = "new post";
post.content = "my very first post!";
await repository.save(post);

# When defining an entity in TypeORM we can use which of the following to define our id (primary key that is auto generated)?
- PrimaryGeneratedColumn()
