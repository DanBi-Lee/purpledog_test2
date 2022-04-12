import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../api/post';
import useHTTP from '../../hooks/useHTTP';
import useObserverLazyLoad from '../../hooks/useObserverLazyLoad';
import { convert_to_date_string } from '../../util/convert_to_date_string';
import SkeletonItem from '../skeletonUI/SkeletonItem';
import styles from './PostItem.module.css';

function PostItem({id}) {
    const $post = useRef();
    const {state: postState, fetchData: fetchPost} = useHTTP(getPost);

    useObserverLazyLoad($post, fetchPost);

    if(postState.isLoading){
        return <SkeletonItem />;
    }
    if(postState.error){
        return <SkeletonItem isError={true} />;
    }

    let author, time, title;
    if(postState.data){
        author = postState.data.by ;
        time = postState.data.time ;
        title = postState.data.title;
    }
    
    return (
        <li className={styles.post} ref={$post} data-id={id} >
            <Link to={`/post/${id}`}>
                <div className={styles.title__wrap}>
                    <p className={styles.title}>{title}</p>
                </div>
                <div className={styles.post_info}>
                    <p className={styles.date}>{convert_to_date_string(time)}</p>
                    <p className={styles.author}>{author}</p>
                </div>
            </Link>
        </li>
    );
}

export default PostItem;