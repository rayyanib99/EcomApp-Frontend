import React from 'react';
import { useEffect, useState } from 'react';
import CartServices from "../services/cartServices";
import { Link, useHistory } from 'react-router-dom';

const Cart = () => 
{
    const [carts, setCart] = useState([]);

    const init = () => 
    {
        CartServices.getAll()
        .then(response => 
        {
            console.log('Printing all the Product in Console', response.data);
            setCart(response.data);
        })
        .catch(error => 
        {
            console.log('Something went wrong ', error);
        })
    }

    useEffect(() => 
    {
        init();
    }, []);

    const removeItem = (id) =>
    {
        console.log('Printing id', id);
        CartServices.remove(id)
        .then(response => 
        {
            console.log("Order removed successfully", response.data);
            init();
        })
        .catch(error => 
        {
            console.log("Something went wrong", error);
        })
    }


  return (
    <div className='container'>
        <h3>Cart</h3>
        <hr/>
        <div>
        <Link to="/add" className="btn btn-primary mb-2 ">Checkout</Link>
            <table className=" table table-bordered table-striped ">
                <thead className='thead-dark'>
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        carts.map(cart => 
                        (
                            <tr key={cart.productId}>
                                <td>{cart.productImage}</td>
                                <td>{cart.name}</td>
                                <td>{cart.quantity}</td>
                                <td>{cart.unitPrice}</td>
                                <td>{cart.category}</td>
                                <td>
                                    <button className='btn btn-danger ml-2 md' onClick={() => 
                                    {
                                        removeItem(cart.cartId)
                                    }}>

                                    Remove</button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>

    </div>
)
}

export default Cart