import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import PostItem from './PostItem';
import styles from './PostListSection.module.css';

function PostListSection () {
  return (
      <section className={styles.post_list__section}>
          <SectionHeader />
          <div className={styles.post_list__wrap}>
            <ul>
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </ul>
          </div>
      </section>
  );
}

export default PostListSection;