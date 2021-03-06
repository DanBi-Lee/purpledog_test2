import React, { useRef } from 'react';
import { getPost } from '../../api/post';
import useHTTP from '../../hooks/useHTTP';
import useObserverLazyLoad from '../../hooks/useObserverLazyLoad';
import { convert_to_date_string } from '../../util/convert_to_date_string';
import SkeletonItem from '../skeletonUI/SkeletonItem';
import styles from './ReCommentItem.module.css';

function ReCommentItem ({id, depth = 0}) {
  const $re_comment = useRef();
  const {state: reCommentState, fetchData: fetchreComment} = useHTTP(getPost);
  useObserverLazyLoad($re_comment, fetchreComment);

  if(reCommentState.isLoading){
    return <SkeletonItem />
  }

  if(reCommentState.error){
    return <SkeletonItem isError={true} />
  }

  let author, time, text;
  if(reCommentState.data){
      author = reCommentState.data.by ;
      time = reCommentState.data.time ;
      text = reCommentState.data.text;
  }

  return (
    <div className={styles.re_comment} ref={$re_comment} style={{marginLeft: `${depth*0.2}rem`}} data-id={id} >
        <header className={styles.re_comment__header}>
            <p className={styles.re_comment__author}>{author}</p>
            <p className={styles.re_comment__date}>{convert_to_date_string(time)}</p>
        </header>
        <div className={styles.text} dangerouslySetInnerHTML={{__html: text}} />
    </div>
  );
}

export default ReCommentItem;