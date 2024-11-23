import { DataTypes } from "sequelize";
import sequelize from "./config/database";

const verses = sequelize.define('verses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    chapter_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default verses;