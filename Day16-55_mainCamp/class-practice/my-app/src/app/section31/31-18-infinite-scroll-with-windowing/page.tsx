'use client';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FixedSizeList as List } from 'react-window';

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
    // 다른 페이지를 갔다가 돌아오면 문제가 될 수 있기에 보이는 부분만 렌더링하고 삭제하는 react-window를 쓰는 것
    //
    <div>
      <InfiniteScroll
        next={onNext} //hasmore가 실행되면 onNext가 실행
        hasMore={hasMore} //hasmore가 true일대 스크롤 내리면 생기는 것
        dataLength={data?.fetchBoards.length ?? 0}
        scrollableTarget="scrollTarget"
        loader={<></>} // 스크롤하여 추가로 더 받아와도 가상스크롤로 데이터 갯수는 동일하여 로딩이 풀리지 않음
      >
        <List
          height={300}
          width={'100%'}
          itemSize={50}
          itemCount={data?.fetchBoards.length ?? 0} //전체 데이터 개수
          itemData={data?.fetchBoards}
          outerElementType={OuterElement}
        >
          {({ index, style, data }) => (
            <div style={style}>
              <a>{data[index].title}</a>
              <span style={{ margin: '10px' }}>{data[index].writer}</span>
              <span style={{ margin: '10px' }}>{data[index].createdAt}</span>
              <span style={{ margin: '10px' }}>{data[index].contents}</span>
            </div>
          )}
        </List>
      </InfiniteScroll>
      <Link href={'/section31/31-18-infinite-scroll-with-windowing-moved'}>
        이동하기
      </Link>
    </div>
  );
}
const OuterElement = (props) => <div id="scrollTarget" {...props} />;
