import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/cart');
}

const create = data => {
    return httpClient.post("/cart", data);
}

const get = id => {
    return httpClient.get(`/cart/${id}`);
}

const update = data => {
    return httpClient.put('/cart', data);
}

const remove = id => {
    return httpClient.delete(`/cart/${id}`);
}


export default { getAll, create, get, update, remove };