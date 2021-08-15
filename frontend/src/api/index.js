import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchProducts = async ()=>{
    try {
        return axios.get(`${url}products`)
    } catch (error) {
        console.log(error);        
    }
}

export const fetchPosts = async (fetchLength)=>{
    try {
        let query

        if(fetchLength){
            query = `?fetchLength=${fetchLength}`
        } else {
            query = ''
        }

        return axios.get(`${url}posts${query}`)
    } catch (error) {
        console.log(error)
    }
}

export const fetchSinglePost = async (id)=>{
    try {
        return axios.get(`${url}posts/${id}`)
    } catch (error) {
        console.log(`There's no such post with ID: ${id}.`)
    }
}