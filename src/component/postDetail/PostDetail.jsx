import React from 'react';
import {convert_to_date_string} from '../../util/convert_to_date_string';
import PostContent from './PostContent';
import styles from './PostDetail.module.css';

function PostDetail({post}) {
    const {title, by: author, time} = post;
    
    return (
        <article className={styles.post_detail}>
            <header className={styles.post__header}>
                <div className={styles.title__wrap}>
                    <p>{title}</p>
                </div>
                <div className={styles.post_info}>
                    <p>{author}</p>
                    <p>{convert_to_date_string(time)}</p>
                </div>
            </header>
            <PostContent post={post} />
        </article>
    );
}

export default PostDetail;