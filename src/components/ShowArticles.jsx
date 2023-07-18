import { useState,useEffect} from "react";
import {getData,showLoading} from "../utilities/API";
import ArticleCard from "./ArticleCard";

const  ShowArticles = ({categoryFilter}) => {
    
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
 

showLoading(isLoading)


    return (
        <div>
            {<ArticleCard articles = {articles}/> } 
        </div>
    
    )
}

export default ShowArticles;