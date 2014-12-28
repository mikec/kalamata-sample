kalamata-sample
---------------

A basic node.js project using [kalamata](https://github.com/mikec/kalamata)


Set it up
=========

Run postgres. [Postgres.app](http://postgresapp.com/) is the easiest way to get it up and running.

`grunt setup` to create the database with seed data

`grunt` to run the node server

browsing to `http://localhost:9999/users` should display user data


Tear it down
============

`grunt teardown` will remove the database