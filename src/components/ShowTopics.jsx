import { useState,useEffect} from "react";
import {getData} from "../utilities/API";
import ArticleCard from "./ArticleCard";
import TopicCard from "./TopicCard";

const  ShowTopics = () => {
    const [topics,setTopics] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const [errMsg,setErrMsg] = useState("")

    let  searchUrl ="/topics";
    useEffect (() =>{
        getData(searchUrl)      
        .then (({topics}) => {
            setTopics(topics)     
            setErrMsg("")  
        })
        .catch((error) =>{
            setErrMsg("Something went wrong! Please try again");
        })
        .finally(()=> {
          setIsLoading(false)
        })
   },[]);
   
if (isLoading) {
    return (<p>Loading.........</p>)
}

    return (
        <div>
            {errMsg ? <p>{errMsg}</p> : <TopicCard topics = {topics}/> } 
        </div>
    
    )
}

export default ShowTopics;