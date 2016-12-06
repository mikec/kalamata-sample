module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    debug: true,
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
