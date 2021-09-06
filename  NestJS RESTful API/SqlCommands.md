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


# لإظهار معلومات المنفذ
\conninfo 



# Add New Table

CREATE TABLE flights (id SERIAL, 
origin VARCHAR(20), 
destination VARCHAR(20), 
flightNumber INT, 
depart TIMESTAMP WITH TIME ZONE,
arrive TIMESTAMP WITH TIME ZONE, 
nonstop BOOLEAN);
_________________________
INSERT into flights 
(id,origin,destination,depart, arrive,nonstop,flightNumber)
values 
(DEFAULT, 'phoenix', 'Denver', date('20130101'),date('20130101'), false,23);
_________________________
INSERT into flights 
values 
(DEFAULT, 'phoenix', 'Denver', date('20130101'),date('20130101'), false,23);
_________________________
INSERT into flights values 
(DEFAULT, 'Jackson', 'Chicago', date('20200101'),date('20200101'), true, 234);
_________________________
INSERT into flights values 
(DEFAULT, 'Atlanta', 'New York', date('20210101'),date('20210101'), true, 456);

# Note
In PostgreSQL, TIMESTAMP WITH TIME ZONE corresponds to a date / time object in JavaScript .You can take a Date( ) object in JavaScript (as in const currentDate = new Date( ) ), which will give you and directly deposit that value into a PostgreSQL database.

- SQL's DISTINCT keyword can be used to return all unique instances of a value within a database column while removing duplicates.
