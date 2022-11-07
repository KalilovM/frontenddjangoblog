import React, {useEffect, useState} from 'react';
import Post from "../../components/post/Post";
import {request} from "../request/Request";

function Posts(props) {
    const [data, setData] = useState([])
    useEffect( () => {
        // Уточнить можно ли так делать? по 3 запроса на каждом useEffect
        request("http://localhost:8000/api/", setData)
    } ,[])
    console.log(data)
    return (<div>
        {data.map((item) => {
            return <Post key={item.id} {...item}/>
        })}
    </div>);
}

export default Posts;