import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios';

class Dashboard extends Component {

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`).then( response => {
            this.props.componentDidMount()
        })
    }

    render() {
        
        let inventory = this.props.inventory.map( (product, i) => {
            return (
                <Product 
                key={ i }
                name={product.name}
                price={product.price}
                imgurl={product.img}
                id={product.id}
                deleteProduct={this.deleteProduct}
                editProduct={this.props.editProduct}
                />
            )
        })
        return(
            <div className='dashboard'>
                
                {inventory}
            </div>
        )
    }
}

export default Dashboard