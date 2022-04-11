import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import PostItem from './PostItem';
import styles from './PostList.module.css';
import icon_arrow_next from '../../assets/icon_caret-right-solid.svg';
import icon_arrow_prev from '../../assets/icon_caret-left-solid.svg';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostListThunk } from '../../modules/post';

function PostList() {
    const {categoryId} = useParams();
    const post_list = useSelector(state=>state.post.post_list);
    const postList_dispatch = useDispatch();

    const [pagination,
        setPagination] = useState({data: [], currentItems: [], itemsPerPage: 10, pageCount: 0, itemOffset: 0});

    useEffect(()=>{
        postList_dispatch(getPostListThunk(categoryId));
    }, [categoryId, postList_dispatch]);

    useEffect(() => {
        if(!post_list.data){
            return;
        }
        setPagination((state) => ({
            ...state,
            data: post_list.data,
            pageCount: Math.ceil(post_list.data.length / state.itemsPerPage),
            currentItems: post_list.data
                .slice(pagination.itemOffset, pagination.itemOffset + pagination.itemsPerPage)
        }))
    }, [pagination.itemOffset, pagination.itemsPerPage, post_list.data]);

    const handlePageClick = event => {
        const selected = event.selected;
        const offset = (selected * pagination.itemsPerPage) % pagination.data.length;
        setPagination({
            ...pagination,
            itemOffset : offset
        });
        window.scrollTo(0,0);
    };

    return (
        <>
            <ul>
            {
            pagination.currentItems && pagination.currentItems.map(((item, index) => (
                <PostItem key={item} id={item} />
            )))
            }
            </ul>
            <ReactPaginate
                previousLabel={<img width={16} src={icon_arrow_prev} alt="이전" />}
                nextLabel={<img width={16} src={icon_arrow_next} alt="다음" />}
                breakLabel={'...'}
                pageCount={pagination.pageCount}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                renderOnZeroPageCount = {()=>{
                    return (
                        <div>글이 없습니다.</div>
                    )
                }}
                />
        </>
    );
}

export default PostList;