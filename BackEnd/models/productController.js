'use strict'

const firebase = require('../db')
const Product = require('./product')

const firestore = firebase.firestore();

const addProduct = async (req, res, next) => {
    try {
        const data = req.body;
        const product = await firestore.collection('products').doc().set(data);
        res.send('record saved succesfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
}


const getAllProducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('products');
        const data = await products.get();
        const ProductsArray = [];
        if(data.empty) {
            res.status(404).send('No product found');
        }else {
            data.forEach(doc => {
                const product = new Product (
                    doc.id,
                    doc.data().name,
                    doc.data().price,
                    doc.data().info,
                    doc.data().longinfo,
                    doc.data().category,
                    doc.data().photo,

                );
                ProductsArray.push(product)
            })
            res.send(ProductsArray)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getProduct = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const product = await firestore.collection('products').doc(id);
        const data = await product.get();
        if(!data.exists) {
            res.status(404).send('No product found');
        } else {
            res.send(data.data())
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}


const updateProduct = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const data = req.body
        const product = await firestore.collection('products').doc(id);
        await product.update(data);
        res.send('Product Updated Succesfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteProduct = async (req, res, next) => {
    try {
    const id = req.params.id
    await firestore.collection('products').doc(id).delete();
    res.send('Product Deleted Succesfully')
} catch (error) {
    res.status(400).send(error.message)
}
}


const getCategProds = async (req, res, next) =>{
    console.log(req.params.category)
    try {
        const categ = req.params.category
        const data = await firestore.collection('products').where('category', '==', categ).get()
        const ProductsArray = []
        data.forEach(doc => {
            const product = new Product (
                doc.id,
                doc.data().name,
                doc.data().price,
                doc.data().info,
                doc.data().longinfo,
                doc.data().category,
                doc.data().photo,

            );
            ProductsArray.push(product)
        })
        res.send(ProductsArray)
    } catch (error) {
        res.status(400).send(error.message)
    }
    }


module.exports = {
    addProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getCategProds
}
