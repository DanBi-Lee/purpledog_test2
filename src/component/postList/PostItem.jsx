import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../../api/post';
import { createCallback, createOptions } from '../../util/lazy_loading-observer';
import styles from './PostItem.module.css';

function PostItem({id}) {
    const $post = useRef();
    const [post, setPost] = useState({});
    const getAndsetPostData = async ($element) => {
        const {id} = $element.dataset;
        const post = await getPost(id);
        const {by, time, title} = post;
        setPost({ author : by, date : new Date(time*1000).toLocaleString(), title});
    }

    useEffect(() => {
        const observer = new IntersectionObserver(createCallback(getAndsetPostData), createOptions());
        observer.observe($post.current);
    }, []);

    return (
        <li className={styles.post} ref={$post} data-id={id} >
            <Link to={`/post/${id}`}>
                <div className={styles.title__wrap}>
                    <p className={styles.title}>{post.title}</p>
                </div>
                <div className={styles.post_info}>
                    <p className={styles.date}>{post.date}</p>
                    <p className={styles.author}>{post.author}</p>
                </div>
            </Link>
        </li>
    );
}

export default PostItem;