import axios from 'axios'

const url = 'http://localhost:5000/'

export const fetchProducts = async (fetchLength) =>{
    try {
        let query

        if(fetchLength){
            query = `?fetchLength=${fetchLength}`
        } else {
            query = ''
        }

        return axios.get(`${url}products${query}`)
    } catch (error) {
        console.log(error);        
    }
}

export const fetchPosts = async (fetchLength) =>{
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

export const likePost = async id =>{
    try {
        return axios.patch(`${url}posts/${id}/likepost`)
    } catch (error) {
        console.log(error);
    }
}