import React from 'react';
import styles from './ReCommentItem.module.css';

function ReCommentItem ({depth = 0}) {
  return (
    <div className={styles.re_comment} style={{marginLeft: `${depth*0.2}rem`}}>
        <header className={styles.re_comment__header}>
            <p className={styles.re_comment__author}>작성자</p>
            <p className={styles.re_comment__date}>작성 날짜</p>
        </header>
        <div className={styles.text}>
          작성글
        </div>
    </div>
  );
}

export default ReCommentItem;