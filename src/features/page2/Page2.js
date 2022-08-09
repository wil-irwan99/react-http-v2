import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const productListDb = [
    { id: '1', productName: 'Product 1', productInfo: 'Info 1'},
    { id: '2', productName: 'Product 2', productInfo: 'Info 2' },
    { id: '3', productName: 'Product 3', productInfo: 'Info 3' },
]

const Page2 = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        setProductList(productListDb)
    }, [])

    return (
        <>
            <h2>
                Page2
            </h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {productList.map((product) => {
                        return <Link className='item' key={product.id} to={`${product.id}`} state={{product: product}}>{product.productName}</Link>
                    })}
                </div>
                <div style={{marginLeft: '16px'}}> 
                    <Outlet/>
                </div>
        
            </div>
        </>

    )
}

export default Page2