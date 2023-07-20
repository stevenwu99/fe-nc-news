import { useEffect,useContext, useState} from "react";
import { getData } from "../utilities/API";
import { UserContext } from "../App";

export const Login = () => {
    const [usersInfo,setUsersInfo] = useState([]);
    const {user,setUser} = useContext(UserContext);

   const searchUrl = "/users"

    useEffect (() =>{
        getData(searchUrl)      
        .then (({users}) => {
            setUsersInfo(users)       
            setUser(users[0].username)
        })
        .catch((error) =>{
        })
   },[]);


    return (
        <div>
           Select user name: 
          <select name="username"  value = {user} onChange ={(e) =>{setUser(e.target.value)}}> 
             {usersInfo.map((userInfo) => <option key = {userInfo.username} value={userInfo.username}>{userInfo.username}</option>)}
          </select>
          <p>Signed in as :{user}</p>
        </div>
    )
}

