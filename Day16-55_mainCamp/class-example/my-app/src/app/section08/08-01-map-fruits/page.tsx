const FRUITS = [
  { number: 1, title: '레드향' }, //<div>{FRUITS.number FRUITS.title}</div>
  { number: 2, title: '샤인머스켓' },
  { number: 3, title: '산청딸기' },
  { number: 4, title: '한라봉' },
  { number: 5, title: '사과' },
  { number: 6, title: '애플망고' },
  { number: 7, title: '딸기' },
  { number: 8, title: '천혜향' },
  { number: 9, title: '과일선물세트' },
  { number: 10, title: '귤' },
];
export default function MapFruitPage() {
  const result = FRUITS.map((el) => (
    <div key={el.number}>
      {el.number} {el.title}
    </div>
  ));
  return (
    <>
      <div>{result}</div>
      {/* 위에 코드는 값이 많아질수록 가독성과 속도가 떨어지게됌 
    유지보수 좋게 다시 만들어보자

    바로 return에다가 map 작성
    */}
      {FRUITS.map((el) => (
        <div key={el.number}>
          {el.number} {el.title}
        </div>
      ))}
    </>
  );
}
