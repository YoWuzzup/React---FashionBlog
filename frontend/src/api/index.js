import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchItems = async ()=>{
    try {
        return axios.get(`${url}/shop`)
    } catch (error) {
        console.log(error);        
    }
}