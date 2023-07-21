import { useState } from "react";
import ShowCommentsByArticle from "./ShowCommentsByArticle";
import { patchData } from "../utilities/API";

const ArticleDetail= ({article}) => {

  const [article_id,setArticleId] = useState("");
  const [articleVotes,setArticleVotes] = useState(0);
  const [articleVotesAdd,setArticleVotesAdd] = useState(false);
  const [articleVotesMinus,setArticleVotesMinus] = useState(false);
  const [errMsg,setErrMsg] = useState(false);

  const handleFormViewComments = (e) => {
    e.preventDefault();
 }

  const HandleOnClickArticleVoteAdd = () => {

    setArticleVotes((currentArticleVotes) => {
      return  currentArticleVotes + 1;
    })

    const  newVote = {inc_votes: 1};
    const articleIdNum = Number(article.article_id);
    const  patchUrl = `/articles/${articleIdNum}`;
    setErrMsg(false);

      patchData(patchUrl,newVote)
       .catch((error) => {          
           setArticleVotes((currentArticleVotes) => {
            return  currentArticleVotes - 1;
           })          
           setErrMsg(true);
      })

      if (errMsg === false) {
         setArticleVotesMinus(false);
         setArticleVotesAdd(true)
      }
    
  }

  const HandleOnClickArticleVoteMinus = () => {
    
    setArticleVotes((currentArticleVotes) => {
       return  currentArticleVotes - 1;
    })
    const  newVote = {inc_votes: -1};
    const articleIdNum = Number(article.article_id);
    const  patchUrl = `/articles/${articleIdNum}`;
    setErrMsg(false);
     
      patchData(patchUrl,newVote)
       .catch((error) => {          
           setArticleVotes((currentArticleVotes) => {
            return  currentArticleVotes + 1;
           })
           
           setErrMsg(true);
        })

        if (errMsg === false) {
          setArticleVotesMinus(true);
          setArticleVotesAdd(false)
       }


  }

    const handleOnClickViewComments = (e) => {
     
      if (e.target.textContent === 'View Comments') {
         e.target.textContent = 'Hide Comments';
         setArticleId(article.article_id)
      } else {
         e.target.textContent = 'View Comments';
         setArticleId("")
      }
      
    }

    return (
        <div> 
         <section>
              <header name="Title">Title: {article.title}</header>
              <header name="Author">Author: {article.author}</header>
              <header name="Topic">Topic: {article.topic}</header>
              <header name="Body">Body: {article.body}</header>
              <header name ="Created Date">Created Date: {article.created_at.substring(0,10)}</header>
              <header name = "Comment Count">Comment Count: {article.comment_count}</header>
              <header name = "Vote">Votes: {article.votes + articleVotes}</header>            
              <div>
                 <button onClick={HandleOnClickArticleVoteAdd} disabled = { articleVotesAdd }>Vote+</button> <button onClick = {HandleOnClickArticleVoteMinus} disabled = {articleVotesMinus}>Vote-</button>
              </div>
              <div>
                   {errMsg ? <p>Something went wrong! Please try again</p>:null}
              </div>
              <img src = {article.article_img_url}  alt={article.title} />
          </section>
        
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




