import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`create table if not exists users (
ID serial primary key,
username varchar(255) ,
password varchar(255) 
);

create table if not exists messages(
  id serial primary key,
  username varchar(255) ,
  message varchar(255) ,
  likes int
);

insert into users (username,password) values
('jamie','adminpassword');

insert into messages (username,message,likes) values
('jamie','welcome',0);`);
