import React from "react";
import styles from "./single.module.scss";
import { InstanceApi } from "../../../services/axios/axios";
import { useParams } from "react-router-dom";
import Avatar from "../avatar/avatar";
import Output from "editorjs-react-renderer";

function SinglePost(props) {
    const { id } = useParams();
    console.log(id);
    const [postData, setPostData] = React.useState(null);

    React.useEffect(() => {
        InstanceApi.get(`/${id}/`).then((res) => {
            console.log(res.data);
            setPostData(res.data);
        });
    }, []);

    return (
        !!postData && (
            <div className={styles.wrapper}>
                <Avatar {...postData.author} date={postData.created_at} />
                <h1 className={styles.heading}>{postData.title}</h1>
                <div className={styles.image_container}>
                    <img src={postData.cover} alt="cover" />
                </div>
                <Output data={postData.content} />
            </div>
        )
    );
}

export default SinglePost;
