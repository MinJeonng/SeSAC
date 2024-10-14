import { useState } from 'react';

export const usePagination = ({ refetch, lastPage }) => {
  const [startPage, setStartPage] = useState(1);
  const onClickPage = (e) => {
    refetch({ page: Number(e.currentTarget.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      refetch({ page: startPage + 10 });
    }
  };

  return {
    startPage,
    onClickNextPage,
    onClickPage,
    onClickPrevPage,
  };
};
