import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            imgurl: '',
            name: '',
            price: 0,
            productToEdit: {},
            edit: false
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.createProduct = this.createProduct.bind(this)
        this.changeEdit = this.changeEdit.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
    }

    handleChange(val, key) {
        let obj = {}
        obj[key] = val
        this.setState(obj)
    }

    handleCancel() {
        this.setState({
            imgurl: '',
            name: '',
            price: 0
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.productToEdit !== prevProps.productToEdit) {
            // console.log(this.props.productToEdit)
            this.setState({
                // productToEdit: this.props.productToEdit,
                name: this.props.productToEdit[0].name,
                price: this.props.productToEdit[0].price,
                imgurl: this.props.productToEdit[0].img,
                edit: true
            })
        }
    }

    changeEdit() {
        this.setState({
            edit: !this.state.edit
        })
    }

    createProduct() {
        let { name, price, imgurl } = this.state
        axios.post('/api/product', {name, price, imgurl}).then( response => {
            // console.log(response)
            
            this.props.componentDidMount()
            this.handleCancel()
        })
    }

    updateProduct(id) {
        let { name, price, imgurl } = this.state

        axios.put(`/api/product/${id}`, {name, price, imgurl}).then( response => {
            this.setState({
                productToEdit: response.data
            })

            this.props.componentDidMount()
            this.handleCancel()
            this.changeEdit()
        })
    }

    render() {
        return(
            <div className='form'>
                {
                this.state.imgurl
                ?
                <img src={`${this.state.imgurl}`} alt='' className='product-img'/>
                :
                <img src='https://i0.wp.com/media.boingboing.net/wp-content/uploads/2011/12/404.jpg?w=750' alt='' className='product-img'/>

                }
                <p>Image URL:</p>
                <input value={this.state.imgurl} onChange={e => this.handleChange(e.target.value, 'imgurl')} />
                <p>Product Name:</p>
                <input value={this.state.name} onChange={e => this.handleChange(e.target.value, 'name')} />
                <p>Price:</p>
                <input value={this.state.price} onChange={e => this.handleChange(e.target.value, 'price')} type='number' />
                <div className='product-button-box'>
                    <button onClick={this.handleCancel} className='form-button'>Cancel</button>
                    {
                        this.state.edit
                        ?
                        <button onClick={() => this.updateProduct(this.props.productToEdit[0].id)} className='form-button'>Save Changes</button>
                        :
                        <button onClick={this.createProduct} className='form-button'>Add to Inventory</button>
                    }
                </div>
            </div>
        )
    }
}

export default Form