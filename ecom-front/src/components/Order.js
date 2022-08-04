import React from 'react';
import { useEffect, useState } from 'react';
import OrderServices from '../services/orderServices';
import { Link } from 'react-router-dom';

const Order = () => 
{
    const [orders, setOrders] = useState([]);

    const init = () => 
    {
        OrderServices.getAll()
        .then(response => 
        {
            console.log('Printing all the Orders in Console', response.data);
            setOrders(response.data);
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


    const removeOrder = (id) => 
    {
        console.log('Printing id', id);
        OrderServices.remove(id)
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
        <h3>Orders</h3>
        <hr/>
        <div>
        
            <table className=" table table-bordered table-striped ">
                <thead className='thead-dark'>
                  <tr>
                    <th>Product Picture</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Order Price</th>
                    <th>User ID</th>
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Order Category</th>
                    <th>unitPrice</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => 
                        (
                            <tr key={order.userId}>
                                <td>{order.productImage}</td>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td>{order.orderPrice}</td>
                                <td>{order.orderId}</td>
                                <td>{order.userId}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.category}</td>
                                <td>{order.unitPrice}</td>
                                <td>
                                    <button className='btn btn-danger ml-2 md' onClick={() => 
                                    {
                                        removeOrder(order.orderId)
                                    }}>

                                    Cancel</button>
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

export default Order