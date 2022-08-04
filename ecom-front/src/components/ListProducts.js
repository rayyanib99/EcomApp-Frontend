import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import { useEffect, useState } from 'react';
import productServices from '../services/productServices';
import '../list.css';

const ListProducts = () => 
{
  const [products, setProduct] = useState([]);

  useEffect(() => 
  {
    getAllProducts();
}, [])

const getAllProducts = () => 
{
  productServices.getAllProducts().then((response) => 
  {
      setProduct(response.data)
      console.log(response.data);
  })
  .catch(error =>
  {
      console.log(error);
  })
}

const styles = 
{
  color: 'blue',
  width: 200
}

  return (
    <div className='container all-item'>
      <h3>All Products</h3>
      <hr/>
      <div className='card-group'>
        {   products.map(product => ( 
          <div className='my-3 mx-3 d-flex' key={product.productId}>
            <div className='card my-card'><a id='mylink' href="#">
            <img className='card-img-top' src={product.productImage} style={styles} width="100" height="200"/>
            <div className='card-body text-dark'>
              <h4 className='card-title text-left'>{product.name}</h4>
              <h5 className='price text-left'>Price: ${product.unitPrice}</h5>
              <h5 className='category text-left'>Category: {product.productCategory}</h5>
              <h5 className='decription text-left'>Description: {product.productDescription}</h5>
              <h5 className='condition text-left'>Condition: <span id='mycon' >{product.productCondition}</span></h5>
              <h5 className='status2 text-left'>{product.productStatus}</h5>
              <h5 className='inventory text-left'>{product.productInventory} pieces remaining.</h5>
            </div>
            </a>
            <div className="card-footer">  
                <div className="mx-1 d-flex justify-content-between"> 
                    <a href='#' className='btn btn-primary' id='mybtn4'>Buy Now</a>
                    <a className='btn btn-outline-primary' href='#' id='mybtn5'>Add to Bag</a>
                  </div>
              </div>
            </div>
          
          </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default ListProducts