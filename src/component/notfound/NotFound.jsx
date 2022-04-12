import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <section className={styles.not_found__section}>
            <h2>404 Page</h2>
            <p>존재하지 않는 페이지 입니다.</p>
            <div className={styles.action}>
              <Link className={styles.link} to="/">홈으로</Link>
            </div>
        </section>
    );
}

export default NotFound;