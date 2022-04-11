import { useCallback, useEffect, useState } from "react";

function usePaginationData(list, options = {}) {
  const [pagination, setPagination] = useState({
    data: [],
    currentItems: [],
    itemsPerPage: 10,
    pageCount: 0,
    itemOffset: 0,
    ...options,
  });

  useEffect(() => {
    if (!list) {
      return;
    }
    setPagination((state) => ({
      ...state,
      data: list,
      pageCount: Math.ceil(list.length / state.itemsPerPage),
      currentItems: list.slice(
        pagination.itemOffset,
        pagination.itemOffset + pagination.itemsPerPage
      ),
    }));
  }, [pagination.itemOffset, pagination.itemsPerPage, list]);

  const handlePageClick = useCallback(
    (event) => {
      const selected = event.selected;
      const offset =
        (selected * pagination.itemsPerPage) % pagination.data.length;
      setPagination({
        ...pagination,
        itemOffset: offset,
      });
      window.scrollTo(0, 0);
    },
    [pagination]
  );

  return { pagination, handlePageClick };
}

export default usePaginationData;
