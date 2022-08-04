import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import Login from './component/Login';
import HomePage from './component/HomePage';
import MenuPage from './component/MenuPage';
import TablePage from './component/TablePage';
import MenuAdd from './component/MenuAdd';
import MenuDelete from './component/MenuDelete';
import TableAdd from './component/TableAdd';
import TableDelete from './component/TableDelete';
import MenuAddRedux from './MenuRedux/MenuAddRedux';
import MenuDeleteRedux from './MenuRedux/MenuDeleteRedux';
import TransactionPage from './component/TransactionPage';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            page : '1',
            table : [{id: 'T001', status: 'Available'}, {id: 'T002', status: 'Unavailable'}, {id :'T003', status: 'Available'}],
        }
    }

    navigation = (value) => {
        this.setState({
            page : value
        })
    }

    tableAdd = (tableBaru) => {
        this.setState({
            table : [...this.state.table, tableBaru],
        })
    }

    tableDelete = (tableTerbaru) => {
        this.setState({
            table : tableTerbaru,
        })
    }

    render(){
        return(
            <>
            {(() => {
                switch(this.state.page) {
                    case '1':
                        return <Login onNavigate={this.navigation}/>
                    case '2':
                        return <HomePage onNavigate={this.navigation}/>
                    case '3':
                        return <MenuPage onNavigate={this.navigation}/>
                    case '3.1':
                        return <MenuAddRedux onNavigate={this.navigation}/>
                    case '3.2':
                        return <MenuDeleteRedux onNavigate={this.navigation}/>
                    case '4':
                        return <TablePage onNavigate={this.navigation} dataTable={this.state.table}/>
                    case '4.1':
                        return <TableAdd onNavigate={this.navigation} dataTable={this.state.table} tambahTable={this.tableAdd}/>
                    case '4.2':
                        return <TableDelete onNavigate={this.navigation} dataTable={this.state.table} hapusTable={this.tableDelete}/>
                    case '5':
                        return <TransactionPage onNavigate={this.navigation}/>
                    default:
                        return <Login onNavigate={this.navigation}/>
                }
            })()}
            </>
        )
    }
}

export default App;