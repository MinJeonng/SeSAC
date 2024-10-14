'use client';

import { IListProps } from './types';

export default function List({ data }: IListProps) {
  return (
    <div>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
