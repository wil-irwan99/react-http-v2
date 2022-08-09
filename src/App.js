import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import MoreEffect from './component/MoreEffect';
import ThemeModifier from './component/ThemeModifier';
import DummyView from './component/DummyView';
import { HookComponent } from './component/HookComponent';
import { DepsProvider } from './context/depContext';
import moreEffectService from "./services/moreEffectService"
import MoreEffectHooks from './component/MoreEffectHooks';
import MyHook from './component/MyHook/MyHook';
import ProductForm from './features/product/ProductForm';
import ProductView from './component/ProductView';

const App = () => {
    //const [dark, setDark] = useState(false)
    // return (
    //     <div style={{backgroundColor : dark ? 'black' : 'white'}}>
    //         <p style={{color : dark ? 'white' : 'black'}}>Color : {dark ? 'black' : 'white'}</p>
    //         <button onClick={() => setDark(!dark)}>
    //             set Theme {dark ? 'white' : 'black'}
    //         </button>
    //     </div>
    // )

    // return (
    //     <MoreEffect/>
    // )

    // const [pageID, setPageId] = useState(0)
    // return(
    //     pageID === 0 ? <ThemeModifier onNavigate={() => setPageId(1)}/> : <DummyView onNavigate={() => setPageId(0)}/>
    // )

    //return <HookComponent/>

    // return(
    //     <DepsProvider services={{
    //         moreEffectService: moreEffectService()
    //     }}>
    //         <MoreEffectHooks/>
    //     </DepsProvider>
    // )
    
    // return(
    //     <MyHook/>
    // )
    
    // return <MyHook/>

    // return(
    //     <div className='App'>
    //         <ProductForm/>
    //     </div>
    // )

    return <ProductView/>

    //return <ProductForm/>

}

export default App;