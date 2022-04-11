import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostThunk } from '../../modules/post';
import CommentList from '../comment/CommentList';
import SectionHeader from '../ui/SectionHeader';
import PostDetail from './PostDetail';
import styles from './PostDetailSection.module.css';

function PostDetailSection () {
  const {postId} = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state=> state.post.post);

  useEffect(()=>{
      dispatch(getPostThunk(postId));
  }, [dispatch, postId]);

  if(post.isLoading){
      return <div>로딩중...</div>
  }
  if(post.error || !post.data){
      return <div>⚠ 에러가 발생했습니다.</div>
  }

  return (
      <section className={styles.post_detail__section}>
          <SectionHeader />
          <PostDetail post={post.data} />
          <CommentList post={post.data} />
      </section>
  );
}

export default PostDetailSection;