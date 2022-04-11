import React from 'react';
import ReCommentItem from './ReCommentItem';
import styles from './ReCommentList.module.css';

function ReCommentList({re_comment_list}) {
    return (
        <div className={styles.re_comment__list}>
            {
                re_comment_list.map(recomment => <ReCommentItem key={recomment} id={recomment}  />)
            }
        </div>
    );
}

export default ReCommentList;