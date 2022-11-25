import Rank2 from "../../../static/img/rank-2.svg";
import Rank3 from "../../../static/img/rank-3.svg";
import Rank1 from "../../../static/img/rank-1.svg";
import React from "react";
import styles from "./PostBar.module.scss";
import { InstanceApi } from "../../../services/axios/axios";

const PostBar = (props) => {
  const [liked, setLiked] = React.useState(false);
  React.useEffect(() => {
    console.log("refreshed");

    InstanceApi.get(`${props.id}/`).then((res) => {
      setLiked(res.data.is_user_liked_post);
    });
  }, [liked]);
  const LikePost = () => {
    InstanceApi.put("like/", { post: props.id }).then(() => {
      InstanceApi.get(`${props.id}/`).then((res) => {
        setLiked(res.data.is_user_liked_post);
      });
    });
  };
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={`${styles.like_div} ${liked ? styles.liked : null}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 460.958 460.958"
            xmlSpace="preserve"
            onClick={LikePost}
          >
            <g>
              <g>
                <path d="M337.843,23.957c-45.74,0-86.155,25.047-107.364,62.788c-21.209-37.741-61.623-62.788-107.364-62.788    C55.229,23.957,0,79.186,0,147.072c0,54.355,37.736,119.46,112.16,193.506c54.115,53.84,107.363,92.031,109.603,93.631    c2.607,1.861,5.662,2.792,8.716,2.792s6.109-0.93,8.715-2.792c2.241-1.6,55.489-39.791,109.604-93.631    c74.424-74.046,112.16-139.151,112.16-193.506C460.958,79.186,405.729,23.957,337.843,23.957z M327.919,319.032    c-39.843,39.681-80.171,71.279-97.44,84.307c-17.269-13.029-57.597-44.626-97.44-84.307C65.63,251.899,30,192.436,30,147.072    c0-51.344,41.771-93.115,93.115-93.115c47.279,0,87.03,35.369,92.464,82.271c0.876,7.565,7.284,13.273,14.9,13.273    c7.616,0,14.023-5.708,14.9-13.273c5.435-46.902,45.185-82.271,92.464-82.271c51.344,0,93.115,41.771,93.115,93.115    C430.958,192.436,395.328,251.899,327.919,319.032z" />
              </g>
            </g>
          </svg>
        </div>
        <div className={styles.comment_div}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            id="magicoon-Regular"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>comment</title>
            <g id="comment-Regular">
              <path
                id="comment-Regular-2"
                data-name="comment-Regular"
                d="M17,3.25H7A4.756,4.756,0,0,0,2.25,8V21a.75.75,0,0,0,1.28.53l2.414-2.414a1.246,1.246,0,0,1,.885-.366H17A4.756,4.756,0,0,0,21.75,14V8A4.756,4.756,0,0,0,17,3.25ZM20.25,14A3.254,3.254,0,0,1,17,17.25H6.829a2.73,2.73,0,0,0-1.945.806L3.75,19.189V8A3.254,3.254,0,0,1,7,4.75H17A3.254,3.254,0,0,1,20.25,8Z"
              />
            </g>
          </svg>
        </div>
        {/* <div><img src="" alt=""></div> */}
      </div>
    </div>
  );
};

export default PostBar;
