import React from 'react'
import { useEffect, useState } from 'react';
 
import userServices from '../services/userServices';

export const User = () => {
 
    const [users, setUsers] = useState([]);
 
    const init = () => {
        userServices.getAll()
        .then(response => {
            console.log('Printing all the Users in Console', response.data);
            setUsers(response.data);
        })
        .catch(error => {
            console.log('Something went wrong ', error);
        })
    }
 
    useEffect(() => {
        init();
    }, []);
 
    const removeUser = (id) => {
        console.log('Printing id', id);
        userServices.remove(id)
        .then(response => {
            console.log("Order removed successfully", response.data);
            init();
        })
        .catch(error => {
            console.log("Something went wrong", error);
        })
    }


 
  return (
    <div>
        <div className='container'>
        <h3>Users</h3>
        <hr/>
        <div>
            <table className=" table table-bordered table-striped ">
                <thead className='thead-dark'>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Zipcode</th>
                    <th>Administrator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.userId}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.country}</td>
                                <td>{user.zipCode}</td>
                                <td>{user.isAdmin}</td>
                                <td>
                                    <button className='btn btn-danger ml-2 md' onClick={() => {
                                        removeUser(user.userId)
                                    }}>
 
                                    Delete</button>
                                </td>
 
                            </tr>
                        ))
                    }
 
                </tbody>
            </table>
        </div>
 
    </div>
    </div>
  )
}
export default User