import { jsonPlaceholderService } from "./JSONPlaceHolderService"
import { loginService } from "./LoginService"
import { menuService } from "./MenuService"
import { productService } from "./ProductService"

export const serviceFactory = (apiClient) => {
    return {
        jsonPlaceholderService: jsonPlaceholderService(apiClient),
        productService : productService(apiClient),
        loginService : loginService(apiClient),
        menuService : menuService(apiClient),
    }
}