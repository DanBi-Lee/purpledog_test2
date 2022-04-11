import React, {useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import PostItem from './PostItem';
import styles from './PostList.module.css';
import icon_arrow_next from '../../assets/icon_caret-right-solid.svg';
import icon_arrow_prev from '../../assets/icon_caret-left-solid.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getPostListThunk } from '../../modules/post';
import usePaginationData from '../../hooks/usePaginationData';

function PostList({categoryId}) {
    const dispatch = useDispatch();
    const post_list = useSelector(state=>state.post.post_list);
    

    useEffect(() => {
        dispatch(getPostListThunk(categoryId));
      }, [categoryId, dispatch]);

    const {pagination, handlePageClick} = usePaginationData(post_list.data);

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