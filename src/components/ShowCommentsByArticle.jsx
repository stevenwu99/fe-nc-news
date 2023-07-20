import { useState,useEffect } from "react";
import { getData } from "../utilities/API";
import CommentCard from "./CommentCard";

const ShowCommentsByArticle = ({article_id}) =>{
   
    const [comments,setComments] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [errMsg,setErrMsg] = useState("")
    const [showNewCommentForm,setNewCommentForm] = useState(false)

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
                const newComments =  comments.map ((comment) => {
                  comment.created_at = comment.created_at.substring(0,10);
                  return comment;
               })
               setComments(newComments) 
               setNewCommentForm(true)   
               setErrMsg("");   
          })
          .catch((error) => {
            setComments([]);
               setErrMsg(error.response.data.msg);
               setIsLoading(false)
               setNewCommentForm(false)
             })
        } else {
            setComments([]);
            setErrMsg("");  
            setNewCommentForm(false)
        }
   },[article_id]);
 

if  (searchUrl !== "") {
    if (isLoading) {
         return (<p>Loading.........</p>)
    }
}

    return (
        <div>
            
            {errMsg ? <p>{errMsg}</p>:<CommentCard comments = {comments} setComments = {setComments} article_id= {article_id} showNewCommentForm = {showNewCommentForm}/>}
 
        </div>
    )
}

export default ShowCommentsByArticle

