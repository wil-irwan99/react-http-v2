import { useEffect, useState } from "react";
import { useDeps } from "../context/depContext";

const MoreEffectHooks = () => {
    const { moreEffectService: { doPrint } } = useDeps();

    //useEffect itu akan dipanggil ketika ada perubahan (id)
    const [result, setResult] = useState('')
    const[id, setId] = useState('0')
    useEffect(() => {
        setResult(doPrint(id))
        return(()=>console.log('call'));
    }, [id]) //deps([]) -> mengatur kapan use effect dijalankan
    return(
        <>  
            <button onClick={() => setId('10')}>Click</button>
            <h1>Print : {result}</h1>
        </>
    )

}

export default MoreEffectHooks;