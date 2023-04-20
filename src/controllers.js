const products = [
   {
      id: 1,
      descricao: 'Coca cola 2lts',
      valor: 10.00,
      qtde: 10
   },
   {
      id: 2,
      descricao: 'Cerveja',
      valor: 5.80,
      qtde: 50
   },
   {
      id: 3,
      descricao: 'Agua',
      valor: 2.00,
      qtde: 5
   },
]

module.exports = {
    async createCart(request, response) {

      const { id, descricao, valor, qtde } = request.body

      const existsProducts = products.find(product => product.id === id)
      console.log(existsProducts)
      if (existsProducts) {
         return response.status(400).json({
            error: 'Produto ja cadastrado'
         })
      }

      const existsDescription = products.find(products => products.descricao.toLocaleLowerCase() === descricao.toLocaleLowerCase())
      if (existsDescription) {
         return response.status(400).json({
            error: 'Produto ja cadastrado'
         })
      }

      const product={
         id,
         descricao,
         valor,
         qtde
      }

      products.push(product)


        return response.json({ data: product })
     },

     async getListOfCart(request, response) {
      return response.json({ data: products })
     },

     async createUserCart(request, response) {

      const { item } = request.body

      for (const product of item) {
         const productExists = products.find(prd => prd.id === product.id)
         if (!productExists) {
            return response.status(400).json({
               error: 'Produto não encontrado'
            })
         }

      
          if (product.qtde > product.qtde) {
            return response.status(400).json({
               error: 'Quantidade não disponivel'
            })
          }

          const userItems = {
            productId: productExists.id,
            descricao: productExists.descricao,
            qtde: product.qtde,
            valor: product.qtde * productExists.valor
          }

          userCart.push(userItems) 

          const index = products.findIndex(idx => idx.id === product.id)
          products[index].qtde - product.qtde
          //products[index].qtde -= product - decremento
          //products[index].qtde += product - decremento
      }

      return response.json({
         order: userItems,
         stock: products
      })

         /* products.forEach(product, index) => {
            console.log(product)
         )} */

         /* products.map99product, index) => {
            console.log(index)
         )} */

      return response.json({ data: true })
     }
}