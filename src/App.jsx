import {Routes,Route} from 'react-router-dom';
import { useState,createContext} from 'react';
import './App.css'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import ShowArticles from './components/ShowArticles';
import ShowArticlesById from './components/ShowArticlesById';
import ShowTopics from './components/ShowTopics';
import ErrorPage from './components/ErrorPage';

export const UserContext = createContext(null);

const App = () => {
    const [user,setUser] = useState("")
    return (
        <UserContext.Provider value ={{user,setUser}}>
           <div> 
            <NavBar/>
             <p></p>
             <Routes>
                 <Route path="/" element = {<Home/>} />
                 <Route path="/articles"  element = {<><Header title = {"articles"}/> <ShowArticles /></>} />
                 <Route path="/articles/:article_id"  element = {<ShowArticlesById/>} />
                 <Route path="/topics"  element = {<><Header title ={"topics"}/> <ShowTopics /></>} />
                 <Route path="*" element ={<ErrorPage />} />
              </Routes>
          </div>
        </UserContext.Provider>
    )
}

export default App;

