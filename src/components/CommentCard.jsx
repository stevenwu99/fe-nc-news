import { useState,useContext} from "react";
import { UserContext } from "../App";
import CommentAdder from "./CommentAdder";
import {deleteData} from "../utilities/API";

const CommentCard = ({comments,setComments,article_id,showNewCommentForm}) => {

    const {user} = useContext(UserContext);
    const [errMsg,setErrMsg] = useState("")
    const [deleteControl,setDeleteControl] = useState(false);
    const [isDisplay,setIsDisplay] = useState("")

    const handleOnclick = (e) => {
  
       const  commentId = Number(e.target.value);
       const  delUrl = `/comments/${commentId}`;
       
    
 
       const confirmBox = window.confirm("Do you really want to delete this comment?")
         if (confirmBox === true) {
            setErrMsg("");
            setDeleteControl(true);
            setIsDisplay(e.target.value);
            
            deleteData(delUrl)
            .then((data) => {
                setComments((current) =>
                current.filter((comment) => comment.comment_id !== commentId)
                );
                setErrMsg('')
             })
             .catch((error) => {            
                 setErrMsg("Something went wrong! Please try again");
             })
             .finally (() => {
                  setDeleteControl(false)
             })
            
        }
    }

    return (
        <div>
            <br/>
             { showNewCommentForm ? <CommentAdder setComments = {setComments} article_id= {article_id}/>:null}
            <br/>
            {             
                comments.map((comment) =>{
                 return  ( 
                       <div key = {comment.comment_id}>
                           <header name="Author">Author: {comment.author}</header>
                           <header name="Body">{comment.body}</header>
                           <header name="Votes">Votes: {comment.votes}</header>
                           <header name ="Created Date">{comment.created_at}</header>
                           <button value= {comment.comment_id} onClick= {handleOnclick} disabled = {comment.author !== user || deleteControl}>Delete</button>
                            {isDisplay != comment.comment_id ? null:  (errMsg ? <p>{errMsg}</p>: null) }
                            {isDisplay != comment.comment_id ? null:  (deleteControl ? <p>Deleting... ...</p>:null) }
                            
                        <hr/>
                      </div>
                 )
               })
            } 
        </div>
    
    )    
}

export default CommentCard;

/*
import CommentAdder from "./CommentAdder";

const CommentCard = ({comments,setComments,article_id,showNewCommentForm}) => {
    return (
        <div>
            <br/>
             { showNewCommentForm ? <CommentAdder setComments = {setComments} article_id= {article_id}/>:null}
            <br/>
            {             
                comments.map((comment) =>{
                 return  ( 
                       <div key = {comment.comment_id}>
                           <header name="Author">Author: {comment.author}</header>
                           <header name="Body">{comment.body}</header>
                           <header name="Votes">Votes: {comment.votes}</header>
                           <header name ="Created Date">{comment.created_at}</header>
                        <hr/>
                      </div>
                 )
               })
            } 
        </div>
    
    )    
}

export default CommentCard;
*/