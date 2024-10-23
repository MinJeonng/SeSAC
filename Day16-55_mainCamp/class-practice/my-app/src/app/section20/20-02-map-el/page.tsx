'use client';
export default function MapElPage() {
  //1. 기본방법
  ['a', 'b', 'c', 'd'].forEach((el, index) => {
    console.log('el : ', el);
    console.log('index :', index);
  });
  console.log('===========');

  //2. 매개변수 변경방법
  ['a', 'b', 'c', 'd'].forEach((item, num) => {
    console.log('item : ', item);
    console.log('num :', num);
  });
  console.log('===========');

  //3. 함수선언식 방법
  ['a', 'b', 'c', 'd'].forEach(function (item, num) {
    console.log('item : ', item);
    console.log('num :', num);
  });
  console.log('===========');

  //4. el, index 바꾸기
  ['a', 'b', 'c', 'd'].forEach((index, el) => {
    console.log('el : ', el);
    console.log('index :', index);
  });

  return <></>;
}
