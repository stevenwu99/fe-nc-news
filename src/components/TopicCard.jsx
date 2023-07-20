import { Link } from 'react-router-dom';
import { linkStyle } from '../utilities/API';

const TopicCard = ({topics}) => {
    return (
        <div>
            {
                 topics.map((topic) =>{
                 return  ( 
                       <div key = {topic.slug}>
                        <Link to={`/articles?topic=${topic.slug}`} style={linkStyle}>
                           <header name="Slug">Slug: {topic.slug}</header>
                           <header name="Description">Description: {topic.description}</header>
                         </Link>
                        <hr/>
                      </div>
                 )
               })
            } 
            
        </div>
    
    )    
}

export default TopicCard;

