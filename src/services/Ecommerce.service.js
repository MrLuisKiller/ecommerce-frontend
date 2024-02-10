import axios from 'axios'

const PATH = import.meta.env.VITE_API

const getProducts = async () => await axios.get(`${PATH}/products`)

const getProduct = async id => await axios.get(`${PATH}/products/${id}`)

export { getProducts, getProduct }