'use client';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// 게시글 조회하기
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onNext = () => {
    // 데이터가 아직 안불러와있는 상태면 fetchmore를 시작해서는 안됌
    if (data === undefined) return;
    fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // 기존에 받아왔던 쿼리를 업데이트 하는 것
        //이전꺼, 신규꺼 받아온다.

        // 여기서도 더이상의 보여줄게 없다면 끝내버리기.
        if (!fetchMoreResult.fetchBoards?.length) {
          setHasMore(false);
          return;
        }
        return {
          // fetchBoards는 이전, 이후 여러개를 합쳐서 보여지게 되는것
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <div>
      <InfiniteScroll
        next={onNext} //hasmore가 실행되면 onNext가 실행
        hasMore={hasMore} //hasmore가 true일대 스크롤 내리면 생기는 것
        loader={<div>로딩중...</div>} //loading 되는 부분
        dataLength={data?.fetchBoards.length ?? 0}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el.number}>
            <span style={{ margin: '10px' }}>{el.title}</span>
            <span style={{ margin: '10px' }}>{el.writer}</span>
          </div>
        ))}
      </InfiniteScroll>
      <Link href={'/section3/31-17-infinite-scroll-without-windowing-moved'}>
        이동하기
      </Link>
    </div>
  );
}
