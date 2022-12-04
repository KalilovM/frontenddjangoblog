import Image from "next/image";
import React from "react";
import Cover from "../../../../public/cover.webp";
import WrapperPost from "../wrapper/WrapperPost";
import PostHeader from "./header/PostHeader";
import styles from "./SinglePost.module.scss";

export default function SinglePost() {
  return (
    <WrapperPost>
      <PostHeader />
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>Some interesting title will be appered here</h2>
          <div className={styles.category}>
            <p>
              <span>First</span> <span>second</span> <span>third</span>
            </p>
          </div>
          <div className={styles.tagsWrapper}>
            <div className={styles.tags}>
              <span>Translate</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.preview}>
            <Image src={Cover} alt="preview" />
          </div>
          <div className={styles.previewText}>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </p>
          </div>
        </div>
      </div>
    </WrapperPost>
  );
}
