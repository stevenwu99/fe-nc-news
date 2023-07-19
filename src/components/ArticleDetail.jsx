import ShowCommentsByArticle from "./ShowCommentsByArticle";
import { useState } from "react";

const ArticleDetail= ({article}) => {

  const [article_id,setArticleId] = useState("");

   const handleFormViewComments = (e) => {
       e.preventDefault();
   }

    const handleOnClickViewComments = (e) => {
     
      if (e.target.textContent === 'View Comments') {
         e.target.textContent = 'Un View';
         setArticleId(article.article_id)
      } else {
         e.target.textContent = 'View Comments';
         setArticleId("")
      }
      
    }

    return (
        <div> 
         <form>
              <header name="Title">Title: {article.title}</header>
              <header name="Author">Author: {article.author}</header>
              <header name="Topic">Topic: {article.topic}</header>
              <header name="Body">Body: {article.body}</header>
              <header name ="Created Date">Created Date: {article.created_at.substring(0,10)}</header>
              <header name = "Comment Count">Comment Count: {article.comment_count}</header>
              <header name = "Vote">Votes: {article.votes}</header>
              <img src = {article.article_img_url}  alt={article.title} />
          </form> 

          <form onSubmit={handleFormViewComments}> 
              <button onClick={handleOnClickViewComments} >View Comments</button>
          </form>
          <br/>
          <section>
            <ShowCommentsByArticle article_id = {article_id}/>
          </section>
        </div>
    
    )    
}

export default ArticleDetail;

