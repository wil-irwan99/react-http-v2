import { useEffect, useState } from "react";

const ThemeModifier = (props) => {
    const [dark, setDark] = useState(false);

    //sama dengan componentDidMount dan ComponentDidUpdate
    useEffect(() => {
        document.title = `Theme ${dark ? 'black' : 'white'}`
        //efek cleanup
        //dipanggil ketika componenWillUnmout
        //proses re-rendering saat deps diisi state value

        //ketika tidak diberikan apa" (effect) akan selalu dipanggil
        //ketika diberikan array kosong use effect hanya 1x dijalankan saat render pertama
        //ketika diberi array dengan state value, use effect dijalankan jika state value berubah
        return () => {
            console.log('component will unmount')
        }
    })
    return(
        <div style={{backgroundColor : dark ? 'black' : 'white'}}>
            <p style={{color : dark ? 'white' : 'black'}}>Color : {dark ? 'black' : 'white'}</p>
            <button onClick={() => setDark(!dark)}>
                set Theme {dark ? 'white' : 'black'}
            </button>
            <button onClick={props.onNavigate}>go to dummy view</button>
        </div>  
    )
}

export default ThemeModifier;