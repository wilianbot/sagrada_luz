import { DataTypes } from "sequelize";
import sequelize from "./config/database";

const chapters = sequelize.define('chapters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        aloowNull: false
    },
    chapter: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default chapters;