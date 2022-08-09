export const ProductServiceRft = () => {
    const addProduct = (newProduct) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (newProduct.id !== ''){
                    resolve('Add product success')
                } else {
                    reject(new Error('Oopss...'))
                }
            }, 1500)
        })
    }
    return {
        addProduct
    }
}