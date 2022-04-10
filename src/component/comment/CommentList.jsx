import React from 'react';
import CommentItem from './CommentItem';
import styles from './CommentList.module.css';

function CommentList() {
    return (
        <div className={styles.comment_list__wrap}>
            <p className={styles.comment_list__title}>총 n개의 댓글이 있습니다.</p>
            <div className={styles.comment_list__list}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
        </div>
    );
}

export default CommentList;