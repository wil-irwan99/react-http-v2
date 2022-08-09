import {useState} from "react";

const ProductAsync = () => {
    const [status, setStatus] = useState('idle');
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const execute = async (asyncFn) => {
        setStatus('loading')
        setValue(null)
        setError(null)
        try {
            const response = await asyncFn();
            setValue(response)
            setStatus('success')
        } catch (e) {
            setError(e.message)
            setStatus('failed')
        }

    }
    return{execute, status, value, error}
}

export default ProductAsync;