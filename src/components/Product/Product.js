import React from 'react';

export default function Product(props) {
    return (
        
        <div className='product'>
            {
                props.imgurl
                ?
                <img src={`${props.imgurl}`} className='product-img' alt=''/>
                :
                <img src='https://i0.wp.com/media.boingboing.net/wp-content/uploads/2011/12/404.jpg?w=750' alt='' className='product-img'/>

            }
            {/* <img src='https://i0.wp.com/media.boingboing.net/wp-content/uploads/2011/12/404.jpg?w=750' alt='' width='200'/> */}
            <div className='product-info'>
            <div className='product-box'>
                <h3>{props.name}</h3>
                <h4>${props.price}</h4>
            </div>

            <div className='product-button-box'>
                <button onClick={() => props.editProduct(props.id)} className='product-button'>Edit</button>
                <button onClick={() => props.deleteProduct(props.id)} className='product-button'>Delete</button>
            </div>
            </div>
        </div>
    )
}