import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
   dialect: 'postgres',
   host: 'localhost',
   username: 'postgres',
   password: 'tobcat17',
   logging: false,
});

export default sequelize;