import React from 'react';
import Post from "../../componenets/post/post";
import {InstanceApi} from "../../sevices/axios/axios";
import {useParams} from "react-router-dom";

function Posts(props) {

    const [postsData, setPostsData] = React.useState([])
    // InstanceApi.get("").then((res) => {
    //     console.log(res)
    //     setPostsData(res.data)
    // })
    React.useEffect(() => {
        InstanceApi.get("").then((res) => {
            setPostsData(res.data)
        })
    }, [])
    return (

        <div>
            {postsData.map((item) => (
                <Post key={item.id} {...item}/>
            ))}

        </div>
    );
}

export default Posts;