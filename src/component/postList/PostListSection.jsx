import React from 'react';
import { useParams } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import PostList from './PostList';
import styles from './PostListSection.module.css';

function PostListSection () {
  const {categoryId} = useParams();
  return (
      <section className={styles.post_list__section}>
          <SectionHeader categoryId={categoryId} />
          <div className={styles.post_list__wrap}>
            <PostList />
          </div>
      </section>
  );
}

export default PostListSection;