
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {getData} from "../utilities/API"
import ArticleDetail from "./ArticleDetail";

const ShowArticlesById = () => {

    const [article,setArticle] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [errMsg,setErrMsg] = useState("")
    const {article_id} = useParams();
 
    let  searchUrl = "";

     if ( article_id!== "") {
        const articleIdNum = Number(article_id)
        searchUrl = `/articles/${articleIdNum}`;
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
   },[article_id]);
 

if  (searchUrl !== "") {
    if (isLoading) {
         return (<p>Loading.........</p>)
    }
}


    return (
        <div>
            {errMsg ? <p>{errMsg}</p>:<ArticleDetail articles = {article}/> }
        </div>
    
    )

}

export default ShowArticlesById;