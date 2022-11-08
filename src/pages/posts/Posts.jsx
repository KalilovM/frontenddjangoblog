import React, {useEffect, useState} from 'react';
import Post from "../../components/post/Post";
import {AxiosPrivate} from "../../common/AxiosPrivate";
import {Instance} from "../../services/axios";
import axios from "axios";

function Posts(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/").then((res) => {
            setData(res.data)
        })
    } ,[])
    return (<div>
        {data.map((item) => {
            return <Post key={item.id} {...item}/>
        })}
    </div>);
}

export default Posts;