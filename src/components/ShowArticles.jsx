import { useState,useEffect} from "react";
import {getData} from "../utilities/API";
import ArticleCard from "./ArticleCard";

const  ShowArticles = () => {
    const [articles,setArticles] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    let  searchUrl = "/articles";
    useEffect (() =>{
        getData(searchUrl)      
        .then (({articles}) => {
            setIsLoading(false)
            setArticles(articles)       
        })
   },[]);
   
if (isLoading) {
    return (<p>Loading.........</p>)
}

    return (
        <div>
            {<ArticleCard articles = {articles}/> } 
        </div>
    
    )
}

export default ShowArticles;