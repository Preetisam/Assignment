const sequelize = require("sequelize");
const instance = new sequelize(
    "ecomm_db1",
    "root",
    "blessy@123",
    {
        host : "localhost",
        dialect: "mysql",
        operatorsAliases: 0,
        pool: {
            max: 5,
            min: 0,
            acquire:30000,
            idle: 10000
        }
    }
);
module.exports = instance;