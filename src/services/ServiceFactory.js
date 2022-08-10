import { jsonPlaceholderService } from "./JSONPlaceHolderService"
import { loginService } from "./LoginService"
import { productService } from "./ProductService"

export const serviceFactory = (apiClient) => {
    return {
        jsonPlaceholderService: jsonPlaceholderService(apiClient),
        productService : productService(apiClient),
        loginService : loginService(apiClient)
    }
}