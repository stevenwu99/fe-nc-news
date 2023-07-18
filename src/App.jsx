import './App.css'
import {Routes,Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import ShowArticles from './components/ShowArticles';

const App = () => {

    return (
        <div> 
             <NavBar/>
             <Routes>
                 <Route path="/" element = {<Home/>} />
                 <Route path="/articles"  element = {<ShowArticles />} />
            </Routes>
        </div>
    )
}

export default App;

