create database burgers_db;
use burger_db;
create table burgers(
id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR(30),
devoured BOOLEAN)
