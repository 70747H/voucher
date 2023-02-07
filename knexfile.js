module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection:
      process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/db',
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    },
    debug: true,
    pool: { min: 0, max: 7 },
    acquireConnectionTimeout: 10000
  },
  test: {
    client: 'pg',
    useNullAsDefault: true,
    connection:
      process.env.DATABASE_URL ||
      'postgresql://user:pass@localhost:5433/db_test',
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations'
    },
    seeds: {
      directory: 'seeds'
    },
    pool: { min: 0, max: 7 },
    acquireConnectionTimeout: 10000
  }
}
