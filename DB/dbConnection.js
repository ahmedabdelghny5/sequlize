import { Sequelize } from "sequelize";

export const sequelizeConnection=new Sequelize('datanode','root',"",{
    host: "localhost",
    dialect:'mysql'
})

export const dbConnection = async()=>{
    return await sequelizeConnection.sync({alter:true,force:false})
    .then(res=>console.log("runing............. "))
    .catch(err=>console.log({msg:"error",err:err}))
}