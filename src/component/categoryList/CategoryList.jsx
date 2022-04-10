import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryList.module.css';

function CategoryList({list}) {
    return (
        <ul className={styles.category_list__list}>
            {
                list.map(category=> (
                <li key={category}> 
                    <Link to={`category/${category}`}> {category}</Link>
                </li>
                ))
            }
        </ul>
    );
}

export default CategoryList;