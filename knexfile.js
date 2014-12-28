module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'kalamata_sample',
      user:     'kalamata_sample_user'
    },
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations'
    }
  }

};
