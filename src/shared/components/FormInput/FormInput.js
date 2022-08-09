const FormInput = ({id, label, type = 'text', value, onChange}) => {
    //const {id, label, type = 'text', value, onChange} = props
    const handleOnInput = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        onChange(key, value)
    }

    return(
        <>
            <label>{label}</label>
            <input name={id} type={type} value={value} onChange={handleOnInput} ></input>
        </>
    )
}

export default FormInput;