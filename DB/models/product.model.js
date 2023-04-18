import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../dbConnection.js";

import userModel from "./user.model.js";


const productModel = sequelizeConnection.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: DataTypes.STRING
}, {
    timestamps: true
})

userModel.hasMany(productModel,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})

productModel.belongsTo(userModel)

export default productModel;