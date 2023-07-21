import { useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import {getArticles} from "../utilities/API";
import ArticleCard from "./ArticleCard";

const  ShowArticles = () => {
   let requestData ={};  
   let  searchUrl = "/articles";

   const [searchParams,setSearchParams] = useSearchParams();
   const newParams = new URLSearchParams(searchParams) 

    let topicQuery = searchParams.get("topic")
    let sortByValue = searchParams.get("sort_by")
    let orderValue = searchParams.get("order")

   console.log("sortByValue---->",sortByValue)

   if (topicQuery) {
        newParams.set("topic",topicQuery)
        requestData.topic = topicQuery;
   } 

   if (sortByValue === null) {
       sortByValue = "created_at"
      newParams.set("sort_by",sortByValue)
      requestData.sort_by = "created_at"
   }

   if (orderValue === null) {
      orderValue = "DESC"
      newParams.set("order",orderValue)
      requestData.order = "DESC"
   }

   const defaultQuery = {sort_by:sortByValue,order:orderValue};
   const [queryValue,setQueryValue] = useState(defaultQuery)
  
   const [articles,setArticles] = useState([]);
   const [isLoading,setIsLoading] = useState(true)
   const [errMsg,setErrMsg] = useState("");

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
    } 

    if (queryValue.order !== "") {
        newParams.set("order",queryValue.order)
        requestData.order = queryValue.order
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
                       <option value="created_at">date</option>
                       <option value="comment_count">comment count</option>
                       <option value="votes">votes</option>
                    </select>
               </th>
               <th><header>Order:</header></th>
               <th>
                   <select onChange={handleChangeOrder} value = {queryValue.order}> 
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

