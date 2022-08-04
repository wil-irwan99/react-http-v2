import { Component } from "react";
import Home from "./HeaderOption";
import '../App.css';
import { connect } from "react-redux";

class TransactionPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            qty : [],
            menuName : [],
            menuPrice : [],
            total : 0,
            menuOpt : 'F',
            isShowingForm : false,
            qtyRead : 1,
            menuRead : '',
            priceRead : 0,
        }
    }

    Back = () => {
        let page =  '2'
        this.props.onNavigate(page);
    }

    handleCategoryFood = () => {
        this.setState({
            menuOpt : 'F'
        })
    }

    handleCategoryDrink = () => {
        this.setState({
            menuOpt : 'D'
        })
    }

    handleFormPopOut = (id) => {
        const index = this.props.menu.menus.findIndex(menu => menu.id === id);
        let namaMenu = this.props.menu.menus[index].nama
        let hargaMenu = this.props.menu.menus[index].harga
        this.setState({
            isShowingForm : true,
            menuRead : namaMenu,
            priceRead : hargaMenu,
        })
    }

    closeFormPopOut = () => {
        this.setState({
            isShowingForm : false,
            menuRead : '',
            priceRead : 0,
        })
    }

    handleChangeQty = (event) => {
        let input = event.target.value
        if (input.length > 0){
            this.setState({
                qtyRead : input
            })
        } else {
            alert('Masukkan Qty yang benar');
        }
    }

    onAddOrder = () => {
        this.setState({
            qty : [...this.state.qty, this.state.qtyRead],
            menuName : [...this.state.menuName, this.state.menuRead],
            menuPrice : [...this.state.menuPrice, this.state.priceRead],
            isShowingForm : false,
            menuRead : '',
            priceRead : 0,
            qtyRead : 1,
        })
    }

    render(){
        let dbMenu = this.props.menu.menus;
        let dbMenuFood = [];
        let dbMenuDrink = [];
        for (let i = 0; i < dbMenu.length; i ++){
            if (dbMenu[i].cat === 'F'){
                dbMenuFood = [...dbMenuFood, dbMenu[i]]
            } else {
                dbMenuDrink = [...dbMenuDrink, dbMenu[i]]
            }
        }
        return(
            <div className="htmlStyle">
                <div className="bodyStyle">
                    <Home width="100%" onNavigate={this.props.onNavigate}/>
                    <div className="menuContainer">
                        <div>
                            <button className="buttonStyle" onClick={this.Back}>Back</button>
                        </div>
                        <div>
                            <button className="buttonStyle" onClick={this.handleCategoryFood}>Food</button>
                            <button className="buttonStyle" onClick={this.handleCategoryDrink}>Drink</button>
                        </div>
                        <div>
                            {this.state.menuOpt === 'F' ? 
                            dbMenuFood.map(m =>
                                <button onClick={this.handleFormPopOut(m.id)}>{m.nama}</button>
                                ) : dbMenuDrink.map(m =>
                                    <button onClick={this.handleFormPopOut(m.id)}>{m.nama}</button>
                                    )}
                            {this.state.isShowingForm &&
                                <div className='qtyInputStyle'>
                                    <h3 className="loginTextStyle">Select Qty</h3>
                                    <input className="inputColumnStyle" type="number" onChange={this.handleChangeQty} value={this.state.qtyRead} min="1" max="999"/>
                                    <button className="buttonStyle" onClick={this.onAddOrder}>Add</button>
                                    <button className="buttonStyle" onClick={this.closeFormPopOut}>Cancel</button>

                                </div>
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }   
}

const mapStateToProps = state => {
    return {
        menu : state.menuReducer,
    }
}

export default connect(mapStateToProps, null) (TransactionPage);