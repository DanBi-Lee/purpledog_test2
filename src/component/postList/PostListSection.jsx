import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import PostList from './PostList';
import styles from './PostListSection.module.css';

function PostListSection () {
  return (
      <section className={styles.post_list__section}>
          <SectionHeader />
          <div className={styles.post_list__wrap}>
            <PostList />
          </div>
      </section>
  );
}

export default PostListSection;