import React from 'react';
import CategoryList from './CategoryList';
import styles from './CategoryListSection.module.css';

function CategoryListSection({list}) {
    return (
        <section className={styles.category_list__section}>
            <h2 className={styles.category_list__title}>해커뉴스 카테고리</h2>
            <CategoryList list={list} />
        </section>
    );
}

export default CategoryListSection;