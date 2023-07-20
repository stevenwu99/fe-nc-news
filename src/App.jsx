import {Routes,Route} from 'react-router-dom';
import { useState,createContext} from 'react';
import './App.css'

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import ShowArticles from './components/ShowArticles';
import ShowArticlesById from './components/ShowArticlesById';

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
                 <Route path="/articles"  element = {<><Header title ={"View all the articles"}/> <ShowArticles /></>} />
                 <Route path="/articles/:article_id"  element = {<ShowArticlesById/>} />
              </Routes>
          </div>
        </UserContext.Provider>
    )
}

export default App;

