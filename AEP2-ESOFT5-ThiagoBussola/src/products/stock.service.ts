import ProductModel from './product.schema'

export class StockService{
    async getStock() {
        const productList = await ProductModel.find()

        const stockProducts = productList.map(item => {
            let stock = {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                valor_stock: item.quantity * item.price
            }
            return stock
        })
    
        return stockProducts
    }

    async stockValorTotal() {
        const stockList = await this.getStock()

        const valor_total = stockList.reduce((acumulador, item) => {
            return acumulador + item.valor_stock;
        }, 0);

        return valor_total
    }
}
