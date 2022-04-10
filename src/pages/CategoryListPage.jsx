import React from 'react';
import CategoryListSection from '../component/categoryList/CategoryListSection';
import { CATEGORY_LIST } from '../data/category_list';
import Layout from '../layout/Layout';

function CategoryListPage() {
    const category_list = CATEGORY_LIST.sort().reverse();

    return (
        <Layout>
            <CategoryListSection list={category_list} />
        </Layout>
    );
}

export default CategoryListPage;