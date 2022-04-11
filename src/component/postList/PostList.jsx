import React, {useEffect} from 'react';
import PostItem from './PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { getPostListThunk } from '../../modules/post';
import usePaginationData from '../../hooks/usePaginationData';
import Pagination from '../ui/Pagination';
import SkeletonList from '../skeletonUI/SkeletonList';

function PostList({categoryId}) {
    const dispatch = useDispatch();
    const post_list = useSelector(state=>state.post.post_list);
    

    useEffect(() => {
        dispatch(getPostListThunk(categoryId));
      }, [categoryId, dispatch]);

    const {pagination, handlePageClick} = usePaginationData(post_list.data);

    if(post_list.isLoading){
        return <SkeletonList />
    }
    if(post_list.error){
        return <SkeletonList isError={true} />
    }

    return (
        <>
            <ul>
            {
            pagination.currentItems && pagination.currentItems.map(((item, index) => (
                <PostItem key={item} id={item} />
            )))
            }
            </ul>
            <Pagination pagination={pagination} handlePageClick={handlePageClick}  />
        </>
    );
}

export default PostList;