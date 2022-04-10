import React from 'react';
import ReCommentItem from './ReCommentItem';
import styles from './ReCommentList.module.css';

function ReCommentList() {
    return (
        <div className={styles.re_comment__list}>
            <ReCommentItem />
            <ReCommentItem depth={1}/>
            <ReCommentItem />
        </div>
    );
}

export default ReCommentList;