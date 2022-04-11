import React from 'react';
import styles from './SkeletonList.module.css';

function SkeletonList ({isError = false}) {
  return (
      <div className={styles.skeleton_list}>
          <div className={styles.skeleton_list__item} />
          <div className={styles.skeleton_list__item} />
          <div className={styles.skeleton_list__item} />
          <div className={styles.skeleton_list__item} />
          <div className={styles.skeleton_list__item} />
          {
            isError && 
            <div className={styles.skeleton_error}>
              ⚠ 에러가 발생했습니다.
            </div>
          }
      </div>
  );
}

export default SkeletonList;