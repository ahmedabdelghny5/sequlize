import userModel from "../../DB/models/user.model.js"
import { Op } from "sequelize"

//add user
export const addUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body)
        res.json(user)
    } catch (error) {
        res.json({ msg: "error", error })
    }
}
// all users
export const allUsers = async (req, res) => {
    // const users = await userModel.findAll({})
    const users = await userModel.findAll({ attributes: ['name', 'email', 'id'] })
    // const users=await userModel.findAll({attributes: { exclude: ['name'] }})
    // const users = await userModel.findAll({
    //     where: { [Op.or]: [{ id: 1 }, { name: "ahmed" }] }
    // })
    if (users.length > 0) {
        res.json(users)
    } else {
        res.json({ msg: "not found" })
    }
}
//oneUser
export const getUser = async (req, res) => {
    const user = await userModel.findOne({ where: { id: req.body.id } })
    if (user) {
        res.json(user)
    } else {
        res.json({ msg: "not found" })

    }

}
// age<30 name start "a"
export const allUser = async (req, res) => {
    const users = await userModel.findAll({
        where: { age: { [Op.lte]: 30 }, name: { [Op.like]: 'a%' } }
    })
    // const users = await userModel.findAll({
    //     where: { [Op.and]:[{age: { [Op.lte]: 30 }},{ name: { [Op.like]: 'a%' }}] }
    // })
    res.json(users)
}
//list of users
export const InUser = async (req, res) => {
    const { id } = req.query
    const users = await userModel.findAll({
        where: { id: { [Op.in]: [...id]} }
    })
    res.json(users)
}
//update user
export const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body
        const isExist = await userModel.findOne({ where: { email } })
        console.log(isExist);
        if (isExist?.email == email) {
            await userModel.update({ name, email }, { where: { email } })
            // console.log(user);
            res.json({ msg: "success" })
        } else {
            res.json({ msg: "not avail" });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: "error", error: error });

    }

}
// delete user
export const daleteUser = async (req, res) => {
    try {
        const { id } = req.body
        const isExist = await userModel.findOne({ where: { id } })
        console.log(isExist);
        if (isExist) {
            if (isExist.id == id) {
                await userModel.destroy({ where: { id } })
                res.json({ msg: "deleted" })
            } else {
                res.json({ msg: "not avail" });

            }
        } else {
            res.json({ msg: "not found" });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: "error", error: error });

    }
}

