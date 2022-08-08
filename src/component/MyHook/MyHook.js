import useMyHook from "./UseMyHook";

const MyHook = props => {
    const {counter, add, min} = useMyHook()
    return(
        <div>
            result : {counter}
            <button onClick={add}>+</button>
            <button onClick={min}>-</button>
        </div>
    )
}

export default MyHook;