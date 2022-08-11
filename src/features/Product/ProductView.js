import {useDeps} from "../../shared/DepContext"
import React, {useState, useEffect} from 'react';

const ProductView = () => {
    const {productService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        onGetAllProduct()
    }, []);

    const onGetAllProduct = async () => {
        setLoading(true);
        try {
            const response = await productService.getAllProduct();
            setProducts(response.products)
        } catch (e) {
            alert(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {isLoading && <div>Loading</div>}
            <ul>
                {products.map((product) => {
                    return (
                    <>
                        <li key={product.id}>{product.productName}</li>
                        <li style={{"list-style": "none"}}>{product.productInfo}</li>
                    </>
                    )
                })}
            </ul>
        </div>
    )
}
export default ProductView;