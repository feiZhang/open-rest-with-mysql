const env = process.env;

module.exports = {
  db: {
    host: env.ORT_HOST || '127.0.0.1',
    port: env.ORT_PORT || 3306,
    name: env.ORT_NAME || 'open_rest',
    encode: {
      set: 'utf8',
      collation: 'utf8_general_ci',
    },
    user: env.ORT_USER || 'root',
    pass: env.ORT_PASS || '',
    dialect: 'mysql',
    dialectOptions: {
      supportBigNumbers: true,
      charset: 'utf8mb4',
    },
    logging: false,
    define: {
      underscored: false,
      freezeTableName: true,
      syncOnAssociation: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
      engine: 'InnoDB',
    },
    syncOnAssociation: true,
    pool: {
      min: 2,
      max: 10,
      idle: 300 * 1000,
    },
  },
};
