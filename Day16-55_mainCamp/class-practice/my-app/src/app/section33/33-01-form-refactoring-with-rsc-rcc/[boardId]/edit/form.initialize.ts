'use client';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { IMyUpdateType } from './formSchema';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
    }
  }
`;

export const useInitialize = ({ setValue }) => {
  const { boardId } = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId },
  });

  //1. 수정하기 초기값 설정
  //data가 하나라도 수정이 되어야 버튼이 활성화 되게끔 햇음 , 여기에 trigger를 활성화하게되면 값이 변함이 없어도 일단 작동이 됌
  useEffect(() => {
    if (!data) return;
    const { title, contents } = data.fetchBoard;
    setValue('title', title);
    setValue('contents', contents);
  }, [data]);

  //2.수정완료 기능
  const onSubmit = async (data: IMyUpdateType) => {
    console.log(data);
  };

  return { onSubmit };
};
