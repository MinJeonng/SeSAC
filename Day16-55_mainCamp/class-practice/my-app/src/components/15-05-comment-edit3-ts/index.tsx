import { FetchBoardsQuery } from '@/commons/gql/graphql';
import { useState } from 'react';

interface ICommentItemProps {
  el: FetchBoardsQuery['fetchBoards'][0];
}
/*
아래 두개의 방법으로 해도 동일한 값이 나온다
객체.name ---> 철수
객체["name"] ---> 철수
 */

export default function CommentItem({ el }: ICommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        // true면 눌렀다는거니까 아래 보여주는것.
        <input type="text" />
      )}
    </div>
  );
}
