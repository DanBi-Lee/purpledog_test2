const url = "https://hacker-news.firebaseio.com/v0/";

// 카테고리 포스트 목록 불러오기
export const getPostList = async (categoryId) => {
  try {
    const response = await fetch(`${url}${categoryId}.json`);
    if (response.status !== 200) {
      throw new Error("에러가 발생했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("에러가 발생했습니다.");
  }
};

// 특정 포스트 불러오기
export const getPost = async (postId) => {
  try {
    const response = await fetch(`${url}item/${postId}.json`);
    if (response.status !== 200) {
      throw new Error("에러가 발생했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("에러가 발생했습니다.");
  }
};
