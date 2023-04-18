import { Op } from "sequelize"
import productModel from "../../DB/models/product.model.js"
import userModel from "../../DB/models/user.model.js"



export const addProduct = async (req, res) => {
    const product = await productModel.create(req.body)
    res.json(product)
}

export const getAllProductsFn = async (req, res) => {
    try {
        const myProducts = await productModel.findAll();
        if (myProducts.length > 0) {
            res.json({ Msg: "Done !", Data: myProducts });
        } else {
            res.json({ Msg: "not found"});
        }
    } catch (error) {
        res.json({ Msg: "Catch error !", error });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id, userId } = req.body
        const product = await productModel.update(req.body, {
            where: {
                [Op.and]: { id, userId }
            }
        })
        console.log(product);
        if (product) {
            console.log('ok');
            res.json({ Msg: "updated", Data: product });
        } else {
            res.json({ Msg: "not updated" });
            console.log(' no ok');

        }
    } catch (error) {
        console.log({ 'error': error });
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const { id, userId } = req.body
        const product = await productModel.destroy({
            where: {
                [Op.and]: { id, userId }
            }
        })
        console.log(product);
        if (product) {
            res.json({ Msg: "deleted", Data: product });
        } else {
            res.json({ Msg: "not deleted" });
        }
    } catch (error) {
        console.log({ 'error': error });
    }
}
export const allUserProd = async (req, res) => {
    try {

        // const product = await productModel.findAll({ include: ['user'] })
        const product = await productModel.findAll({ include: userModel })
        console.log(product);
        if (product) {
            res.json({ Msg: "done", Data: product });
        } else {
            res.json({ Msg: "not deleted" });
        }
    } catch (error) {
        console.log({ 'error': error });
    }
}
