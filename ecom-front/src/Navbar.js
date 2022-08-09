import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import kam1 from './pictures/kam1.jpg';
import Button from "react-bootstrap/Button";
import './style/navbar.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() 
{
  return (
    <div className="main-navbar shadow-sm">
      <section className="header-main border-bottom bg-white">
        <div className=" container-fluid con">
            <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
                <div className="col-md-2">
                  <i FontAwesomeIcon icon="fa-brands fa-opencart" />
                </div>
                <div className="col-md-8">
                <div className="d-flex form-inputs">
                <div className="title"><a className="mynavlink" href = "http://localhost:3000"><h3 className="header text-left">KamRay Shopping <i className="fa fa-shopping-cart"></i></h3></a></div>
                    <input id='mysearch' className="form-control" type="text" placeholder="Search any product..."/>
                   <button className="btn" id='mybtn' name="save" type="submit"><i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                
                <div className="col-md-2">
                    <div className="d-flex d-none d-md-flex flex-row align-items-center">     
                        <div className="d-flex flex-column ms-2">
                            <button className="btn" id='mybtn3'>
                            <div className="total"><span className="shop-bag"><i className='bx bxs-shopping-bag'></i></span>Total</div>
                              <div><span className="fw">$27.90</span></div>
                            </button>
                        </div> 
                        <div className="d-flex flex-column ms-2">
                        
                            <ul className="navbar-nav d-flex align-items-center">
                              <li className="nav-item dropdown active">
                                <button className="btn" id='mybtn2'>
                                <div className="pic"><img src={kam1} className="rounded-circle" width="30" height="30"/></div>
                                <label className="label">Kamarel M.<i class="fa fa-caret-down"></i></label>
                                </button>
                                <div className="dropdown-content">
                                    <a href="#"><i className="fa fa-user"></i> My Account</a>
                                    <a href="#"><i className="fa fa-scroll"></i> My Orders</a>
                                    <a href="#"><i className="fa fa-cog"></i> Settings</a>
                                    <a href="#"><i className="fa fa-sign-out-alt"></i> Sign out</a>
                                </div>
                              </li>
                            </ul>
                        </div>    
                    </div>           
                </div>
            </div>
            </div>
      </section>

<nav className="navbar navbar-expand-lg navbar-light" id="mycatbar">
  <div className="container-fluid">
    <a className="navbar-brand d-md-none d-md-flex" href="#">Categories</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">All Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Furniture</a>
        </li>
        <li className="nav-item active">
          <a className="nav-link active" href="#">Sports</a>
        </li>
        <li className="nav-item dropdown active">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Electronics
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" id="one" href="#">Smart Phones</a></li>
            <li><a className="dropdown-item" id="one" href="#">Laptops</a></li>
            <li><a className="dropdown-item" id="one" href="#">Desktops</a></li>
            <li><a className="dropdown-item" id="one" href="#">Musical Instruments</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	</div>
  
    ); 
}

export default Navbar