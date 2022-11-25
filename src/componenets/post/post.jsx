import React from "react";
import styles from "./post.module.scss";
import Avatar from "./avatar/avatar";
import { Link } from "react-router-dom";
import PostBar from "./postBar/PostBar";

function Post(props) {
    return (
        // todo change date and time and format it
        <div className={styles.wrapper}>
            <Avatar {...props.author} date={props.created_at} />
            <h1>{props.title}</h1>
            <div className={styles.cover}>
                <img src={props.cover} alt="Обложка" />
            </div>
            <p className={styles.content}>{props.short_content}</p>
            <div>
                {/*todo сделать эту кнопку красивее*/}
                <Link to={`/${props.id}`} className={styles.link}>
                    Читать далее
                </Link>
            </div>
            <PostBar id={props.id} />
        </div>
    );
}

export default Post;
