
import {useState,useEffect} from "react";
import {getData} from "../utilities/API"
import ArticleCard from "./ArticleCard";

const ShowArticlesById = ({articleId}) => {

    const [article,setArticle] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [errMsg,setErrMsg] = useState("")
   
    let  searchUrl = "";

     if (articleId !== "") {
        const articleIdNum = Number(articleId)
        searchUrl = `/articles/${articleIdNum}`;
        console.log('Search URL-->',searchUrl)
    } 

     useEffect (() =>{
       if (searchUrl !== "") {
           getData(searchUrl)
           .then (({article}) => {
               setIsLoading(false)
               setArticle([article])    
               setErrMsg("");   
          })
          .catch((error) => {
               setArticle([]);
               setErrMsg(error.response.data.msg);
               setIsLoading(false)
             })
        } else {
            setArticle([]);
            setErrMsg("");  
        }
   },[articleId]);
 

if  (searchUrl !== "") {
    if (isLoading) {
         return (<p>Loading.........</p>)
    }
}


    return (
        <div>
            {errMsg ? <p>{errMsg}</p>:<ArticleCard articles = {article}/> }
        </div>
    
    )

}

export default ShowArticlesById;