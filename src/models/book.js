import { DataTypes } from 'sequelize';
import sequelize from './config/database';
 
const books = sequelize.define('books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abbreviation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    testament: {
        type: DataTypes.ENUM,   
        values: ['old', 'new'],
    }
})

export default books;