import React, { Component } from 'react';
import './reset.css'
import './App.css';
import axios from 'axios';

//Components
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import routes from './routes';

class App extends Component {

  constructor() {
    super();

    this.state = {
      inventory: [],
      productToEdit: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }

  componentDidMount() {
    axios.get('/api/inventory').then( response => {
      // console.log(response)
      this.setState({
        inventory: response.data
      })
    })
  }

  editProduct(id) {
    axios.get(`/api/product/${id}`).then( response => {
      // console.log(response)
      this.setState({
        productToEdit: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header className='header'></Header>
        <div className='display'>
          <div >
            <Dashboard 
            editProduct={this.editProduct}
            inventory={this.state.inventory}
            componentDidMount={this.componentDidMount}
            />
          </div>
          <div className='form'>
            <Form 
            productToEdit={this.state.productToEdit}
            componentDidMount={this.componentDidMount}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
