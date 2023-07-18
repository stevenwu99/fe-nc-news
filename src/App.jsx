import './App.css'
import {Routes,Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Header from './components/Header';
import ShowArticles from './components/ShowArticles';

const App = () => {

    return (
        <div> 
             <NavBar/>
             <Routes>
                 <Route path="/" element = {<Home/>} />
                 <Route path="/articles"  element = {<><Header title ={"View All articles"}/> <ShowArticles /></>} />
            </Routes>
        </div>
    )
}

export default App;

