import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getPostThunk} from '../../modules/post';
import CommentList from '../comment/CommentList';
import SkeletonItem from '../skeletonUI/SkeletonItem';
import PostDetail from './PostDetail';
import styles from './PostDetailSection.module.css';

function PostDetailSection() {
    const {postId} = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => state.post.post);

    useEffect(() => {
        dispatch(getPostThunk(postId));
    }, [dispatch, postId]);

    if (post.isLoading) {
        return (
            <section className={styles.post_detail__section}>
                <SkeletonItem/>
            </section>
        );
    }
    if (post.error || !post.data) {
        return (
            <section className={styles.post_detail__section}>
                <SkeletonItem idError={true} />
            </section>
        );
    }

    return (
        <section className={styles.post_detail__section}>
            <PostDetail post={post.data}/>
            <CommentList post={post.data}/>
        </section>
    );
}

export default PostDetailSection;