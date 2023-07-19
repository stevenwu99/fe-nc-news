import {Routes,Route} from 'react-router-dom';
import './App.css'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import ShowArticles from './components/ShowArticles';
import ShowArticlesById from './components/ShowArticlesById';
import ShowCommentsByArticle from './components/ShowCommentsByArticle';

const App = () => {
    return (
        <div> 
             <NavBar/>
             <Routes>
                 <Route path="/" element = {<Home/>} />
                 <Route path="/articles"  element = {<><Header title ={"View All the articles"}/> <ShowArticles /></>} />
                 <Route path="/articles/:article_id"  element = {<ShowArticlesById/>} />
            </Routes>
        </div>
    )
}

export default App;

