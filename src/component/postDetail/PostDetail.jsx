import React from 'react';
import styles from './PostDetail.module.css';

function PostDetail() {
    return (
        <article className={styles.post_detail}>
            <header className={styles.post__header}>
                <div className={styles.title__wrap}>
                    <p>제목</p>
                </div>
                <div className={styles.post_info}>
                    <p>글쓴이</p>
                    <p>날짜</p>
                </div>
            </header>
            <div className={styles.post_content}>
                글 본문
            </div>
        </article>
    );
}

export default PostDetail;