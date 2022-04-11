import React from 'react';
import usePaginationData from '../../hooks/usePaginationData';
import CommentItem from './CommentItem';
import styles from './CommentList.module.css';
import Pagination from '../ui/Pagination';

function CommentList({post}) {
    // kids : 댓글 id의 배열
    const {kids} = post;
    const { pagination, handlePageClick } =  usePaginationData(kids, {itemsPerPage:5});

    if(!kids){
        return (
        <div className={styles.comment_list__wrap}>
            <p className={styles.comment_list__title}>댓글이 없습니다.</p>
        </div>
        )
    }
    return (
        <div className={styles.comment_list__wrap}>
            <p className={styles.comment_list__title}>
                { 
                    kids.length !== 0 
                    ? `총 ${kids.length}개의 댓글이 있습니다.`
                    : `댓글이 없습니다.`
                }
            </p>
            <div className={styles.comment_list__list}>
                {
                pagination.currentItems && pagination.currentItems.map(((item, index) => (
                    <CommentItem key={item} id={item} />
                )))
                }
                <Pagination pagination={pagination} handlePageClick={handlePageClick}  />
            </div>
        </div>
    );
}

export default CommentList;