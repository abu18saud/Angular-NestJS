# What is an ORM
- ORM (Object Relational Mapping) is a technique that allows you to communicate with a database using an object oriented pattern.

# Introduction to TypeORM
- TypeORM is an ORM for TypeScript that supports both SQL and NoSQL.

# Installing TypeORM
- TypeORM is a npm module so we can install it with the npm CLI. We can also install it using yarn!

# Creating a Connection
import { createConnection, Connection } from "typeorm";

const connection = await createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your-db-username",
  password: "your-password",
  database: "your-db"
});

# Loading Entities
import { createConnection, Connection } from "typeorm";

const connection = await createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your-db-username",
  password: "your-password",
  database: "your-db",
  entities: ["entity/*.js"]
});

# Creating an Entity
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;
}

* We start by telling TypeORM that we’re defining an entity by prefacing our class with an @Entity decorator. Next, we name our class (in our case User). Then we can define the columns that exist in our table and the datatypes we want them to be associated with in TypeScript. We use @Column to annotate each column we’re creating. For our Id, we specify that it’s a primary key and is auto generated for us by using @PrimaryGeneratedColumn().

# ملاحظة هامة
- We don’t need to worry about SQL datatypes when using TypeORM. It will automatically translate a TypeScript datatype into a SQL datatype. However, If we want more control over what datatype it uses in SQL you can pass additional options to the @Column decorator.

# ملاحظة أكبر من المهمة
- "If we want more control over what datatype it uses in SQL you can pass additional options to the @Column decorator. " For example: @Entity("users") export class User { @Column({ primary: true }) id: number; @Column({ type: "varchar", length: 200, unique: true }) firstName: string; @Column({ nullable: true }) lastName: string; @Column({ default: false }) isActive: boolean; } As you can see... You can add arguments in decorators as shown above!

# TypeORM Repositories
const repository = getRepository(User);
* Repositories allow us to query for one specific Entity. We can’t query for other entities except the one associated with the repository.

# Inserting Data
const user = new User();
user.name = "Troy";
user.email = "troy@sololearn.com";
user.age = 25;
await repository.save(user);

* Here we instantiate a new user like you would with any other TypeScript class! Then we change the attributes of the user to be what we want to save (such as user.age = 25). Finally we await repository.save(user); This will save the user and won’t run any code after this line until that user is saved!

# Selecting Data

const results = await repository.find({where: {name: "Troy"}});

- If we want just one user we can use findOne instead.

const result = await repository.findOne({where: {name: "Troy"}});

* In TypeORM we can call the find() method on a repository to select data from an entity.

# Updating Data
const myUser = await repository.findOne({where: {name: "Troy"}});
myUser.email = "t@sololearn.com";
await repository.save(myUser);

* In TypeORM we can update rows by using find() or .findOne() to find the row(s) we want to update, then change the attributes in TypeScript, then save the record with .save().

# Deleting Data

const myUser = await repository.findOne({where: {name: "Troy"}});
await repository.delete(myUser.id);

* For Multi
await repository.delete({name: "Troy"});


# ما الذي يمكننا تمريره في دالة Delect
We can use .delete() to delete rows in TypeORM. We pass it an id, an array of ids, or an object specifying what conditions to delete by.






