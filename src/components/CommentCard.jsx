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