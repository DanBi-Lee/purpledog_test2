import { useEffect } from "react";
import { createCallback, createOptions } from "../util/lazy_loading-observer";

function useObserverLazyLoad($element, fetchData) {
  useEffect(() => {
    const getAndsetPostData = async ($element) => {
      const { id } = $element.dataset;
      fetchData(id);
    };
    const observer = new IntersectionObserver(
      createCallback(getAndsetPostData),
      createOptions()
    );
    observer.observe($element.current);
  }, [$element, fetchData]);
}

export default useObserverLazyLoad;
