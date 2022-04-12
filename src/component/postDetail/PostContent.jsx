import React from 'react';
import styles from './PostConent.module.css';

function PostContent ({post}) {
    console.log(post.type);
    switch(post.type){
        case "story":
        case "job":
            return (
                <div className={styles.post_content}>
                    {post.url && <a href={post.url}>{post.url}</a>}
                    {post.text && <div dangerouslySetInnerHTML={{__html:post.text}} />}
                </div>
            )
        default:
            return (<div className={styles.post_content}>지원하지 않는 게시물 타입입니다.</div>);
    }
}

export default PostContent;