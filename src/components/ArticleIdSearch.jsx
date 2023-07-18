import { useState } from "react";

const ArticleIdSearch = ({setArticleById}) => {

    const [articleIdInput,setArticleIdInput] = useState('');
    const [validateMsg, setValidateMsg] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if ( /^\d+$/.test(articleIdInput)) {
            setValidateMsg("");
            setArticleById(articleIdInput);
        } else {
            setValidateMsg("Must only contain digits");
            setArticleById("");
        } 
        setArticleIdInput("")
     }

    return (
        <div>          
            <form onSubmit={handleFormSubmit}> 
                <label htmlFor ="articleid">Please Input article Id:</label>
                <input type="text" id="articleid" name = "Input article Id" value = {articleIdInput} placeholder= "123456" maxLength ="10" onChange= {(e) => {setArticleIdInput(e.target.value)}} required/>
                <button>Search</button>
             </form>
             <p>{validateMsg}</p>
        </div>

    )
}

export default ArticleIdSearch;