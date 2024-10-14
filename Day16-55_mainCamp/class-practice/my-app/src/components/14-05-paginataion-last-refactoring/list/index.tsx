'use client';

export default function List({ data }) {
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number}>
          <span style={{ margin: '10px' }}>{el.title}</span>
          <span style={{ margin: '10px' }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
