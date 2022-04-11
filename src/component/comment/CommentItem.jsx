import React, { useState } from 'react';
import ReCommentList from './ReCommentList';
import styles from './CommentItem.module.css';
import {ReactComponent as IconComment} from '../../assets/icon_comment.svg';

function CommentItem({id}) {
    const [commentOpen, SetCommentOpen] = useState(false);

    const onCommentToggle = () => {
        SetCommentOpen(state=>!state);
    }

    return (
        <article className={styles.comment} data-id={id}>
            <header className={styles.comment__header}>
                <p className={styles.comment_author}>
                    작성자
                </p>
                <p className={styles.comment_date}>
                    날짜
                </p>
            </header>
            <div className={styles.comment_content}>
                덧글 내용
            </div>
            <footer className={styles.comment__footer}>
                <div className={styles.button__wrap}>
                    <button  className={`${styles.comment_button} ${commentOpen? styles.on : ''}`} onClick={onCommentToggle}>
                        <IconComment width="24"/>
                        <span>댓글 n개</span>
                    </button>
                </div>
                {
                    commentOpen && <ReCommentList/>
                }
            </footer>
        </article>
    );
}

export default CommentItem;