const CommentCard = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment) =>{
                 return  ( 
                       <div key = {comment.comment_id}>
                           <header name="Author">Author: {comment.author}</header>
                           <header name="Body">Body: {comment.body}</header>
                           <header name="Votes">Votes: {comment.votes}</header>
                           <header name ="Created Date">Created Date: {comment.created_at.substring(0,10)}</header>
                        <hr/>
                      </div>
                 )
               })
            } 
        </div>
    
    )    
}

export default CommentCard;