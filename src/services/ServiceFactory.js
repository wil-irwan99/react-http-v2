import { ProductServiceRft } from "./ProductServiceRft"

export const ServiceFactory = () => {
    return {
        productService: ProductServiceRft()
    }
}