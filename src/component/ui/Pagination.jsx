import React from 'react';
import ReactPaginate from 'react-paginate';
import icon_arrow_next from '../../assets/icon_caret-right-solid.svg';
import icon_arrow_prev from '../../assets/icon_caret-left-solid.svg';
import styles from './Pagination.module.css';

function Pagination ({pagination, handlePageClick}) {
  return (
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
  );
}

export default Pagination;