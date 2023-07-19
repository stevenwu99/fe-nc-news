import { useState,useEffect } from "react";
import { getData } from "../utilities/API";
import CommentCard from "./CommentCard";

const ShowCommentsByArticle = ({article_id}) =>{

    const [comments,setComments] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [errMsg,setErrMsg] = useState("")

    let  searchUrl = "";

     if ( article_id !== "") {
        const articleIdNum = Number(article_id)
        searchUrl = `/articles/${articleIdNum}/comments`;
    } 

       useEffect (() =>{
       if (searchUrl !== "") {
           getData(searchUrl)
           .then (({comments}) => {
               setIsLoading(false)
               setComments(comments)    
               setErrMsg("");   
          })
          .catch((error) => {
            setComments([]);
               setErrMsg(error.response.data.msg);
               setIsLoading(false)
             })
        } else {
            setComments([]);
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
            {errMsg ? <p>{errMsg}</p>:<CommentCard comments = {comments}/> }
        </div>
    )
}

export default ShowCommentsByArticle

