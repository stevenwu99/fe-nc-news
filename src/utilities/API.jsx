import axios from 'axios';

const db = axios.create({baseURL:"https://nc-news-waad.onrender.com/api"});

export const getData = (searchUrl) => {
       return db.get(searchUrl)
        .then(({data}) => {
            return data;
         })
    }
    
export const patchData = (patchUrl,patchData) => {
        return db.patch(patchUrl,patchData)
         .then(({data}) => {
                return data;
         })
};


export const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        fontSize: 18
};