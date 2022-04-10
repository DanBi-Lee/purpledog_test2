import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import PostItem from './PostItem';
import styles from './PostList.module.css';
import icon_arrow_next from '../../assets/icon_caret-right-solid.svg';
import icon_arrow_prev from '../../assets/icon_caret-left-solid.svg';

const datas = [
];

function PostList() {
    const [pagination,
        setPagination] = useState({data: datas, currentItems: [], itemsPerPage: 15, pageCount: 0, itemOffset: 0});
    useEffect(() => {
        setPagination((state) => ({
            ...state,
            pageCount: Math.ceil(state.data.length / state.itemsPerPage),
            currentItems: state
                .data
                .slice(pagination.itemOffset, pagination.itemOffset + pagination.itemsPerPage)
        }))
    }, [pagination.itemsPerPage, pagination.itemOffset]);

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
                <PostItem key={item} text={item} />
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