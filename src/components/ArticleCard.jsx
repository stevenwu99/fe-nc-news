const articleCard = ({articles}) => {
    return (
        <div>
            {
                 articles.map((article) =>{
                 return  ( 
                       <div key = {article.article_id}>
                        <label name = "articleId">Id: {article.article_id}</label> <br/>
                        <label name = "articletitle">Title: {article.title}</label> <br/>
                        <label name = "articleauthor">Author: {article.author}</label> <br/>
                        <label name = "article.topic">Topic: {article.topic}</label> <br/>
                        <label name = "articlecreatedat">Created_at: {article.created_at}</label> <br/>
                        <img src = {article.article_img_url}  alt={'this picture for' + article.title} /> <br/>
                        <label name = "article.votes">Votes: {article.votes}</label> <br/>
                        <hr/>
                      </div>
                 )
               })
            } 
            
        </div>
    
    )    
}

export default articleCard;