import { writeFile, readFile } from 'fs/promises'
import ProductModel from './product.schema'
import { ProductType } from './types/product.types'

export class ProductService {
    

    async create(user: ProductType) {
        const createdProduct = await ProductModel.create(user)

        return createdProduct
    }

    async list() {
        const listedProducts = await ProductModel.find()

        return listedProducts
    }

    async find(id) {
        const findedProduct = await ProductModel.findById(id)

        return findedProduct
    }

    async update(id, dataToUpdate: ProductType) {
        const updatedProduct = await ProductModel.findOneAndUpdate({_id: id}, {
            name: dataToUpdate.name,
            quantity: dataToUpdate.quantity,
            price: dataToUpdate.price
        }, {new: true})

        return updatedProduct
    }

    async delete(id) {
        await ProductModel.findOneAndDelete({_id: id})
        return
    }

    async randomProducts(){
        const listProducts: any = await ProductModel.find()
        const randomQuantity = 4
            //if(randomQuantity > array.length) return ErrorMessages.INVALID_NUMBER_RANGE
            let randomProducts:any = []
            while(randomProducts.length < randomQuantity) {
                 let randomNumber: any = Math.floor(Math.random() * listProducts.length)
              if(!randomProducts.includes(listProducts[randomNumber])) {
                     randomProducts.push(listProducts[randomNumber])
              }
            }
            return randomProducts
    }

    async writeProducts() {
        const data = await ProductModel.find()
        try {
            writeFile('products.json', JSON.stringify(data, null, 2))
            
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async readProducts() {
        const productList = JSON.parse(await readFile('products.json', "utf-8"))
        //console.log(productList[5].price)
        return productList
    }
}