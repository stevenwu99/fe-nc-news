import { Link } from 'react-router-dom';
import { linkStyle } from '../utilities/API';

const articleCard = ({articles}) => {
    return (
        <div>
            {
                 articles.map((article) =>{
                 return  ( 
                       <div key = {article.article_id}>
                        <Link to={`/articles/${article.article_id}`} style={linkStyle}>
                           <header name="Title">Title: {article.title}</header>
                           <header name="Author">Author: {article.author}</header>
                           <header name="Topic">Topic: {article.topic}</header>
                           <header name ="Created Date">Created_at: {article.created_at.substring(0,10)}</header>
                        </Link>
                        <hr/>
                      </div>
                 )
               })
            } 
            
        </div>
    
    )    
}

export default articleCard;