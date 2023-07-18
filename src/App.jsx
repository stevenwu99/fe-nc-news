import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import ShowArticles from './components/ShowArticles';
import ArticleIdSearch from './components/ArticleIdSearch';
import ShowArticlesById from './components/ShowArticlesById';

const App = () => {
    const [articleId,setArticleById] = useState ("");

    return (
        <div> 
             <NavBar setArticleById = {setArticleById} />
             <Routes>
                 <Route path="/" element = {<Home/>} />
                 <Route path="/articles"  element = {<><Header title ={"View All articles"}/> <ShowArticles /></>} />
                 <Route path="/articles/article_id" element = { <> <Header title ={"Search your article"}/> <ArticleIdSearch setArticleById = {setArticleById}/> 
                    <ShowArticlesById articleId = {articleId} /></>} />
            </Routes>
        </div>
    )
}

export default App;

