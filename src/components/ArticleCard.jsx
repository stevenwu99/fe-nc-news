const articleCard = ({articles}) => {
    return (
        <div>
            {
                 articles.map((article) =>{
                 return  ( 
                       <div key = {article.article_id}>
                         <header name="Title">Title: {article.title}</header>
                         <header name="Author">Author: {article.author}</header>
                         <header name="Topic">Topic: {article.topic}</header>
                         <header name ="Created Date">Created_at: {article.created_at.substring(0,10)}</header>
                        <img src = {article.article_img_url}  alt={article.title} />
                         <header name = "Vote">Votes: {article.votes}</header>
                        <hr/>
                      </div>
                 )
               })
            } 
            
        </div>
    
    )    
}

export default articleCard;