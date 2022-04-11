import React from 'react';
import styles from './SectionHeader.module.css'

function SectionHeader({categoryId}) {
    return (
        <header className={styles.section__header}>
            <h2 className={styles.section__title}>{categoryId}</h2>
        </header>
    );
}

export default SectionHeader;