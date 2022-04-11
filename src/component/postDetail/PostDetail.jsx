import React from 'react';
import styles from './PostDetail.module.css';

function PostDetail({post}) {
    const {title, by:author, time:date, url} = post;
    return (
        <article className={styles.post_detail}>
            <header className={styles.post__header}>
                <div className={styles.title__wrap}>
                    <p>{title}</p>
                </div>
                <div className={styles.post_info}>
                    <p>{author}</p>
                    <p>{new Date(date*1000).toLocaleString()}</p>
                </div>
            </header>
            <div className={styles.post_content}>
                {
                    url &&
                    <a href={url}>{url}</a>
                }
            </div>
        </article>
    );
}

export default PostDetail;