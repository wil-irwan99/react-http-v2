import { useEffect, useState } from "react";
import {useDeps} from "../context/depContext"
import ProductAsync from "../shared/ProductAsync";

const ProductHook = () => {
    const [product, setProduct] = useState({
        id: '',
        productName: ''
    });
    const [idInput, setId] = useState('');
    const [nameInput, setName] = useState('');
    const {ProductServiceRft} = useDeps();
    const {execute, status, value, error} = ProductAsync();

    useEffect(()=>{
        setProduct({
            id: idInput,
            productName: nameInput
        })
    }, [idInput, nameInput])

    useEffect(()=>{
        if (status ==='failed') {
            window.alert(error)
        } else if (status ==='success')
            window.alert(value)
    }, [status])

    const InputId = (e) => {
        setId(e.target.value)
    }

    const InputName = (e) => {
        setName(e.target.value)
    }

    const onExec = async () => {
        // setProduct({
        //     id: idInput,
        //     productName: nameInput
        // });
        await execute(()=>ProductServiceRft.addProduct(product))
    }

    return {
        InputId, InputName, onExec, status, idInput, nameInput
    }

}

export default ProductHook;