import { Request, Response } from 'express'
import { ProductService } from './product.service'
import { StockService } from './stock.service'
 
class ProductController{    
    async create(req: Request, res: Response) {
        const product = await new ProductService().create(req.body)

        return res.status(200).json(product)
    }

    async list(req: Request, res: Response) {
        const product = await new ProductService().list()

        return res.status(200).json (product)
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id)

        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const product = await new ProductService().update(req.params.id, req.body)

        return res.status(200).json(product)
    }

    async delete(req: Request, res: Response) {
        await new ProductService().delete(req.params.id)

        return res.status(200).json("Successfully deleted Product!")
    }

    async getStock(req: Request, res: Response) {
        const stock = await new StockService().getStock()

        return res.status(200).json(stock)
    }

    async randomProducts(req: Request, res: Response) {
        const randomList = await new ProductService().randomProducts()

        return res.status(200).json(randomList)
    }

    async stockValorTotal(req: Request, res: Response) {
        const stockTotal = await new StockService().stockValorTotal()

        return res.status(200).json(stockTotal)
    }

    async writeFileProducts(req: Request, res: Response) {
        await new ProductService().writeProducts()

        return res.status(200).json("Arquivo Escrito")
    }

    async readFileProducts(req: Request, res: Response) {
        const FileList = await new ProductService().readProducts()

        return res.status(200).json(FileList)
    }
   /*public async create(req: Request, res: Response) {
        const product = await productService.createProductList(req.body)

        return res.status(201).send(product)
    }

    public async find(req: Request, res: Response) {
        //const products = await productService.findProducts()

        //return res.json(products)
    }*/
}

export default new ProductController()