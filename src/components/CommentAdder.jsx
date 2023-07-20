import { useState,useContext} from "react";
import { postData } from "../utilities/API";
import { UserContext } from "../App";

const CommentAdder = ({setComments,article_id}) =>{ 

    const [newComment,setNewComment] =useState("");
    const [errMsg,setErrMsg] = useState("")
    const [errMsgText,setErrMsgText] = useState("");
    const {user} = useContext(UserContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const articleIdNum = Number(article_id);
        const  postUrl = `/articles/${articleIdNum}/comments`;
        
        setErrMsg(false);

        if (newComment.trim() === "") {
            setErrMsgText ("Your input is all space!")
            setErrMsg(true)
        } else {
            setErrMsgText("Something went wrong! Please try again");
        }

        const dataPost =  {username:user,body:newComment.trim()}

         postData(postUrl,dataPost)
         .then(({comment}) => {
                 comment.created_at = comment.created_at.substring(0,10)
                 setComments((currentComment) => {
                return [comment,...currentComment]
            })
            setNewComment("")
          })
          .catch((error) => {            
           setErrMsg(true);
          })

    }


    return (
        <div>
            <form name ="Add a comment" onSubmit={handleFormSubmit}> 
                <label htmlFor="new-comment">Write your comment</label>
                <br/>
                <textarea id="new-comment"  value = {newComment} onChange={(e) => {setNewComment(e.target.value)}} required/>
                <br/>
                 <button>Add comment</button>
             </form>
             <div>
                   {errMsg ? <p>{errMsgText}</p>:null}
             </div>
       </div>
    )
}

export default CommentAdder;

