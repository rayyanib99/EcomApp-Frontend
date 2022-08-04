import axios from 'axios'

const PRODUCT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/products';

class productServices
{

    getAllProducts()
    {
        return axios.get(PRODUCT_BASE_REST_API_URL)
    }

    createProduct(products)
    {
        return axios.post(PRODUCT_BASE_REST_API_URL, products)
    }

    getProductByName(productsName)
    {
        return axios.get(PRODUCT_BASE_REST_API_URL + '/' + productsName);
    }

    getProductById(productsId)
    {
        return axios.get(PRODUCT_BASE_REST_API_URL + '/' + productsId);
    }

    updateProduct(productsId, products)
    {
        return axios.put(PRODUCT_BASE_REST_API_URL + '/' + productsId, products);
    }

    deleteProduct(productsId)
    {
        return axios.delete(PRODUCT_BASE_REST_API_URL + '/' + productsId);
    }
}

export default new productServices();