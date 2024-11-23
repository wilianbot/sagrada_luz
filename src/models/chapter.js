import { DataTypes } from "sequelize";
import sequelize from "./config/database";
import Verses from './verse';

const Chapters = sequelize.define('chapters', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        aloowNull: false
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

Chapters.hasMany(Verses, { foreignKey: 'chapter_id' });
Verses.belongsTo(Chapters, { foreignKey: 'chapter_id' });

export default Chapters;