import Axios from "axios"

const axios = Axios.create({
    baseURL: "http://localhost:8000/"
})

const reqConfig = {
    headers: {
        'accept': 'application/json'
    }
}

function getData(url){
    return axios.get(url, reqConfig);
}

function postData(url,data){
    return axios.post(url, data,reqConfig);
}

export const ReservationAPI = {

    getUsers(){
        return getData('api/users');
    },

    getLogedUser(){
        return getData('api/logedUser');
    },

    postLogedUser(data){
        return postData('api/logedUser',data)
    }

};