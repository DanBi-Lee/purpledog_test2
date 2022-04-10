import React from 'react';
import styles from './PostItem.module.css';

function PostItem({text}) {
    return (
        <li className={styles.post}>
            <div className={styles.title__wrap}>
                <p className={styles.title}>제목 - {text}</p>
            </div>
            <div className={styles.post_info}>
                <p className={styles.date}>날짜</p>
                <p className={styles.author}>글쓴이</p>
            </div>
        </li>
    );
}

export default PostItem;