// IntersectionObserver 옵션 생성 함수
export const createOptions = (options) => ({
  threshold: 0.5,
  ...options,
});

// IntersectionObserver callback함수 생성 함수
export const createCallback = (callback) => (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      // 인자로 받은 callback함수 실행
      callback(entry.target);
    }
  });
};
