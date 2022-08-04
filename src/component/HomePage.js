import { Component } from "react";
import Home from "./HeaderOption";
import '../App.css';

class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="htmlStyle">
                <div className="bodyStyle">
                    <Home width="100%" onNavigate={this.props.onNavigate}/>
                </div>
            </div>
        )
    }   
}

export default HomePage;