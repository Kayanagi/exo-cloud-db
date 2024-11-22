const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgresql://db_client_js_u1mt_user:3US7GTYMzgu84Y84vrB1hKscreNqBOQo@dpg-ct03taq3esus7385ttg0-a.frankfurt-postgres.render.com/db_client_js_u1mt', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;