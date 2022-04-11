import React from 'react';
import CommentItem from './CommentItem';
import styles from './CommentList.module.css';

function CommentList({post}) {
    // kids : 댓글 id의 배열
    const {kids} = post;

    if(!kids){
        return;
    }
    return (
        <div className={styles.comment_list__wrap}>
            <p className={styles.comment_list__title}>
                { 
                    kids.length !== 0 
                    ? `총 ${kids.length}개의 댓글이 있습니다.`
                    : `댓글이 없습니다.`
                }
            </p>
            <div className={styles.comment_list__list}>
                {
                    kids.map(comment=> <CommentItem key={comment} id={comment} />)
                }
            </div>
        </div>
    );
}

export default CommentList;