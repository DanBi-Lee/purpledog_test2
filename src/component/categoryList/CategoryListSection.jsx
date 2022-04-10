import React from 'react';
import styles from './CategoryListSection.module.css';

function CategoryList() {
    return (
        <section className={styles.category_list__section}>
            <h2 className={styles.category_list__title}>해커뉴스 카테고리</h2>
            <ul className={styles.category_list__list}>
                <li>topstories</li>
                <li>topstories</li>
                <li>topstories</li>
                <li>topstories</li>
                <li>topstories</li>
            </ul>
        </section>
    );
}

export default CategoryList;