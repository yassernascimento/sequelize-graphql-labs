const { Sequelize } = require("sequelize");

const generateUri = () => {
  const user = "yassernascimento";
  const password = "";
  const host = "localhost";
  const port = "5432";
  const databaseName = "yassernascimento";

  return `postgres://${user}:${password}@${host}:${port}/${databaseName}`;
};

const sequelize = new Sequelize(generateUri(), {
  dialect: "postgres",
  sync: true,
  logging: false,
  define: {
    underscored: false,
    freezeTableName: true,
    timestamps: false,
  },
});

exports.checkConnection = () => sequelize.authenticate();
exports.database = async () => sequelize;
