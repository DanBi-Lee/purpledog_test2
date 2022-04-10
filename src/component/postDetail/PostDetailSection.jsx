import React from 'react';
import CommentList from '../comment/CommentList';
import SectionHeader from '../ui/SectionHeader';
import PostDetail from './PostDetail';
import styles from './PostDetailSection.module.css';

function PostDetailSection () {
  return (
      <section className={styles.post_detail__section}>
          <SectionHeader />
          <PostDetail />
          <CommentList />
      </section>
  );
}

export default PostDetailSection;