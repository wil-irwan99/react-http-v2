import {useDeps} from "../../shared/DepContext"
import React, {useState} from 'react';

const MenuView = () => {
    const {menuService} = useDeps();
    const [result, setResult] = useState('');

    const TambahMenu = async () => {
        try {
            const response = await menuService.addMenu("Nasi Bakar");
            setResult(response.status);
        } catch (e) {
            alert(e)
        }
    }

    const CariMenu = async () => {
        try {
            const response = await menuService.getMenuById(12);
            setResult(response.message.menuName);
        } catch (e) {
            alert(e)
        }
    }

    const CariHargaMenu = async () => {
        try {
            const response = await menuService.getMenuPriceById(12);
            setResult(result + ' ' + response.message.price);
        } catch (e) {
          
    }
    }



    return (
        <>
            <button onClick={TambahMenu}>Add Menu</button>
            <button onClick={CariMenu}>Find Menu</button>
            <button onClick={CariHargaMenu}>Find Menu Price</button>
            <p>{result}</p>
        </>
    )
}

export default MenuView;