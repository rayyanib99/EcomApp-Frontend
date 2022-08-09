import React, {useState, useEffect} from 'react'
import {useHistory, useParams } from 'react-router-dom';
import userServices from '../services/userServices';
import '../adduser.css';

export const AddUser = () => 
{
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[country, setCountry] = useState('');
    const[address, setAddress] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[isAdmin, setIsAdmin] = useState();
    const[zipCode, setZipCode] = useState();
    
    const history = useHistory();
    const {id} = useParams();

    const saveUser = (e) => 
    {
        e.preventDefault();
        
        const user = {firstName, lastName, email, password, city, state, country, address, phoneNumber, isAdmin, zipCode};
        if (id) 
        {
            userServices.updateUser(user)
                .then(response => 
                {
                    console.log('User data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => 
                {
                    console.log('Something went wrong', error);
                }) 
        } 
        else 
        {
            userServices.addUser(user)
            .then(response => 
            {
                console.log("User added successfully", response.data);
                window.location.replace("http://localhost:3000/users");
            })
            .catch(error => 
            {
                console.log('something went wrong', error);
            })
        }
    }

    useEffect(() => 
    {
        if (id) 
        {
            userServices.getUser(id)
                .then(user => 
                {
                    setFirstName(user.data.firstName);
                    setLastName(user.data.lastName);
                    setEmail(user.data.email);
                    setPassword(user.data.password);
                    setCity(user.data.city);
                    setState(user.data.state);
                    setCountry(user.data.country);
                    setAddress(user.data.address);
                    setIsAdmin(user.data.isAdmin);
                    setPhoneNumber(user.data.phoneNumber);
                    setZipCode(user.data.zipCode);
                })
                .catch(error => 
                {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])


  return (
    <div className="container">
        <div className="card" id='mycard'>
        <div className="card-header text-center" id='mycd'>Register User
        <div><a id='mylink2' href="http://localhost:3000/users" className="btn btn"><i className = "fa fa-arrow-left"></i> Back to Users</a></div>
        <div id='myfa'><i className="fa fa-asterisk"> required fields</i></div>
        </div>
        <div className="card-body">
            <form className="row g-3">
                <div className="col-6">
                    <label className="form-label" id='myfl1'>First Name:<span id='marker'>*</span></label>
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter User's First Name" required />
                </div>
                <div className="col-6">
                    <label className="form-label" id='myfl2'>Last Name:<span id='marker'>*</span></label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter User's Last Name" required />
                </div>
                <div className="col-6">
                    <label className="form-label" id='myfl3'>Email:<span id='marker'>*</span></label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter User's Email" required />
                </div>
                <div className="col-6">
                    <label className="form-label" id='myfl4'>Contact Number: (ex. 000-000-0000) </label>
                    <input type="text" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter User's Phone Number" maxlength={12}/>
                </div>
                <div className="col-6">
                    <label className="form-label" id='myfl5'>Temporary Password:<span id='marker'>*</span> (minimum 8 characters long) </label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Set User's Temporary Password" minLength={8} required />
                </div>
                <div className="col-6">
                <label className = "form-label" id='myadmin'> Is this User an Administrator?:<span id='marker'>*</span></label>
                    <div id='setAdmin'>
                        <label className = "form-label m-2"> Yes </label>
                            <input 
                                type="radio" 
                                value="Yes"
                                name='y'
                                onChange={(e) => setIsAdmin(e.target.value)}
                            />
                            <label className = "form-label m-2 "> No</label>
                            <input 
                                type="radio" 
                                value="No"
                                name='y'
                                onChange={(e) => setIsAdmin(e.target.value)}
                            />
                     </div>
                </div>
                <div className="col-12">
                    <label className="form-label" id='myfl6'>Address: </label>
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter User's Street Address"/>
                </div>
                <div className="col-3">
                    <label className="form-label" id='myfl7'>City: </label>
                    <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter User's City of Residence"/>
                </div>
                <div className="col-3">
                    <label className="form-label" id='myfl8'>State: </label>
                    <input type="text" className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter User's State of Residence"/>
                </div>
                <div className="col-3">
                    <label className="form-label" id='myfl9'>Country:<span id='marker'>*</span></label>
                    <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter User's Country of Residence" required />
                </div>
                <div className="col-3">
                    <label className="form-label" id='myfl10'>ZipCode: </label>
                    <input type="text" className="form-control" id="zipcode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Enter User's ZipCode" maxlength={5}/>
                </div>
                <div>
                    <button id='insertbtn' disabled={!firstName || !lastName || !email || !email.includes('@') || !password || password.length < 8 || !country || !isAdmin} onClick={(e) => saveUser(e)} className="btn btn">Create Account</button>
                </div>
            </form>
        </div>
        </div>
        </div>
  )
}

export default AddUser