import ProductHook from "./ProductHook";

const ProductView = () => {
    const {InputId, InputName, onExec, status, idInput, nameInput} = ProductHook()

    const ProductInput = () => (
        <>
            <label>ID</label>
            <input name='id' type="text" value={idInput} onChange={InputId}/>
            <label>Product Name</label>
            <input name='productName' type='text' value={nameInput} onChange={InputName}/>
            <button onClick={onExec}>Save</button>
        </>
    )

    return(
        <>
            {(status === 'idle' || status === 'failed') && <ProductInput/>}
            {status === 'loading' && <div>LOADING</div>}
            {status === 'success' && <div>
                    <ProductInput/>
                </div>}
        </>
    )
}

export default ProductView;