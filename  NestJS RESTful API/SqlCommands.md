Server [localhost]: psql -U postgres -h localhost

username: postgres

createdb transportation 
psql // gets you into the psql command line 
\c transportation

CREATE TABLE cars 
(id SERIAL, make TEXT, model TEXT, miles INT);

INSERT into cars values 
(DEFAULT, 'subaru', 'outback', 3420);
INSERT into cars values 
(DEFAULT, 'honda', 'passport', 27);
INSERT into cars values 
(DEFAULT, 'volvo', 'XC40', 33000);

select * from cars;