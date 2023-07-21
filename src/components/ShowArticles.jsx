import { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import {getArticles} from "../utilities/API";
import ArticleCard from "./ArticleCard";

const  ShowArticles = () => {
    const [articles,setArticles] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    let requestData ={};
    let  searchUrl = "/articles";
 
    const articlesQuery = {sort_by:"",order:""};

    const [queryValue,setQueryValue] = useState(articlesQuery)

    const [errMsg,setErrMsg] = useState("");

    const [searchParams,setSearchParams] = useSearchParams();
    const newParams = new URLSearchParams(searchParams)

    const topicQuery = searchParams.get("topic")
    if (topicQuery) {
        requestData.topic = topicQuery;
    } 


    const handleChangeSortBy = (e) => {
        setQueryValue({...queryValue,sort_by:e.target.value});
    }

    const handleChangeOrder = (e) => {
        setQueryValue({...queryValue,order:e.target.value});    
    }

useEffect (() =>{

    if (queryValue.sort_by !== "") {
        newParams.set("sort_by",queryValue.sort_by)
        requestData.sort_by = queryValue.sort_by
    } else {
        setSearchParams((params) => {
            params.delete('sort_by');
            return params;
          });
    }

    if (queryValue.order !== "") {
        newParams.set("order",queryValue.order)
        requestData.order = queryValue.order
    } else { 
       setSearchParams((params) => {
        params.delete('order');
        return params;
      });  
    }
    
    setSearchParams(newParams) 

    getArticles(searchUrl,requestData)      
    .then (({articles}) => {
        setArticles(articles)       
    })
    .catch((error) => {
        setErrMsg("Something went wrong! Please try again");
    })
    .finally(()=> {
        setIsLoading(false)
    })

},[queryValue]);

if (isLoading) {
    return (<p>Loading.........</p>)
}

    return (
        <div>
             <table>
             <tbody>
             <tr>
               <th><header>Sort By:</header></th>
               <th>
                    <select onChange={handleChangeSortBy} value = {queryValue.sort_by}> 
                       <option value="" selected disabled> ---Sort by--- </option>
                       <option value="created_at">date</option>
                       <option value="comment_count">comment count</option>
                       <option value="votes">votes</option>
                    </select>
               </th>
               <th><header>Order:</header></th>
               <th>
                   <select onChange={handleChangeOrder} value = {queryValue.order}> 
                      <option value="" selected disabled> ---Order--- </option>
                      <option value="ASC">ASC</option>
                      <option value="DESC">DESC</option>
                   </select>   
               </th>
               </tr>           
        </tbody>
    </table>  
         {errMsg ? <p>{errMsg}</p> : null}
         {<ArticleCard articles = {articles}/> } 
        </div>
    
    )
}

export default ShowArticles;

