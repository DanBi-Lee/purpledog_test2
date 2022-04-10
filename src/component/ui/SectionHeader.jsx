import React from 'react';
import styles from './SectionHeader.module.css'

function SectionHeader() {
    return (
        <header className={styles.section__header}>
            <h2 className={styles.section__title}>카테고리 이름</h2>
        </header>
    );
}

export default SectionHeader;