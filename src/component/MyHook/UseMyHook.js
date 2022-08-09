import { useEffect, useState } from "react";
import {useDeps} from "../../context/depContext"
import UseAsync from "../../shared/UseAsync";

const useMyHook = () => {
    const [result, setResult] = useState('');
    const [counter, setCounter] = useState(0);
    const {moreEffectService} = useDeps();
    const {execute, status, value, error} = UseAsync();

    useEffect(()=>{
        onExec()
    }, [counter])

    useEffect(()=>{
        setResult(value)
        if (status ==='failed') {
            window.alert(error)
        }
    }, [value, status])


    const add = () => {
        console.log(counter)
        //cara yang salah, telat update
        setCounter(counter + 1)
        // onExec()
        // setResult(value)
    }

    const min = () => {
        console.log(counter)
        setCounter(counter - 1)
        // onExec()
        // setResult(value)
    }

    const onExec = async () => {
        if (counter !== null){
            await execute(()=>moreEffectService.doPrint(counter))
        }
    }

    return {
        result, status, add, min
    }
}

export default useMyHook;