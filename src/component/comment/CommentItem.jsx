import React, { useRef, useState } from 'react';
import ReCommentList from './ReCommentList';
import styles from './CommentItem.module.css';
import {ReactComponent as IconComment} from '../../assets/icon_comment.svg';
import useHTTP from '../../hooks/useHTTP';
import { getPost } from '../../api/post';
import useObserverLazyLoad from '../../hooks/useObserverLazyLoad';

function CommentItem({id}) {
    const [commentOpen, SetCommentOpen] = useState(false);
    const $comment = useRef();
    const {state: commentState, fetchData: fetchComment} = useHTTP(getPost);

    useObserverLazyLoad($comment, fetchComment);

    const onCommentToggle = () => {
        SetCommentOpen(state=>!state);
    }

    let author, date, text, re_comment;
    if(commentState.data){
        author = commentState.data.by ;
        date = commentState.data.time ;
        text = commentState.data.text;
        re_comment = commentState.data.kids;
    }

    return (
        <article className={styles.comment} data-id={id} ref={$comment}>
            <header className={styles.comment__header}>
                <p className={styles.comment_author}>
                    {author}
                </p>
                <p className={styles.comment_date}>
                    {date}
                </p>
            </header>
            <div className={styles.comment_content} dangerouslySetInnerHTML={{__html: text}}  />
            <footer className={styles.comment__footer}>
                <div className={styles.button__wrap}>
                    <button  className={`${styles.comment_button} ${commentOpen? styles.on : ''} ${re_comment||styles.disabled}`} onClick={re_comment&& onCommentToggle}>
                        <IconComment width="24"/>
                        <span>댓글 {re_comment?re_comment.length: 0}개</span>
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