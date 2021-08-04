import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchProducts = async ()=>{
    try {
        return axios.get(`${url}products`)
    } catch (error) {
        console.log(error);        
    }
}