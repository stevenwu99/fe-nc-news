import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Header = ({title}) => {
    const [searchParams,setSearchParams] = useSearchParams ();
    const [headerMsg,setHeaderMsg] = useState("");
    const topic = searchParams.get("topic");
    let  headerStr = "";
    
     if (title === "topics") {
        headerStr = "View all the topics"
     } else {
        if (title ==="articles" && topic) {
            headerStr = "View the topic: " + topic.trim()
        } else {
            headerStr = "View all the articles"
        }
     }
 

    return (
         <div>
             <h1>{headerStr}</h1>
         </div>
    )
      
 }
 
 export default Header;