module.exports = {
  production: {
    username: 'site-musica',
    password: '#Gf47950103825',
    database: 'site-musica',
    host: 'site-musica.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
