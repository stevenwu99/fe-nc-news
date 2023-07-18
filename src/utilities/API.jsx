import axios from 'axios';

const db = axios.create({baseURL:"https://nc-news-waad.onrender.com/api"});

export const getData = (searchUrl) => {
       return db.get(searchUrl)
        .then(({data}) => {
            return data;
         })
    }

