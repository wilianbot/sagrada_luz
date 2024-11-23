import { DataTypes } from "sequelize";
import sequelize from "../config/database";
import Chapters from "./chapter";

const Books = sequelize.define("books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    aloowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  abbreviation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  testament: {
    type: DataTypes.ENUM,
    values: ["old", "new"],
  },
});

Books.hasMany(Chapters, { foreignKey: "book_id" });
Chapters.belongsTo(Books, { foreignKey: "book_id" });

export default Books;
