import { DataTypes } from "sequelize";
import sequelize from "./config/database";

const Verses = sequelize.define('verses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        aloowNull: false
    },
    chapter_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Verses;