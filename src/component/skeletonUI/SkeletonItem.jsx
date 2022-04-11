import React from 'react';
import styles from './SkeletonItem.module.css';

function SkeletonItem ({isError = false}) {
  return (
      <div className={styles.skeleton__item}>
          {isError&& '⚠ 에러가 발생했습니다.'}
      </div>
  );
}

export default SkeletonItem;