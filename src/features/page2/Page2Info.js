import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";
import {productList} from "./Page2";

const Page2Info = () => {
    // const params = useParams();

    // const[product, setProduct] = useState({})

    // useEffect(()=>{
    //     const id = params.id;
    //     for (let p of productList) {
    //         if(p.id === id){
    //             setProduct(p)
    //             break;
    //         }
    //     }
    // }, [params.id])

    const {state: {product}} = useLocation();

    return (
        <div> 
            {/* {params.id ? <div> */}
            ID : {product.id}
            Name : {product.productName}
            Info : {product.productInfo}
            {/* </div> : <></>} */}
        </div>
    )
}

export default Page2Info;