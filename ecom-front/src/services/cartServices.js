import axios from 'axios'

const CART_BASE_REST_API_URL = 'http://localhost:8080/api/v1/cart';

class cartServices
{
    getAllCartProducts()
    {
        return axios.get(CART_BASE_REST_API_URL)
    }

    addToCart(cart)
    {
        return axios.post(CART_BASE_REST_API_URL, cart)
    }

    getCartProductsById(cartId)
    {
        return axios.get(CART_BASE_REST_API_URL + '/' + cartId);
    }

    updateCart(cartId, cart)
    {
        return axios.put(CART_BASE_REST_API_URL + '/' + cartId, cart);
    }

    deleteCart(cartId)
    {
        return axios.delete(CART_BASE_REST_API_URL + '/' + cartId);
    }
}

export default new cartServices();