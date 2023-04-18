import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../dbConnection.js";



const userModel= sequelizeConnection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:  DataTypes.STRING,
    email: {
        type:DataTypes.STRING,
        unique: true
    },
    age:DataTypes.INTEGER
},{
    timestamps: true
})

export default userModel;