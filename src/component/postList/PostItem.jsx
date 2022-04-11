import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../api/post';
import useHTTP from '../../hooks/useHTTP';
import { createCallback, createOptions } from '../../util/lazy_loading-observer';
import styles from './PostItem.module.css';

function PostItem({id}) {
    const $post = useRef();
    const {state: postState, fetchData: fetchPost} = useHTTP(getPost);
    

    useEffect(() => {
        const getAndsetPostData = async ($element) => {
            const {id} = $element.dataset;
            fetchPost(id);
        }
        const observer = new IntersectionObserver(createCallback(getAndsetPostData), createOptions());
        observer.observe($post.current);
    }, [fetchPost]);

    let author, date, title;
    if(postState.data){
        author = postState.data.by ;
        date = postState.data.time ;
        title = postState.data.title;
    }
    
    return (
        <li className={styles.post} ref={$post} data-id={id} >
            <Link to={`/post/${id}`}>
                <div className={styles.title__wrap}>
                    <p className={styles.title}>{title}</p>
                </div>
                <div className={styles.post_info}>
                    <p className={styles.date}>{date}</p>
                    <p className={styles.author}>{author}</p>
                </div>
            </Link>
        </li>
    );
}

export default PostItem;