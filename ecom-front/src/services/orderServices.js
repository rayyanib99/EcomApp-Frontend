import axios from 'axios'

const ORDER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/orders';

class orderServices
{
    getAllProducts()
    {
        return axios.get(ORDER_BASE_REST_API_URL)
    }

    createOrder(orders)
    {
        return axios.post(ORDER_BASE_REST_API_URL, orders)
    }

    getOrderById(orderId)
    {
        return axios.get(ORDER_BASE_REST_API_URL + '/' + orderId);
    }

    deleteProduct(orderId)
    {
        return axios.delete(ORDER_BASE_REST_API_URL + '/' + orderId);
    }
}

export default new orderServices();