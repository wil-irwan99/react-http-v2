import { useEffect, useState } from "react";
import moreEffectService from "../services/moreEffectService"

const MoreEffect = () => {
    const {doPrint} = moreEffectService();

    // const [result, setResult] = useState()
    // useEffect(() => {
    //     setResult(doPrint('1'))
    //     console.log('1');
    // }, [])
    // return(
    //     <>
    //         <h1>Print : {result}</h1>
    //     </>
    // )

    //useEffect itu akan dipanggil ketika ada perubahan (id)
    const [result, setResult] = useState('')
    const[id, setId] = useState('10')
    useEffect(() => {
        setResult(doPrint(id))
        console.log('1');
    }, [id]) //deps([]) -> mengatur kapan use effect dijalankan
    return(
        <>  
            <input type='text' value={id} onChange={(e) => {
                setId(e.target.value)
            }}/>
            {/* <button onClick={() => setId('10')}>Click</button> */}
            <h1>Print : {result}</h1>
        </>
    )

}

export default MoreEffect;