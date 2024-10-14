'use client';

import { usePagination } from './hooks';

export default function Pagination({ refetch, lastPage }) {
  const { startPage, onClickNextPage, onClickPage, onClickPrevPage } =
    usePagination({ refetch, lastPage });
  return (
    <>
      <span onClick={onClickPrevPage}>{`<`}</span>
      {new Array(10).fill('').map(
        (_, index) =>
          // 마지막 페이지보다 작은 페이지들만 보여지게 하는 방법하
          index + startPage <= lastPage && (
            <span
              id={String(index + startPage)}
              key={index + startPage}
              onClick={onClickPage}
              style={{ margin: '10px' }}
            >
              {index + startPage}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>{`>`}</span>
    </>
  );
}
