import {Component} from 'react';
import {deleteMenuAction} from './state/MenuAction';
import {connect} from "react-redux";
import Home from "../component/HeaderOption";
import '../App.css';

class MenuDeleteReduxPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : '',
            idStatus : false,
        }
    }

    Back = () => {
        let page =  '3'
        this.props.onNavigate(page);
    }

    handleChangeID = (event) => {
        let input = event.target.value
        if (input.length > 0){
            this.setState({
                id : input,
                idStatus : true,
            })
        } else {
            this.setState({
                idStatus : false,
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.idStatus){
            this.props.deleteMenuAction(this.state.id)
            let statusSuccess = this.props.menu.statusChange;

            if (statusSuccess === true) {
                alert('Menu berhasil dihapus');
            } else {
                alert('Tidak ditemukan menu dengan ID tersebut');
            }
        } else {
            alert('Tidak satu pun data boleh kosong');
        }
    }

    render(){
        return(
            <div className="htmlStyle">
                <div className="bodyStyle">
                    <Home width="100%" onNavigate={this.props.onNavigate}/>
                    <div className="menuContainer">
                        <button className="buttonStyle" onClick={this.Back}>Back</button>

                        <form onSubmit={this.handleSubmit}>
                                <p className="loginTextStyle">Delete Menu By Id</p><br/>
                                <p className="loginTextStyle">ID</p>
                                <input className="inputColumnStyle" type="text" name="ID" id="" onChange={this.handleChangeID}/>

                                <button className="buttonStyle" type="submit">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteMenuAction
}

const mapStateToProps = state => {
    return {
        menu : state.menuReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MenuDeleteReduxPage);
