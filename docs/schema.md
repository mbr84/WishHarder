# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null,
introduction| text      | not null, (still working out the details of where and how to store body)
author_id   | integer   | not null, foreign key (references users), indexed
category_id | integer   | not null, foreign key (references categories), indexed
complete    | boolean   | not null, default: false
duration    | interval  | not null,
goal        | integer   | not null,
pledged     | integer   | not null

## rewards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null,
value       | integer   | not null,
description | text      | not null,
project_id  | integer   | not null, foreign key (references projects), indexed
limit       | integer   | not null

## rewardings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
backer_id   | integer   | not null, foreign key (references users), indexed
reward_id   | string    | not null, foreign key (references rewards), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
