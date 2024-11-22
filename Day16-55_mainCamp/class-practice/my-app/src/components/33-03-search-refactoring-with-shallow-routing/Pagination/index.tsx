export default function Pagination() {
  return (
    <>
      {new Array(10).fill('철수').map((_, index) => (
        <span
          id={String(index + 1)}
          key={index + 1}
          onClick={onClickPage}
          style={{ margin: '10px' }}
        >
          {index + 1}
        </span>
      ))}
    </>
  );
}
